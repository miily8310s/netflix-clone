// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import API from '../axios'
import './Row.scss'

const BASE_URL = 'https://image.tmdb.org/t/p/original'
const API_KEY = process.env.REACT_APP_API_ID

interface Props {
  title: string
  fetchUrl: string
  isLargeRow?: boolean
}

interface Movie {
  id: string
  name: string
  title: string
  original_name: string
  poster_path: string
  backdrop_path: string | null
}

interface Options {
  height: string
  width: string
  playerVars: {
    autoplay: 0 | 1 | undefined
  }
}

export const Row: React.FunctionComponent<Props> = ({
  title,
  fetchUrl,
  isLargeRow,
}: Props) => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [trailerUrl, setTrailerUrl] = useState<string | null>('')

  // ページがリロードされる度に
  useEffect(() => {
    const fetchData = async () => {
      const request = await API.get(fetchUrl)
      setMovies(request.data.results)
    }
    fetchData()
  }, [fetchUrl])

  const opts: Options = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  }

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      const trailerurl = await API.get(
        `/movie/${movie.id}/videos?api_key=${API_KEY}`
      )
      setTrailerUrl(trailerurl.data.results[0]?.key)
    }
    console.log(trailerUrl)
  }

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {
          // eslint-disable-next-line
          movies.map((movie, i) => (
            <img
              key={movie.id}
              className={`Row-poster${isLargeRow ? ' Row-poster-large' : ''}`}
              src={`${BASE_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))
        }
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}
