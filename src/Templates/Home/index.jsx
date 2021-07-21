import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Login from '../../Components/Login'

import * as S from './styles'

export default function HomeTemplate() {
  const router = useRouter()

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      router.push({
        pathname: '/dashboard',
        query: { code }
      })
      return
    }
  }, [router])

  return (
    <S.Wrapper>
      <Login />
    </S.Wrapper>
  )
}
