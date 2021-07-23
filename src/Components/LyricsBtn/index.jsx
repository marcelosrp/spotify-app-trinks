import React from 'react'
import PropTypes from 'prop-types'
import { FaMusic } from 'react-icons/fa'

import * as S from './styles'

export default function LyricsBtn({ handleOpenModal }) {
  return (
    <S.Button
      type="button"
      title="Ver a letra da música"
      onClick={handleOpenModal}
    >
      <FaMusic />
    </S.Button>
  )
}

LyricsBtn.propTypes = {
  handleOpenModal: PropTypes.func.isRequired
}
