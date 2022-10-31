import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { truncateString } from '../utils/genre';


const Movie = ({ movie, index }) => {

    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);

    return (
        <div className=' movieComponent h-[140px] md:h-[200px] lg:h-[250px] min-w-fit relative mx-3 cursor-pointer'>
            <img className='text-white h-full w-full ' src={movie?.backdrop_path} alt={movie?.title} />
            <div className='bg-black absolute top-0 left-0 opacity-0  h-full w-full overflow-hidden hover:opacity-70'>
                <div className='flex items-center m-3'>
                    {like ? (<FaHeart className='absolute left-2 text-gray-300' />) :
                        (<FaRegHeart className=' text-gray-300' />)}
                    <p className='text-white text-[200%] font-bold ml-4'>{movie.title}</p>
                </div>
                <div className='m-10'><p className='text-white text-lg '>{truncateString(movie?.overview, 200)}</p></div>
            </div>
        </div>
    )
}

export default Movie