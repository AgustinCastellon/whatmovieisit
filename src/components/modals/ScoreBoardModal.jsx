import React from 'react'
import { FaArrowLeft, FaCoffee, FaShare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BackGroundWinGame } from '../BackGroundWinGame'

export const ScoreBoardModal = ({
    roundStats,
    averageTime,
    bestScore,
    totalPoints,
    accuracy,
    maxStreak,
    resetStats,
    refetch,
    setShowScoreBoard }) => {

    const handleNextGame = () => {
        resetStats()
        refetch()
        setShowScoreBoard(false)
    }

    return (
        <>
            <div className='absolute z-99'>
                <div className='fixed inset-0 area'>
                    <BackGroundWinGame />
                </div>
                <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center
                border border-amber-300/30 w-[90vw] max-w-[1000px] bg-black/50 backdrop-blur-3xl rounded-lg shadow-lg shadow-black animate-zoom-in'>
                    <Link to={"/"}>
                        <button className="absolute z-999 left-2 top-3 rounded-md shadow-sm border-2 border-amber-300/60 px-2 py-2 text-white font-baloo text-sm flex items-center gap-1 cursor-pointer hover:bg-amber-300 hover:border-amber-300 hover:text-black transition ease-in-out duration-300">
                            <FaArrowLeft />
                            INICIO
                        </button>
                    </Link>
                    <h1 className='font-baloo text-2xl text-white font-bold my-4'>RESULTADOS</h1>
                    <nav className='flex w-[60vw] max-w-[800px] items-center justify-start overflow-x-auto gap-3 pb-2 bg-black/20 rounded-lg'>
                        {roundStats?.map(((r, index) => (
                            <div key={index} className='relative flex shrink-0 flex-col items-center justify-center w-[140px] sm:w-[130px] px-2 bg-black/40 backdrop-blur-xl shadow shadow-black/40 border border-amber-300/20 rounded-lg'>
                                <h1 className='text-white font-baloo'>RONDA {index + 1}</h1>
                                <div className='flex flex-col justify-center items-center w-full my-1'>
                                    <div className='relative flex justify-center w-[114px] h-[171px]'>
                                        <div className='absolute bottom-0 w-full m-x-1 text-white z-999 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center text-sm font-baloo'>{r.opponents.releaseFirst}</div>
                                        <img src={r.opponents.first} alt="" className={`h-full z-998 w-full border-2 ${r.win ? 'border-green-400' : 'border-red-400'}`} />
                                    </div>
                                    <span className={`font-baloo ${r.win ? 'text-green-400' : 'text-red-400'}`}>+{r.win ? r.points : '0'}</span>
                                    <div className='relative flex justify-center w-[114px] h-[170px]'>
                                        <div className='absolute bottom-0 w-full m-x-1 text-white z-999 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center text-sm font-baloo'>{r.opponents.releaseSecond}</div>
                                        <img src={r.opponents.second} alt="" className={`h-full w-full border-2 ${r.win ? 'border-red-400' : 'border-green-400'}`} />
                                    </div>
                                </div>
                            </div>
                        )))}
                    </nav>
                    <section className="w-[90vw] max-w-[950px] mx-auto flex gap-4 mt-4 text-white font-baloo">
                        <div className="flex-1 flex flex-col items-center justify-center bg-black/40 backdrop-blur-xl rounded-lg p-4 border border-amber-300/20 shadow shadow-black/40 min-h-[140px]">
                            <h1 className="text-xl font-bold mb-2">PUNTOS</h1>
                            <div className="flex gap-6 text-lg">
                                <div className="flex flex-col items-center">
                                    <span className="text-amber-300">Total</span>
                                    <span>{totalPoints}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-amber-300">Mejor</span>
                                    <span>{bestScore}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center bg-black/40 backdrop-blur-xl rounded-lg p-4 border border-amber-300/20 shadow shadow-black/40 min-h-[140px]">
                            <h1 className="text-xl font-bold mb-2">PROMEDIOS</h1>
                            <div className="flex gap-6 text-lg">
                                <div className="flex flex-col items-center">
                                    <span className="text-amber-300">Aciertos</span>
                                    <span>{accuracy.toFixed(2)}%</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-amber-300">Tiempo</span>
                                    <span>{averageTime.toFixed(2)}s</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center bg-black/40 backdrop-blur-xl rounded-lg p-4 border border-amber-300/20 shadow shadow-black/40 min-h-[140px]">
                            <h1 className="text-xl font-bold mb-2">MEJOR RACHA</h1>
                            <p className="text-3xl text-amber-300 font-bold">{maxStreak}</p>
                        </div>
                    </section>
                    <section className="w-[90vw] max-w-[950px] mx-auto mt-6 mb-2 flex items-center justify-between">

                        <div className="flex gap-3">
                            <button className="flex items-center justify-center bg-none hover:bg-amber-300 text-white p-2 border-2  border-amber-300/60 hover:border-amber-300 hover:text-black font-baloo transition duration-400 ease-in-out cursor-pointer rounded-lg">
                                <FaShare className='mr-1' /> SHARE
                            </button>
                            <button className="flex  items-center justify-centerbg-none hover:bg-amber-300 text-white p-2 border-2  border-amber-300/60 hover:border-amber-300 hover:text-black font-baloo transition duration-400 ease-in-out cursor-pointer rounded-lg">
                                <FaCoffee className='mr-1' /> COFFEE
                            </button>
                        </div>

                        <button
                            className="bg-none hover:bg-amber-300 text-white p-2 border-2  border-amber-300/60 hover:border-amber-300 hover:text-black font-baloo transition duration-400 ease-in-out cursor-pointer rounded-lg"
                            onClick={handleNextGame}
                        >
                            JUGAR DE NUEVO
                        </button>

                    </section>
                </div>
            </div>
        </>
    )
}
