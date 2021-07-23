import lyricsFinder from 'lyrics-finder'

export default async function AuthLogin(req, res) {
  const lyrics =
    (await lyricsFinder(req.query.artist, req.query.track)) ||
    'A letra dessa música não foi encontrada :('

  res.status(200).json({ lyrics })
}
