import React, { useState } from 'react'
import { FaCheckCircle, FaStar, FaTimesCircle } from 'react-icons/fa'
import { GiPadlock } from 'react-icons/gi'

export const MovieCard = ({ movie, rival, setIsCorrect, setSelectedId, selectedId, isExiting, isEntering, stopTimer, SetOpponents }) => {

    const [wasCorrect, setWasCorrect] = useState(null);

    const handleChosenOne = (movie, rival) => {
        if (movie.release_date > rival.release_date) {
             setIsCorrect(false)
            setWasCorrect(false)
        } else {
            setIsCorrect(true)
            setWasCorrect(true)
        }
        setSelectedId(movie.id);
        SetOpponents({first: movie.poster, second:rival.poster, releaseFirst: movie.release_date, releaseSecond: rival.release_date})
        stopTimer();
    }


    return (
        <>

            <div
                className={`group relative w-[140px] sm:w-[180px] md:w-[220px] cursor-pointer transition-transform duration-300 hover:scale-[1.03] 
             ${selectedId ? 'pointer-events-none' : ''} ${isExiting ? 'animate-fade-out-right' : ''} ${isEntering ? 'animate-fade-in-right' : ''}`}
                onClick={() => handleChosenOne(movie, rival)}
            >

                {selectedId === movie.id && (
                    <div
                        className={`absolute inset-0 z-9 rounded-lg text-center bg-gradient-to-t 
                         ${wasCorrect ? "from-green-600/50" : "from-red-600/50"} to-transparent ${selectedId ? 'animate-fade-in animate-duration-faster' : ''}`}
                    >
                        {wasCorrect ? (
                            <FaCheckCircle className="text-green-400 bg-white rounded-full text-3xl drop-shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        ) : (
                            <FaTimesCircle className="text-red-400 bg-white rounded-full text-3xl drop-shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        )}
                    </div>
                )}

                <div className="absolute inset-0 blur-xl bg-amber-300/20 group-hover:bg-amber-300/30 transition duration-300 rounded-xl"></div>
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="relative rounded-xl border border-amber-300/40 shadow-xl shadow-black/40 object-cover w-full h-full 
                 group-hover:shadow-amber-300/20 group-hover:brightness-110 transition-all duration-300"
                />


                <div className="absolute bottom-0 left-0 right-0 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 
                    bg-gradient-to-t from-black/70 to-transparent text-white font-baloo text-center text-sm 
                    p-2 rounded-b-xl transition-all duration-300">
                    {movie.title}
                </div>


                <div className="absolute flex items-center justify-center top-2 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full 
                    border border-amber-300/40 text-white text-xs font-baloo shadow-md backdrop-blur-sm gap-1">
                    <FaStar className='text-yellow-400' /><h3>{movie.vote_average.toFixed(1)}</h3>
                </div>

            </div >
        </>
    )
}
