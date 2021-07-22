import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useAuth from '../hooks/useAuth'
import { NextSeo } from 'next-seo'
import SpotifyWebApi from 'spotify-web-api-node'
import axios from 'axios'
import DashboardTemplate from '../Templates/Dashboard'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_API_KEY
})

const Dashboard = () => {
  const router = useRouter()
  const {
    query: { code }
  } = router

  const accessToken = useAuth(code)
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  const [lyrics, setLyrics] = useState('')

  const handleChooseTrack = (track) => {
    setPlayingTrack(track)
    setSearch('')
    setLyrics('')
  }

  const handleSearch = (e) => setSearch(e.target.value)

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
    <>
      <NextSeo
        title="Template"
        description="A simple nextjs template to start a new project from scratch"
        canonical="https://meusite.com.br/"
        openGraph={{
          url: 'https://meusite.com.br/',
          title: 'Template',
          description:
            'A simple nextjs template to start a new project from scratch',
          images: [
            {
              url: 'https://meusite.com.br/img/band.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <DashboardTemplate
        handleSearch={handleSearch}
        handleChooseTrack={handleChooseTrack}
        search={search}
        searchResults={searchResults}
        playingTrack={playingTrack}
        lyrics={lyrics}
        accessToken={accessToken}
      />
    </>
  )
}

export default Dashboard
