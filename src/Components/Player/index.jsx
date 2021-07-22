import React, { useState, useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Player({ token, trackUri }) {
  const [play, setPlay] = useState(false)

  useEffect(() => {
    setPlay(true)
  }, [trackUri])

  if (!token) return null

  return (
    <SpotifyPlayer
      token={token}
      showSaveIcon
      callback={(state) => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
      styles={{
        bgColor: '#eee',
        color: '#e20e8d',
        loaderColor: '#e20e8d',
        sliderColor: '#e20e8d',
        trackNameColor: '#fff',
        trackArtistColor: '#fff'
      }}
    />
  )
}
