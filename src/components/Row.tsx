// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import API from '../axios'

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
  // eslint-disable-next-line
  title,
  fetchUrl,
}: Props) => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await API.get(fetchUrl)
      setMovies(request.data.results)
    }
    fetchData()
  }, [fetchUrl])

  console.log(movies)
  return <div className="Row" />
}
