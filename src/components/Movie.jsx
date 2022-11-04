import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { truncateString } from '../utils/genre';
import { UserAuth } from '../context/AuthContext';
import { db } from '../Firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';


const Movie = ({ movie, index }) => {

    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const { user } = UserAuth();

    const movieID = doc(db, 'users', `${user?.email}`);

    const saveShow = async () => {
        if (user?.email) {
            setLike(!like);
            setSaved(true);
            await updateDoc(movieID,
                {
                    savedShows: arrayUnion({
                        id: movie.id,
                        title: movie.title,
                        img: movie.backdrop_path
                    })
                })
        } else {
            alert("Sign in first")
        }
    }


    return (
        <div className=' movieComponent h-[140px] md:h-[200px] lg:h-[250px] min-w-fit relative mx-3 cursor-pointer'>
            <img className='text-white h-full w-full ' src={movie?.backdrop_path} alt={movie?.title} />
            <div className='bg-black absolute top-0 left-0 opacity-0  h-full w-full overflow-hidden hover:opacity-70'>
                <div className='flex items-center m-3'>
                    <p onClick={saveShow}>
                        {like ? (<FaHeart className=' text-gray-300' />) :
                            (<FaRegHeart className=' text-gray-300' />)}
                    </p>
                    <p className='text-white text-lg font-bold ml-4'>{movie.title}</p>
                </div>
                <div className='m-10'><p className='xs:hidden sm:text-white text-md '>{truncateString(movie?.overview, 200)}</p></div>
            </div>
        </div>
    )
}

export default Movie