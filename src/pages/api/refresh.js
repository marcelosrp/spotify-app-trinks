import SpotifyWebApi from 'spotify-web-api-node'

export default function Refresh(req, res) {
  if (req.method === 'POST') {
    const refreshToken = req.body.refreshToken

    const spotifyAPI = new SpotifyWebApi({
      redirectUri:
        process.env.NODE_ENV === 'production'
          ? process.env.NEXT_PUBLIC_REDIRECT_URI
          : 'http://localhost:3000/',
      clientId: process.env.NEXT_PUBLIC_API_KEY,
      clientSecret: process.env.NEXT_PUBLIC_API_KEY_SECRET,
      refreshToken
    })

    spotifyAPI
      .refreshAccessToken()
      .then((data) => {
        res.json({
          accessToken: data.body.access_token,
          expiresIn: data.body.expires_in
        })
      })
      .catch(() => {
        res.status(400).json({ message: 'Um erro foi encontrado' })
      })

    return
  }

  res.status(400).json({ message: 'Um erro foi encontrado' })
}
