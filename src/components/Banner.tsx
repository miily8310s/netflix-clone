import React, { useState, useEffect } from 'react'
import API from '../axios'
import { requests } from '../request'
import './Banner.scss'

interface movieProps {
  title?: string
  name?: string
  orignal_name?: string
  backdrop_path?: string
  overview?: string
}

export const Banner: React.FunctionComponent<movieProps> = () => {
  const [movie, setMovie] = useState<movieProps>({})
  useEffect(() => {
    const fetchData = async () => {
      const request = await API.get(requests.feachNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }
    fetchData()
  }, [])
  console.log(movie)

  const truncate = (str: string | undefined, n: number) => {
    if (str !== undefined) {
      return str.length > n ? str?.substr(0, n - 1) + '...' : str
    }
  }

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="Banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.orignal_name}
        </h1>
        <div className="Banner-buttons">
          <button className="Banner-button">Play</button>
          <button className="Banner-button">My List</button>
        </div>

        <h1 className="Banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="Banner-fadeBottom" />
    </header>
  )
}
