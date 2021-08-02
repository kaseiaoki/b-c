import nextConfig from '../../next.config'
const openBDAPIUrl = process.env.OPEN_BD_API_URL

const GetOpenBD = async (isbn) => {
  const key = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const res = await fetch(`${openBDAPIUrl}?isbn=${isbn}`, key).catch((err) => {
    console.error(err)
    return ''
  })
  const json = (await res) ? res.json() : ''
  if (json.errorMessage) {
    console.error(json.errorMessage)
    throw new Error('Failed to fetch API')
  }
  return json
}

export default GetOpenBD
