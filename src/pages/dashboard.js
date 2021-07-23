import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useAuth from '../hooks/useAuth'
import { NextSeo } from 'next-seo'
import SpotifyWebApi from 'spotify-web-api-node'
import axios from 'axios'
import DashboardTemplate from '../Templates/Dashboard'
import ModalLyrics from '../Components/Modal'

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
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleChooseTrack = (track) => {
    setPlayingTrack(track)
    // setSearch('')
    setLyrics('')
  }

  const handleSearch = (e) => setSearch(e.target.value)

  const handleOpenModal = () => setModalIsOpen(true)

  const handleCloseModal = () => setModalIsOpen(false)

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
        title="Spotify App Trinks"
        description="Teste front-end para a Trinks"
        canonical="https://spotify-app-trinks.vercel.app/"
        openGraph={{
          url: 'https://spotify-app-trinks.vercel.app/',
          title: 'Template',
          description: 'Teste front-end para a Trinks',
          images: [
            {
              url: 'https://spotify-app-trinks.vercel.app/img/band.png',
              width: 1280,
              height: 720,
              alt: 'Spotify App Trinks'
            }
          ],
          site_name: 'Spotify App Trinks'
        }}
      />
      <DashboardTemplate
        handleSearch={handleSearch}
        handleChooseTrack={handleChooseTrack}
        handleOpenModal={handleOpenModal}
        search={search}
        searchResults={searchResults}
        playingTrack={playingTrack}
        lyrics={lyrics}
        accessToken={accessToken}
      />
      <ModalLyrics
        handleCloseModal={handleCloseModal}
        modalIsOpen={modalIsOpen}
        lyrics={lyrics}
      />
    </>
  )
}

export default Dashboard
