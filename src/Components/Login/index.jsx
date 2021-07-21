import React from 'react'

import * as S from './styles'

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_API_KEY}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

export default function Login() {
  return <S.ButtonLogin href={AUTH_URL}>Login with Spotify</S.ButtonLogin>
}
