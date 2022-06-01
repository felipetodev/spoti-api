const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
		'X-RapidAPI-Key': process.env.RAPIDAPI_KEY
	}
};

export default {
  getPlaylist: async (playlistId: string) => {
    if (!playlistId) return {}

    let res
    try {
      res = await fetch(`https://spotify23.p.rapidapi.com/playlist/?id=${playlistId}`, options)

      if (!res.ok) {
        console.log(res)
      }

      res = await res.json()
    } catch (e) {
      console.error(e)
      return {}
    }
    return res
  },
  getPlaylistTrack: async (playlistId: string) => {
    if (!playlistId) return {}
    console.log({ playlistId })
    const trackRes = await fetch(`https://spotify23.p.rapidapi.com/playlist_tracks/?id=${playlistId}&offset=0&limit=100`, options)
    const trackData = await trackRes.json()
    console.log(trackData)
    return trackData
  }
}
