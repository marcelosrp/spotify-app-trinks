import React from 'react'

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
