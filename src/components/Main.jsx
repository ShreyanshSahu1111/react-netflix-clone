import React from 'react'
import { useEffect } from "react";
import { useState } from 'react'
import { popularMovies } from "../utils/dummyData";
// eslint-disable-next-line
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Main = () => {

  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random()*movies.length)]

  // fetched data for popular movies ============================================
  // useEffect(()=>{
  //   const data = fetchFromAPI(`discover/movie?page=1`).then( (data) => {setMovies(data.results)});
  // }, [])
  //=============================================================================

  // dummy data for popular movies ==============================================
  useEffect( () => {
    const data = popularMovies;
    setMovies(data?.results)
  }, [])
  // ============================================================================

  return (
    <div>
      
    </div>
  )
}

export default Main;