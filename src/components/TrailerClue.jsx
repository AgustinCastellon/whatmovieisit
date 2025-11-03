import React, { useState } from 'react'
import { LoadingVideo } from '../skeleton loader/LoadingVideo';

export const TrailerClue = ({ trailerUrl }) => {

    const [isloading, setIsLoading] = useState(true);

    return (
        <>
            {isloading &&
                <LoadingVideo />
            }
            {trailerUrl == null && <spam className="fixed z-1">Video not found.</spam>}
            <iframe
                className="w-full h-full px-3 py-3 filter pointer-events-none blur-sm"
                src={`${trailerUrl}?autoplay=1&loop=1}`}
                allow="autoplay"
                allowFullScreen
                title="Tráiler"
                onLoad={() => setIsLoading(false)}
                style={{ display: isloading ? 'none' : 'block' }}
            />
        </>
    )
}
