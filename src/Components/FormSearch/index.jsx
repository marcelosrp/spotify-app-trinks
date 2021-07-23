import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

export default function FormSearch({ search, handleSearch }) {
  return (
    <form>
      <S.InputSearch
        type="search"
        placeholder="Pesquise por artistas ou músicas"
        value={search}
        onChange={handleSearch}
      />
    </form>
  )
}

FormSearch.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired
}
