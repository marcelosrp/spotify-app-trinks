import lyricsFinder from 'lyrics-finder'

export default async function AuthLogin(req, res) {
  const lyrics =
    (await lyricsFinder(req.query.artist, req.query.track)) || 'No lyrics found'

  res.status(200).json({ lyrics })
}
