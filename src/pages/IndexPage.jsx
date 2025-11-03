import { FaFileAlt, FaInfo } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"
import { CreditsModal } from "../components/modals/CreditsModal"
import { useState } from "react";
import { HowToPlayModal } from "../components/modals/HowToPlayModal";
import logo from '../assets/logo (1).png'

export const IndexPage = () => {

    const [creditsOpen, setCreditsOpen] = useState(false);
    const [howtoOpen, setHowtoOpen] = useState(false);

    return (
        <div className="h-screen">
            {creditsOpen && <CreditsModal creditsOpen={creditsOpen} setCreditsOpen={setCreditsOpen} />}
            {howtoOpen && <HowToPlayModal howtoOpen={howtoOpen} setHowtoOpen={setHowtoOpen} />}
            <img src={logo} alt="logo" className="w-75 mx-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] animate-fadeIn" />
            <nav className="mt-3 bg-black/20 rounded-xl shadow-lg shadow-black/50 p-5 w-fit mx-auto backdrop-blur-xl border border-amber-300/30">
                <ul className="font-baloo flex flex-col gap-3 text-center justify-center items-center">
                    <Link to={"game/popular"}>
                        <li className="p-2 w-60 cursor-pointer 
                            bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 
                            text-yellow-950 font-bold text-center 
                            shadow-inner shadow-white/40 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]
                            outline-2 outline-amber-300/70
                            hover:scale-110 hover:brightness-110 transition-transform ease-in-out duration-300
                            ">
                            NIVEL FÁCIL
                        </li>
                    </Link>
                    <Link to={"game/unpopular"}>
                        <li className="p-2 w-60 cursor-pointer 
                            bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 
                            text-yellow-950 font-bold text-center 
                            shadow-inner shadow-white/40 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]
                            outline-2 outline-amber-300/70
                            hover:scale-110 hover:brightness-110 transition-transform ease-in-out duration-300">NIVEL DIFÍCIL</li>
                    </Link>
                    <Link to={"game/terror"}>
                        <li className="p-2 w-60 cursor-pointer 
                            bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 
                            text-yellow-950 font-bold text-center 
                            shadow-inner shadow-white/40 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]
                            outline-2 outline-amber-300/70
                            hover:scale-110 hover:brightness-110 transition-transform ease-in-out duration-300">ESPECIAL HALLOWEEN</li>
                    </Link>
                    <Link to={"game/director"}>
                        <li className="p-2 w-60 cursor-pointer 
                            bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 
                            text-yellow-950 font-bold text-center 
                            shadow-inner shadow-white/40 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]
                            outline-2 outline-amber-300/70
                            hover:scale-110 hover:brightness-110 transition-transform ease-in-out duration-300">ADIVINA EL DIRECTOR</li>
                    </Link>
                </ul>
                <div className="border-b border-white/30 w-56 mx-auto mt-10" />
                <ul className="flex justify-center items-center mt-5 text-xs font-baloo gap-2">
                    <li
                        className="p-2 shadow-sm border-2 border-amber-300/60 text-white cursor-pointer hover:bg-amber-300 hover:border-amber-300 hover:text-black transition ease-in-out duration-400 flex"
                        onClick={() => setHowtoOpen(true)}
                    >
                        <FaInfo />COMO JUGAR
                    </li>
                    <li
                        className="p-2 shadow-sm border-2 border-amber-300/60 text-white cursor-pointer hover:bg-amber-300 hover:border-amber-300 hover:text-black transition ease-in-out duration-400 flex gap-1"
                        onClick={() => setCreditsOpen(true)}
                    >
                        <FaFileAlt />CREDITOS
                    </li>
                </ul>
            </nav>
        </div>
    )
}
