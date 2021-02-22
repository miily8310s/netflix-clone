// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import API from '../axios'
import './Row.scss'

const BASE_URL = 'https://image.tmdb.org/t/p/original'

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

export const Row: React.FunctionComponent<Props> = ({
  title,
  fetchUrl,
  isLargeRow,
}: Props) => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await API.get(fetchUrl)
      setMovies(request.data.results)
    }
    fetchData()
  }, [fetchUrl])

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
            />
          ))
        }
      </div>
    </div>
  )
}
