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
        color: '#1db954',
        loaderColor: '#1db954',
        sliderColor: '#1db954',
        trackNameColor: '#1db954',
        trackArtistColor: '#000'
      }}
    />
  )
}
