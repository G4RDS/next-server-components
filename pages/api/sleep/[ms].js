import session from '../../../libs/session'

export default async (req, res) => {
  session(req, res)

  if (req.method === 'GET') {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve()
      }, req.query.ms)
    )
    return res.json({ ok: true })
  }

  return res.send('Method not allowed.')
}
