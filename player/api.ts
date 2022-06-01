const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
		'X-RapidAPI-Key': process.env.RAPIDAPI_KEY
	}
};

export default {
  getTrack: async (trackId) => {
    if (!trackId) return {}
    const response = await fetch(`https://spotify23.p.rapidapi.com/tracks/?ids=${trackId}`, options)
    const { tracks } = await response.json()
    return tracks
  }
}
