import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";

import requests from "./request";

function App() {
  return (
    <div className="app">
      <h1>WhatWeWatch</h1>
      <Banner></Banner>
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      ></Row>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      ></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
