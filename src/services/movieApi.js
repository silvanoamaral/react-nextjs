import axios from "axios"

const movieApi = async (url) => {
  const result = await axios(url)

  return result.data
}

export {
  movieApi
}
