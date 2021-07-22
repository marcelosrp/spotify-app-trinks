import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import LoginBtn from '../../Components/LoginBtn'
import Logo from '../../Components/Logo'
import Image from 'next/image'

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
      <div className="box-login">
        <Logo />
        <S.LoginContent>
          <h1>
            Faça seu login no Spotify clicando <br /> no botão abaixo
          </h1>
          <LoginBtn />
        </S.LoginContent>
      </div>
      <div className="illustration">
        <Image
          src="/img/band.png"
          alt="band"
          width="640"
          height="360"
          quality={75}
        />
      </div>
    </S.Wrapper>
  )
}
