
export const HiddenTitle = ({ title, showTitle }) => {

    const titleSpell = title && title.split('')
    const word = []
    titleSpell?.forEach((w, i) => {
        word[i] = {
            letter: titleSpell[i],
            show: w === '&' || w === ' ' || w === ':' || w === ',' || w === "'" || w === "(" || w === ")" || w === "." || w === "º" || w === "-"
        }
    })

    if (word && word?.length > 0) {
        if (word.length < 7) {
            let lr = Math.floor(Math.random() * word.length);
            word[lr].show = true;
        } else {
            let setCount = 3
            do {
                let lr = Math.floor(Math.random() * word.length);
                if (word[lr].show === false) {
                    word[lr].show = true;
                    setCount--
                }
            } while (setCount > 0);
        }
    }

    return (
        <ul
            className="flex justify-center items-center flex-wrap gap-2 px-6 py-3 
                bg-black/30 border border-amber-400/50 rounded-md 
                font-baloo text-white font-bold 
                shadow-lg backdrop-blur-sm"
        >
            {word?.map((w, index) =>
                showTitle ? (
                    <li
                        key={index}
                        className="text-white mx-1 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] transition-all duration-300"
                    >
                        {w.letter}
                    </li>
                ) : (
                    <li
                        key={index}
                        className={`mx-1 ${w.show
                                ? 'text-amber-300 drop-shadow-[0_0_8px_rgba(255,191,73,0.6)]'
                                : 'text-gray-500/70'
                            } transition-all duration-300`}
                    >
                        {w.show ? w.letter : <span className="text-gray-400/70">_</span>}
                    </li>
                )
            )}
        </ul>
    )
}
