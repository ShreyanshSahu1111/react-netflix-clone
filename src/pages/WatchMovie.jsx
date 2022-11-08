import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchFromAPI, IMAGE_BASE_URL } from '../utils/fetchFromAPI';

const WatchMovie = () => {

  const [movie, setMovie] = useState('');

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`movie/${id}`).then((data) => { setMovie(data) })
  }, []);


  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black' />
        <img className='w-full h-[550px]' src={IMAGE_BASE_URL + movie?.backdrop_path} alt={movie?.title + " backdrop"} />
        

        <div className='absolute w-full top-40 p-4 md:p-8'>
          <h1 className='text-white text-5xl'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 rounded py-2 px-5'>Play</button>
            <button className='border text-white border-gray-300 rounded py-2 px-5 ml-4'>Watch Later</button>
          </div>
          <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
          <p className='w-full md:w-[50%] ld:w-[20%] text-gray-300'>
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WatchMovie