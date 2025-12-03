import { useFetchMoviesByYear } from "../hook/useFetchMoviesByYear"
import { LoadingPage } from "../skeleton loader/LoadingPage"
import logo from '../assets/logo (1).png'
import { Link } from "react-router-dom";
import { FaArrowLeft, FaPlay } from "react-icons/fa";
import { MovieCard } from "../components/MovieCard";
import { GiPadlock } from "react-icons/gi";
import { RoundComponent } from "../components/RoundComponent";
import { useEffect, useState } from "react";
import { useRoundTimer } from "../hook/useRoundTimer";
import { useGameStats } from "../hook/useGameStats";
import { ScoreBoardModal } from "../components/modals/ScoreBoardModal";

export const ReleaseBattleGame = () => {

  const { options,
    loading,
    error,
    nextRound,
    isExiting,
    isEntering,
    refetch
  } = useFetchMoviesByYear();

  const { roundStats,
    addRoundStats,
    averageTime,
    bestScore,
    totalPoints,
    accuracy,
    maxStreak,
    resetStats
  } = useGameStats();

  const [selectedId, setSelectedId] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [roundNumber, setRoundNumber] = useState(1);
  const [points, setPoints] = useState(0);
  const [guessed, setGuessed] = useState(0);
  const [roundId, setRoundId] = useState(0);
  const [showScoreBoard, setShowScoreBoard] = useState(false);
  const [opponents, setOpponents] = useState({
    first: null,
    second: null,
    releaseFirst: null,
    releaseSecond: null
  });

  const {
    timeLeft,
    startTimer,
    stopTimer,
    resetTimer,
    calculatePoints
  } = useRoundTimer({
    duration: 10000,
    interval: 100,
    onTimeEnd: () => console.log("Se acabó el tiempo!")
  });

  useEffect(() => {
    if (options?.length >= 2) {
      resetTimer();
      setTimeout(() => {
        startTimer();
      }, 150);
    }
  }, [options, resetTimer, startTimer]);

  if (loading) return <LoadingPage />
  if (error) return <Navigate to="/" replace />

  const firstMovie = options[0]
  const secondMovie = options[1]
  const winDate = (movie, rival) => movie.release_date < rival.release_date

  const duration = 10000;

  const calcPoints = calculatePoints();

  const handleNextRound = () => {
    nextRound()
    setRoundId(prev => prev + 1);
    setSelectedId(null)
    setRoundNumber(prev => prev + 1)
    setPoints(prev => isCorrect ? prev + calcPoints : prev)
    setGuessed(prev => isCorrect ? prev + 1 : prev)
    addRoundStats(
      timeLeft,
      isCorrect ? calcPoints : 0,
      { first: opponents.first, second: opponents.second, releaseFirst: opponents.releaseFirst, releaseSecond: opponents.releaseSecond },
      isCorrect
    )
  }


  const handleFinishedGame = () => {
    addRoundStats(
      timeLeft,
      calcPoints,
      { first: opponents.first, second: opponents.second, releaseFirst: opponents.releaseFirst, releaseSecond: opponents.releaseSecond },
      isCorrect
    );

    setSelectedId(null);
    setRoundNumber(1);
    setShowScoreBoard(true);
    setPoints(0);
    setGuessed(0);
    setIsCorrect(null);
  }

  return (
    <>
      {showScoreBoard && <ScoreBoardModal roundStats={roundStats} averageTime={averageTime} bestScore={bestScore} totalPoints={totalPoints} accuracy={accuracy} maxStreak={maxStreak} resetStats={resetStats} refetch={refetch} setShowScoreBoard={setShowScoreBoard}/>}
      <section className="relative w-[90vw] max-w-[700px] backdrop-blur-xl flex flex-col justify-center items-center gap-2 mx-auto bg-black/20 border border-amber-300/20 rounded-xl shadow-lg shadow-black/50 p-10 my-5">
        <Link to={"/"}>
          <button className="absolute left-2 rounded-md shadow-sm border-2 border-amber-300/60 px-2 py-2 text-white font-baloo text-sm flex items-center gap-1 cursor-pointer hover:bg-amber-300 hover:border-amber-300 hover:text-black transition ease-in-out duration-300">
            <FaArrowLeft />
            INICIO
          </button>
        </Link>
        <header className="animate-fade-in-up">
          <img src={logo} alt="logo" className="w-55 drop-shadow-[0_0_10px_rgba(255,200,80,0.4)] mx-auto" />
        </header>
        <div className="w-full h-3 bg-black/20 rounded-full overflow-hidden mt-4">
          <div
            key={roundId}
            className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-[width] duration-200 ease-linear"
            style={{ width: `${(timeLeft / duration) * 100}%` }}
          />
        </div>
        <RoundComponent round={roundNumber} />
        <span className="relative text-amber-300 font-lucki text-lg sm:text-xl mt-6 tracking-widest drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] text-center select-none animate-fadeInSlow">
          ¿Cuál estrenó primero?
        </span>
        <div className="flex gap-8 mb-5 items-center justify-center">
          <div>
            <MovieCard movie={firstMovie} rival={secondMovie} setIsCorrect={setIsCorrect} setSelectedId={setSelectedId} selectedId={selectedId} isExiting={isExiting} isEntering={isEntering} stopTimer={stopTimer} SetOpponents={setOpponents} />
            <div className='border flex justify-center items-center border-amber-300/40 rounded-lg bg-black/30 backdrop-blur-xl w-full my-4 py-1 text-white text-center
                font-baloo'>
              {
                selectedId ? (
                  <h3 className={`${winDate(firstMovie, secondMovie) ? 'text-green-400' : 'text-red-400'}`}>{firstMovie.release_date}</h3>
                ) : (
                  <div className=" w-full flex items-center justify-center hover:animate-shake">
                    <GiPadlock className='text-amber-300 text-2xl ' />
                  </div>
                )
              }
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent 
                  text-xl md:text-3xl font-baloo font-extrabold drop-shadow-[0_0_15px_rgba(255,215,0,0.35)]">
            VS
          </div>
          <div>
            <MovieCard movie={secondMovie} rival={firstMovie} setIsCorrect={setIsCorrect} setSelectedId={setSelectedId} selectedId={selectedId} isExiting={isExiting} isEntering={isEntering} stopTimer={stopTimer} SetOpponents={setOpponents} />
            <div className='border flex justify-center items-center border-amber-300/40 rounded-lg bg-black/30 backdrop-blur-xl w-full my-4 py-1 text-white text-center
                font-baloo'>
              {
                selectedId ? (
                  <h3 className={`${winDate(secondMovie, firstMovie) ? 'text-green-400' : 'text-red-400'}`}>{secondMovie.release_date}</h3>
                ) : (
                  <div className=" w-full flex items-center justify-center hover:animate-shake">
                    <GiPadlock className='text-amber-300 text-2xl ' />
                  </div>
                )
              }

            </div>
          </div>
        </div>
        <div className="w-1/4 h-10">
          <span className={`border border-black rounded-lg w-full h-full self-center flex items-center justify-center text-center font-baloo font-bold text-white
                ${isCorrect ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-red-500 to-red-600'} ${selectedId ? 'animate-blink block ' : 'animate-zoom-out hidden'}`}>
            {isCorrect ? (
              calcPoints + ' Pts'
            ) : ('0 Pts')}
          </span>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-grow basis-0">
            <h3 className="text-white font-baloo font-bold drop-shadow-xl">PUNTOS: {points}</h3>
          </div>
          <div className="">
            {roundNumber < 7 ? (
              <button
                className={`font-baloo font-bold py-1 px-2 rounded-lg bg-amber-300 cursor-pointer border-1 shadow-black shadow-lg hover:bg-amber-300/90
               ${selectedId ? 'opacity-100 cursor-pointer scale-100' : 'opacity-0 pointer-events-none scale-0'} transition-all duration-200 ease-in-out`}
                onClick={handleNextRound}
              >
                SIGUIENTE
              </button>
            ) : (<button
              className={`font-baloo font-bold py-1 px-2 rounded-lg bg-amber-300 cursor-pointer border-1 shadow-black shadow-lg hover:bg-amber-300/90
               ${selectedId ? 'opacity-100 cursor-pointer scale-100' : 'opacity-0 pointer-events-none scale-0'} transition-all duration-200 ease-in-out`}
              onClick={handleFinishedGame}
            >
              RESULTADOS
            </button>)}

          </div>

          <div className="flex flex-grow basis-0 justify-end">
            <h3 className="text-white font-baloo font-bold">ACIERTOS: {guessed}</h3>
          </div>
        </div>

      </section>
    </>
  )
}
