import { HiddenTitle } from "../components/HiddenTitle"
import { usePoster } from "../hook/usePoster"
import { ClueSection } from "../components/ClueSection"
import { LoadingPage } from "../skeleton loader/LoadingPage"
import { MovieGuessChecker } from "../components/MovieGuessChecker"
import { useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"
import { LoadingVideo } from "../skeleton loader/LoadingVideo"
import { LoadingCoverImg } from "../skeleton loader/LoadingCoverImg"
import logo from '../assets/logo (1).png'
import { Navigate } from "react-router-dom";


export const MovieGame = () => {
    const { movie, imageUrl, videos, loading, error, title, overview, usedLang, refetch } = usePoster();
    const [showCorrectAnsModal, setShowCorrectAnsModal] = useState(false);
    const [coverImgLoading, setCoverImgLoading] = useState(true);
    const [showTitle, setShowTitle] = useState(false);

    
    useEffect(() => {
        setShowTitle(false)
    }, [movie]);

    if (loading) return <LoadingPage />
    if (error) return <Navigate to="/" replace />


    const getYear = () => {
        let date = movie.release_date.split("-")
        let year = date[0]
        return year
    }

    const getDirector = () => {
        var filterDirectors = movie.credits.crew.filter(f => f.job === "Director")
        return filterDirectors.map(d => d.name).join(', ')
    }

    //704630

    return (
        <>
            <div className="flex flex-col justify-center items-center lg:mt-10 md:mt-1">

                <div className="flex md:flex-col lg:flex-row lg:justify-between md:items-center lg:items-stretch h-auto 2xl:w-[80rem] xl:w-290 lg:w-[64rem] md:w-[36rem] w-full lg:mt-5 md:mt-1 bg-black/20  border border-amber-300/20 rounded-xl shadow-lg shadow-black/50 p-4">
                    <Link to={"/"}>
                        <button className="absolute md:ml-45 mt-3 lg:ml-0 lg:mt-0 rounded-md shadow-sm border-2 border-amber-300/60 px-2 py-2 text-white font-baloo text-sm flex items-center gap-1 cursor-pointer hover:bg-amber-300 hover:border-amber-300 hover:text-black transition ease-in-out duration-300">
                            <FaArrowLeft />
                            INICIO
                        </button>
                    </Link>
                    <div className="flex flex-col items-center justify-between grow ">
                        <header className="animate-blurred-fade-in animate-duration-300">
                            <img src={logo} alt="logo" className="w-55 drop-shadow-[0_0_10px_rgba(255,200,80,0.4)]" />
                        </header>
                        <div className="flex flex-col items-center md:order-2 lg:order-0 md:my-4 lg:my-0">
                            <HiddenTitle title={title} showTitle={showTitle} />
                            <span className="text-xs md:text-[10px] text-amber-200 font-baloo text-center mt-2 opacity-90">
                                La ayuda del título está en idioma: <span className="font-bold">{usedLang}</span>
                            </span>
                        </div>
                        <div className="lg:mt-5 2xl:mt-0">
                            <h3 className="font-baloo text-white font-bold text-center text-sm md:text-base mb-2">
                                Película del año <span className="text-amber-300">{getYear()}</span>, dirigida por{" "}
                                <span className="text-amber-300">{getDirector()}</span>
                            </h3>
                            <MovieGuessChecker game={movie} imageUrl={imageUrl} showCorrectAnsModal={showCorrectAnsModal} setShowCorrectAnsModal={setShowCorrectAnsModal} finalTitle={title} setShowTitle={setShowTitle} gameMode={"movie"} lblPlaceholder={"ESCRIBE EL NOMBRE DE LA PELICULA . . ."} refetch={refetch} />
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center shrink-0 mr-2 2xl:w-65 lg:w-58 2xl:h-85 xl:h-85 md:w-39 md:h-50 lg:h-auto xl:w-57 rounded-xl overflow-hidden shadow-lg shadow-amber-400/50 border p-[2px] border-amber-300/60 bg-gradient-to-r from-amber-400 via-white to-amber-400">
                        {!imageUrl ?
                            (
                                <spam className="flex absolute top-5 z-999 text-white font baloo">NO IMAGE</spam>

                            ) :
                            (<>
                                {coverImgLoading &&
                                    <LoadingCoverImg />
                                }
                                <>
                                    <img
                                        src={imageUrl}
                                        alt={movie.title}
                                        className={`absolute w-full h-full object-cover  transition-all duration-700 ${showCorrectAnsModal ? 'blur-0 scale-100' : 'blur-sm scale-110'
                                            }`}
                                        style={{ imageRendering: "pixelated" }}
                                        onLoad={() => setCoverImgLoading(false)}
                                    />
                                    < div className="absolute inset-0 animate-pulse bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                    <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_100%)]"></div>
                                    <span className={`relative text-amber-300/80 font-lucki lg:text-lg md:text-[9px] tracking-wider drop-shadow-lg drop-shadow-black/70 select-none ${coverImgLoading ? 'hidden' : 'block'}`}>
                                        ¿Qué película es?
                                    </span>

                                </>
                            </>
                            )}
                    </div>
                </div>
                <h1 className="font-lucki md:text-xl lg:text-4xl text-white drop-shadow-[0_0_10px_rgba(255,200,80,0.4)] sm:my-2 lg:my-4">PISTAS</h1>
                <div className="border-t border-amber-300/40 mb-6 w-2/3 mx-auto lg:block sm:hidden" />
                <ClueSection movie={movie} videos={videos} overview={overview} />
            </div >
        </>
    )
}
