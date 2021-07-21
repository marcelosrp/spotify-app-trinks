import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

  useEffect(() => {
    axios
      .post('/api/auth', {
        code
      })
      .then((res) => {
        const { accessToken, refreshToken, expiresIn } = res.data
        setAccessToken(accessToken)
        setRefreshToken(refreshToken)
        setExpiresIn(expiresIn)

        window.history.pushState({}, null, '/dashboard')
      })
      .catch(() => {
        window.location = '/'
      })
  }, [code])

  useEffect(() => {
    if (!refreshToken || !expiresIn) return

    const interval = setInterval(() => {
      axios
        .post('/api/refresh', {
          refreshToken
        })
        .then((res) => {
          const { accessToken, expiresIn } = res.data
          setAccessToken(accessToken)
          setExpiresIn(expiresIn)
        })
        .catch(() => {
          window.location = '/'
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken
}
