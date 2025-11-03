import { FaSearch } from "react-icons/fa"
import { useSearchMatch } from "../hook/useSearchMatch"
import { useState } from "react"
import { IncorrectAnswerModal } from "./modals/IncorrectAnswerModal";
import { CorrectAnswerModal } from "./modals/CorrectAnswerModal";


export const MovieGuessChecker = ({ game, imageUrl, showCorrectAnsModal, setShowCorrectAnsModal, finalTitle, setShowTitle, gameMode, lblPlaceholder, refetch }) => {

    const [titleSelected, setTitleSelected] = useState("");
    const findMovie = useSearchMatch(game, finalTitle);
    const [showIncorrectAnsModal, setShowIncorrectAnsModal] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (titleSelected === "") return console.log()

        const matched =
        (gameMode === "movie" && findMovie(titleSelected)) || 
        (gameMode === "director" && game.name.toLowerCase().trim() === titleSelected.toLowerCase().trim());

        if (!matched) {
            setShowIncorrectAnsModal(true)
            setTimeout(() => setShowIncorrectAnsModal(false), 3000)
        } else {
            setShowCorrectAnsModal(true)
            setShowTitle(true)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex w-full justify-center px-10">
                {showIncorrectAnsModal && <IncorrectAnswerModal />}
                {showCorrectAnsModal && <CorrectAnswerModal imageUrl={imageUrl} setShowCorrectAnsModal={setShowCorrectAnsModal} data={game} refetch={refetch} />}
                <input
                    type="text"
                    className={`border-2 font-baloo border-amber-300 lg:text-base md:text-xs sm:text-xs rounded-l-lg px-1 py-3 lg:w-140 md:w-100 md:h-10 lg:h-auto sm:h-9 sm:w-70 focus:outline-none bg-slate-200 uppercase ${showIncorrectAnsModal && 'text-red-500'} shadow-inner shadow-black/40`}
                    placeholder={lblPlaceholder}
                    value={titleSelected}
                    onChange={(e) => setTitleSelected(e.target.value)}
                />
                <button type="submit" className="border-2 border-amber-300 rounded-r-lg px-4 bg-amber-300 text-black cursor-pointer"><FaSearch /></button>
            </form>
        </>
    )
}
