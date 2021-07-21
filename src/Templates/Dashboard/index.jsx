import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useAuth from '../../hooks/useAuth'
import TrackResults from '../../Components/TrackResults'
import Player from '../../Components/Player'
import SpotifyWebApi from 'spotify-web-api-node'
import axios from 'axios'

import * as S from './styles'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_API_KEY
})

export default function DashboardTemplate() {
  const router = useRouter()
  const {
    query: { code }
  } = router

  const accessToken = useAuth(code)
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  const [lyrics, setLyrics] = useState('')

  const chooseTrack = (track) => {
    setPlayingTrack(track)
    setSearch('')
    setLyrics('')
  }

  useEffect(() => {
    if (!accessToken) return

    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false

    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return

      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0]
          )

          return {
            artists: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage
          }
        })
      )
    })

    return () => (cancel = true)
  }, [search, accessToken])

  useEffect(() => {
    if (!playingTrack) return

    axios
      .get('/api/lyrics', {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist
        }
      })
      .then((res) => {
        setLyrics(res.data.lyrics)
      })
  }, [playingTrack])

  return (
    <S.Container>
      <form>
        <S.InputSearch
          type="search"
          placeholder="Pesquise por artistas ou músicas"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <S.SongsWrapper>
        {searchResults.map((track) => {
          return (
            <TrackResults
              track={track}
              key={track.uri}
              chooseTrack={chooseTrack}
            />
          )
        })}
        {searchResults.length === 0 && <S.Lyrics>{lyrics}</S.Lyrics>}
      </S.SongsWrapper>

      <S.PlayerWrapper>
        <Player token={accessToken} trackUri={playingTrack?.uri} />
      </S.PlayerWrapper>
    </S.Container>
  )
}
