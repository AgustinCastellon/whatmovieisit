import { FaPlay, FaStar, FaTags } from "react-icons/fa";
import { useMovieTrailer } from "../hook/useMovieTrailer"
import { useState } from "react"
import { MdMovie } from "react-icons/md";
import { TrailerClue } from "./TrailerClue"
import { ClueCover } from "./ClueCover";
import { OverviewClue } from "./OverviewClue";
import { ClueStars } from "./ClueStars";
import { ClueGenres } from "./ClueGenres";

export const ClueSection = ({ movie, videos, overview }) => {

    const trailerUrl = useMovieTrailer(videos)
    const [play, setPlay] = useState(false);
    const [overviewOpen, setOverViewOpen] = useState(false);
    const [starsOpen, setStarsOpen] = useState(false);
    const [genresOpen, setGenresOpen] = useState();

    const handleOverview = () => {
        setOverViewOpen(prev => !prev)
    }
    const handlePlay = () => {
        setPlay(prev => !prev)
    }
    const handleStarsOpen = () => {
        setStarsOpen(prev => !prev)
    }

    const handleGenresOpen = () => {
        setGenresOpen(prev => !prev)
    }

    return (
        <div className="grid grid-cols-5 grid-rows-5 gap-4 2xl:w-320 lg:w-[64rem] 2xl:h-77 xl:h-75 lg:h-70 xl:w-290  md:w-140 md:h-79 content-center align-middle bg-black/20  border border-amber-300/20 rounded-xl shadow-lg shadow-black/50 p-5">
            <div
                className="lg:col-span-2 md:col-span-3 md:col-start-2   
                            bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400  shadow-white/40 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]
                            outline-2 outline-amber-300/70
                            hover:brightness-105 transition-transform ease-in-out duration-300
                            rounded-lg  lg:row-span-5 md:row-span-3 md:row-start-3 flex justify-center items-center cursor-pointer group shadow-lg "
                onClick={handlePlay}
            >
                {play ? (
                    <TrailerClue trailerUrl={trailerUrl} />
                ) : (
                    <ClueCover Icon={FaPlay} label={"TRAILER"} />
                )}
            </div>
            <div
                className="lg:col-span-3 md:col-span-5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400  shadow-white/40 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]
                            outline-2 outline-amber-300/70
                            hover:brightness-105 transition-transform ease-in-out duration-300
                            rounded-lg lg:row-span-2 lg:col-start-3 md:col-start-1 flex justify-center items-center cursor-pointer group shadow-lg"
                onClick={handleOverview}
            >
                {overviewOpen ? (
                    <OverviewClue overview={overview} />
                ) : (
                    <ClueCover Icon={MdMovie} label={"SINOPSIS"} />
                )}
            </div>
            <div
                className="lg:col-span-2 md:col-span-4 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400  shadow-white/40 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]
                            outline-2 outline-amber-300/70
                            hover:brightness-105 transition-transform ease-in-out duration-300
                            rounded-lg lg:row-span-3 lg:col-start-3 row-start-3 md:row-start-2 flex justify-center items-center cursor-pointer group shadow-lg"
                onClick={handleStarsOpen}
            >
                {starsOpen ? (
                    <ClueStars movie={movie} />
                ) : (
                    <ClueCover Icon={FaStar} label={"ELENCO"} />
                )}
            </div>
            <div
                className="lg:row-span-3  bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400  shadow-white/40 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]
                            outline-2 outline-amber-300/70
                            hover:brightness-105 transition-transform ease-in-out duration-300
                            rounded-lg col-start-5 lg:row-start-3 flex justify-center items-center cursor-pointer group shadow-lg"
                onClick={handleGenresOpen}
            >
                {
                    genresOpen ? (
                        <ClueGenres movie={movie} />
                    ) : (
                        <ClueCover Icon={FaTags} label={"GENEROS"} />
                    )
                }
            </div>
        </div>
    )
}
