import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { popularMovies } from '../utils/dummyData';
import Movie from './Movie';
// eslint-disable-next-line
import { fetchFromAPI } from '../utils/fetchFromAPI';
// eslint-disable-next-line
import { genresToId } from '../utils/genre';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';



const Row = ({ title, rowId }) => {

  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

  // fetched data for popular movies ============================================
  useEffect( ()=>{
    const data = fetchFromAPI(`discover/movie?with_genres${genresToId[title]}`).then((data)=>{setMovies(data?.results)})
  }, [title]);
  // =============================================================================

  // dummy data for popular movies ==============================================
  // useEffect(() => {
  //   const data = popularMovies;
  //   setMovies(data?.results)
  // }, [title])
  // ============================================================================


  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft -= 500;
  }
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft += 500;
  }
  


  return (
    <div className='row-component m-5'>
      <h3 className='text-gray-300 font-bold text-lg py-2'>{title}</h3>
      <div className=' w-full flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-25 hover:opacity-75 cursor-pointer z-10 hidden group-hover:block' size={40}
        />
        <div className='flex overflow-x-scroll scrollbar-hide' id={"slider" + rowId}>
          {movies.map((movie, index) => (
            <Movie movie={movie} key={index} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
    </div>
  )
}

export default Row