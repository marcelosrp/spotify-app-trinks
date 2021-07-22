import React from 'react'

import * as S from './styles'

export default function TrackResults({
  track,
  lyrics,
  handleChooseTrack,
  handleOpenModal
}) {
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
        <S.Button onClick={() => handleOpenModal(lyrics)}>Ver letra</S.Button>
      </S.TrackInfos>
    </S.TrackWrapper>
  )
}
