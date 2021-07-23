import React from 'react'

import * as S from './styles'

let URL = ''

if (process.env.NODE_ENV === 'production') {
  URL = process.env.NEXT_PUBLIC_REDIRECT_URI
} else {
  URL = 'http://localhost:3000/'
}

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_API_KEY}&response_type=code&redirect_uri=${URL}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

export default function LoginBtn() {
  return <S.ButtonLogin href={AUTH_URL}>Login com Spotify</S.ButtonLogin>
}
