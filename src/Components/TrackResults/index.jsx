import React from 'react'

import * as S from './styles'

export default function TrackResults({ track, handleChooseTrack }) {
  const handlePlay = () => {
    handleChooseTrack(track)
  }

  return (
    <S.TrackWrapper title={track.title}>
      <S.TrackThumb
        onClick={handlePlay}
        src={track.albumUrl.url}
        alt={track.title}
      />
      <S.TrackInfos>
        <S.TrackTitle onClick={handlePlay}>{track.title}</S.TrackTitle>
        <S.TrackMuted>{track.artists}</S.TrackMuted>
      </S.TrackInfos>
    </S.TrackWrapper>
  )
}
