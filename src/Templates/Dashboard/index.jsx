import React from 'react'
import FormSearch from '../../Components/FormSearch'
import TrackResults from '../../Components/TrackResults'
import Player from '../../Components/Player'

import * as S from './styles'

export default function DashboardTemplate({
  handleSearch,
  handleChooseTrack,
  search,
  searchResults,
  playingTrack,
  lyrics,
  accessToken
}) {
  return (
    <S.Container>
      <FormSearch search={search} handleSearch={handleSearch} />

      <S.SongsWrapper>
        {searchResults.map((track) => {
          return (
            <TrackResults
              track={track}
              key={track.uri}
              handleChooseTrack={handleChooseTrack}
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
