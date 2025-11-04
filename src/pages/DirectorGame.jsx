import { FaArrowLeft } from "react-icons/fa"
import { HiddenTitle } from "../components/HiddenTitle"
import { useFetchDirector } from "../hook/useFetchPeopleMovie"
import { LoadingPage } from "../skeleton loader/LoadingPage"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { MovieGuessChecker } from "../components/MovieGuessChecker"
import { LoadingDefault } from "../skeleton loader/LoadingDefault"
import logo from '../assets/logo (1).png'
import { Navigate } from "react-router-dom";

export const DirectorGame = () => {

    const { director, error, isLoading, refetch } = useFetchDirector();
    const [showCorrectAnsModal, setShowCorrectAnsModal] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [imfLoading, setImfLoading] = useState(true);

    useEffect(() => {
        setShowTitle(false)
    }, [director]);

    if (isLoading) return <LoadingPage />
    if (error) return <Navigate to="/" replace />


    return (
        <div className="relative flex flex-col justify-center items-center h-auto 2xl:w-320 lg:w-220 xl:w-270 md:w-140 lg:mt-5 md:mt- mx-auto  bg-black/20  border border-amber-300/20 rounded-xl shadow-lg shadow-black/50 p-4">
            <Link to={"/"}>
                <button className="absolute left-2 border-2 border-amber-300/60 px-2 py-2 rounded-md shadow-sm text-white font-baloo text-sm flex items-center gap-1 cursor-pointer hover:bg-amber-300 hover:border-amber-300 hover:text-black transition ease-in-out duration-300">
                    <FaArrowLeft />
                    INICIO
                </button>
            </Link>
            <header className="">
                <img src={logo} alt="logo" className="w-55" />
            </header>
            <h1 className="font-baloo text-4xl mt-5 text-white font-extrabold drop-shadow-lg drop-shadow-black/70 ">NOMBRE</h1>
            <div className="mb-10">
                <HiddenTitle title={director.name} showTitle={showTitle} />
            </div>
            <MovieGuessChecker game={director} imageUrl={director.profile} showCorrectAnsModal={showCorrectAnsModal} setShowCorrectAnsModal={setShowCorrectAnsModal} finalTitle={director.name} setShowTitle={setShowTitle} gameMode={"director"} lblPlaceholder={"ESCRIBE EL NOMBRE DEL DIRECTOR . . ."} refetch={refetch} />
            <span className="relative text-amber-300 font-lucki text-lg sm:text-xl mt-6 tracking-widest drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] select-none animate-fadeInSlow">
                ¿Quién dirigió estas películas?
            </span>
            <div className="border-t border-amber-300/40 mt-6 w-2/3 mx-auto" />
            <section className="flex justify-center flex-wrap items-center gap-3 mt-5">
                {director.posters.map(
                    (m, index) =>
                        m.imgUrl && (
                            <div
                                key={index}
                                className="relative 2xl:w-55 xl:w-47 lg:w-37 md:w-34 sm:w-32 w-28 aspect-[2/3] overflow-hidden rounded-lg group
                                p-[2px] bg-gradient-to-r from-amber-400 via-white to-amber-400
                                animate-border-shine transition-all duration-500 drop-shadow-lg drop-shadow-amber-300/50 hover:rounded-xl"
                            >
                                {imfLoading && <LoadingDefault />}
                                <img
                                    src={m.imgUrl}
                                    className={`w-full h-full object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:scale-105 ${imfLoading ? 'opacity-0' : 'opacity-100'}`}
                                    onLoad={() => setImfLoading(false)}
                                />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-400 bg-gradient-to-tr from-transparent via-white/30 to-transparent blur-sm"></div>
                                <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-amber-300/60 transition-all duration-500"></div>
                            </div>
                        )
                )}
            </section>
        </div>
    )
}
