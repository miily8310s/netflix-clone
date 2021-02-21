// const API_KEY = ''
const API_KEY = process.env.REACT_APP_API_ID
const LANG_COUNTRY = 'en-us'

interface fetchRequests {
  feachTrending: string
  feachNetflixOriginals: string
  feactTopRated: string
  feactActionMovies: string
  feactComedyMovies: string
  feactHorrorMovies: string
  feactRomanceMovies: string
  feactDocumentMovies: string
}

export const requests: fetchRequests = {
  feachTrending: `/trending/all/week?api_key=${API_KEY}&language=${LANG_COUNTRY}`,
  feachNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  feactTopRated: `/discover/tv?api_key=${API_KEY}&languager=${LANG_COUNTRY}`,
  feactActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  feactComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  feactHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  feactRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  feactDocumentMovies: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
}
