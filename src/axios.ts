import axios, { AxiosInstance } from 'axios'

const apiURL = 'https://api.themoviedb.org/3'

const instance: AxiosInstance = axios.create({
  baseURL: apiURL,
})

export default instance
