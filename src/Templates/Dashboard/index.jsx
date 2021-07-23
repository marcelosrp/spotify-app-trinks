import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../Components/Logo'
import FormSearch from '../../Components/FormSearch'
import Avatar from '../../Components/Avatar'
import TrackResults from '../../Components/TrackResults'
import Player from '../../Components/Player'
import LyricsBtn from '../../Components/LyricsBtn'

import * as S from './styles'

export default function DashboardTemplate({
  handleSearch,
  handleChooseTrack,
  handleOpenModal,
  search,
  searchResults,
  playingTrack = undefined,
  accessToken = undefined
}) {
  return (
    <S.Container>
      <S.Sidebar>
        <Logo />
      </S.Sidebar>
      <S.Content>
        <S.Header>
          <FormSearch search={search} handleSearch={handleSearch} />
          <Avatar />
        </S.Header>

        <S.SongsWrapper>
          {searchResults.map((track) => {
            return (
              <TrackResults
                key={track.uri}
                track={track}
                handleChooseTrack={handleChooseTrack}
              />
            )
          })}
        </S.SongsWrapper>

        <S.PlayerWrapper>
          <Player token={accessToken} trackUri={playingTrack?.uri} />
        </S.PlayerWrapper>
      </S.Content>

      {playingTrack !== undefined && (
        <LyricsBtn handleOpenModal={handleOpenModal} />
      )}
    </S.Container>
  )
}

DashboardTemplate.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleChooseTrack: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  searchResults: PropTypes.array.isRequired,
  playingTrack: PropTypes.object,
  accessToken: PropTypes.string
}
