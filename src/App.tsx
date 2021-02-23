import React from 'react'
import './App.css'
import { Nav } from './components/Nav'
import { Row } from './components/Row'
import { Banner } from './components/Banner'
import { requests } from './request'

// eslint-disable-next-line
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGUINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
      {/* MEMO：現状表示できず */}
      {/* <Row title="Action Movies" fetchUrl={requests.feactActionMovies} /> */}
      <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
      {/* MEMO：現状表示できず */}
      {/* <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies} /> */}
      <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} />
      <Row title="DOcumentaries" fetchUrl={requests.feactDocumentMovies} />
    </div>
  )
}

export default App
