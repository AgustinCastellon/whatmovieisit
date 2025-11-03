import { useState } from "react";
import { getProfile } from "../helpers/imagesService"


export const ClueStars = ({ movie }) => {

    const [imgLoading, setImgLoading] = useState(true);

    const getStars = () => {
        return movie?.credits?.cast?.slice(0, 3).map(c => ({
            name: c.name,
            profilePath: getProfile(c.profile_path),
            castId: c.cast_id

        })) || []
    }

    const stars = getStars()

    return (
        <div className="flex 2xl:gap-15 lg:gap-6 xl:gap-8 justify-center w-full pl-2">
            {stars.map((star) => (
                <div key={star.castId} className="flex flex-col justify-center items-center">
                    {star.profilePath ? (
                        <>
                            {imgLoading &&
                                <div className={`flex flex-col items-center justify-center md:hidden lg:flex 2xl:rounded-2xl lg:rounded-lg 2xl:w-20 lg:w-13 lg:h-19 2xl:h-30 xl:w-16 xl:h-23 border border-black bg-amber-200 `}>
                                    <svg className=" z-99 h-6 w-6 animate-spin text-black " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                </div>
                            }
                            <img
                                src={star.profilePath}
                                alt={star.name}
                                className={`2xl:rounded-2xl lg:rounded-lg md:hidden lg:block object-cover 2xl:w-20 lg:w-13 xl:w-16 border border-black ${imgLoading ? 'hidden' : 'block'}`}
                                onLoad={() => setImgLoading(false)}
                                
                            />
                        </>
                    ) :
                        (<div className="rounded-2xl object-cover w-20 h-full bg-red-400 border border-black">
                            <span className="font-bold font-baloo text-xs h-full flex items-center text-center">image not found</span>
                        </div>
                        )}
                    <h3 className="line-clamp-1 2xl:text-sm lg:text-[10px] md:text-[10px] md:pr-4 lg:pr-0 font-bold ">{star.name}</h3>
                </div>
            ))}
        </div>
    )
}
