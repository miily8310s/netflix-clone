// Navコンポーネント
export interface navProps {
  className?: string
}

// Bannerコンポーネント
export interface movieProps {
  title?: string
  name?: string
  orignal_name?: string
  backdrop_path?: string
  overview?: string
}

// Rowコンポーネント
export interface rowProps {
  title: string
  fetchUrl: string
  isLargeRow?: boolean
}

export interface Movie {
  id: string
  name: string
  title: string
  original_name: string
  poster_path: string
  backdrop_path: string | null
}

export interface Options {
  height: string
  width: string
  playerVars: {
    autoplay: 0 | 1 | undefined
  }
}
