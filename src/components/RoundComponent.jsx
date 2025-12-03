

export const RoundComponent = ({round}) => {
    return (
        <div className="w-full flex items-center justify-center border border-amber-300/40 shadow-lg shadow-black/50  backdrop-blur-lg font-baloo font-bold p-2 rounded-lg animate-fade-in">
            <h1 className="font-baloo font-bold text-white text-xl mr-2 lg:mr-7 hidden sm:block">RONDA</h1>
            <div className="flex items-center justify-center">
                <div className={`rounded-full py-1 px-3 ${round >= 1 ? 'bg-amber-300 shadow-sm shadow-amber-300' : 'bg-amber-100 shadow-none'}`}>1</div>
                <div className={`w-7 h-[2px] align-middle ${round >= 1 ? 'bg-amber-300 shadow-sm shadow-amber-300' : 'bg-amber-100 shadow-none'}`} />
            </div>
            <div className="flex items-center">
                <div className={`rounded-full bg-amber-100 py-1 px-3 ${round >= 2 ? 'bg-amber-300 shadow-sm shadow-amber-300' : 'bg-amber-100 shadow-none'}`}>2</div>
                <div className={`w-7 h-[2px] align-middle ${round >= 2 ? 'bg-amber-300 shadow-sm shadow-amber-300' : 'bg-amber-100 shadow-none'}`} />
            </div>
            <div className="flex items-center">
                <div className={`rounded-full bg-amber-100 py-1 px-3 ${round >= 3 ? 'bg-amber-300 shadow-sm shadow-amber-300' : 'bg-amber-100 shadow-none'}`}>3</div>
                <div className={`w-7 h-[2px] align-middle ${round >= 3 ? 'bg-amber-300 shadow-sm shadow-amber-300' : 'bg-amber-100 shadow-none'}`} />
            </div>
            <div className="flex items-center">
                <div className={`rounded-full bg-amber-100 py-1 px-3 ${round >= 4 ? 'bg-amber-300 shadow-sm shadow-amber-300' : 'bg-amber-100 shadow-none'}`}>4</div>
                <div className={`w-7 h-[2px] align-middle ${round >= 4 ? 'bg-amber-300 shadow-sm shadow-amber-300' : 'bg-amber-100 shadow-none'}`} />
            </div>
            <div className="flex items-center">
                <div className={`rounded-full bg-amber-100 py-1 px-3 ${round >= 5 ? 'bg-amber-300 shadow-sm shadow-amber-300' : 'bg-amber-100 shadow-none'}`}>5</div>
                <div className={`w-7 h-[2px] align-middle ${round >= 5 ? 'bg-amber-300 shadow-sm shadow-amber-300' : 'bg-amber-100 shadow-none'}`} />
            </div>
            <div className="flex items-center">
                <div className={`rounded-full bg-amber-100 py-1 px-3 ${round >= 6 ? 'bg-amber-300 shadow-sm shadow-amber-300' : 'bg-amber-100 shadow-none'}`}>6</div>
                <div className={`w-7 h-[2px] align-middle ${round >= 6 ? 'bg-amber-300 shadow-sm shadow-amber-300' : 'bg-amber-100 shadow-none'}`} />
            </div>
            <div className="flex items-center">
                <div className={`rounded-full bg-amber-100 py-1 px-3 ${round >= 7 ? 'bg-amber-300 shadow-sm shadow-amber-300' : 'bg-amber-100 shadow-none'}`}>7</div>
            </div>
        </div>
    )
}
