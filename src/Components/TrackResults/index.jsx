import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

export default function TrackResults({ track, handleChooseTrack }) {
  const handlePlay = () => {
    handleChooseTrack(track)
  }

  return (
    <S.TrackWrapper title={track.title} onClick={handlePlay}>
      <S.TrackThumb src={track.albumUrl.url} alt={track.title} />
      <S.TrackInfos>
        <S.TrackTitle>{track.title}</S.TrackTitle>
        <S.TrackMuted>{track.artists}</S.TrackMuted>
      </S.TrackInfos>
    </S.TrackWrapper>
  )
}

TrackResults.propTypes = {
  track: PropTypes.object.isRequired,
  handleChooseTrack: PropTypes.func.isRequired
}
