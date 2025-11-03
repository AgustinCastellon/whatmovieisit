import { CgClose } from "react-icons/cg"
import { BackGroundWinGame } from "../BackGroundWinGame"
import { FaStar } from 'react-icons/fa'
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LoadingPeopleProfile } from "../../skeleton loader/LoadingPeopleProfile";

export const CorrectAnswerModal = ({ imageUrl, setShowCorrectAnsModal, data, refetch }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowCorrectAnsModal(false);
    }, 400);
  };

  const handleNewMovie = () => {
    refetch()
    setShowCorrectAnsModal(false)
  }

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-992 transition-opacity duration-400 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <div className="fixed inset-0 z-993 w-full h-full bg-gradient-to-t from-amber-400 to-indigo-700 opacity-50" />
      <div className={`border-2 border-amber-400 rounded-2xl block text-center py-5 px-10 areaWinner z-994 relative transition-all duration-400 ease-out transform-gpu ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <button
          className="absolute top-1 right-2 cursor-pointer z-995 hover:bg-white/20 text-white hover:text-black rounded-full"
          onClick={handleClose}
        >
          <CgClose className="text-2xl" />
        </button>
        <BackGroundWinGame />
        <div className="z-997 relative">
          <h1 className="font-lucki mb-1 text-3xl text-green-400 drop-shadow-lg drop-shadow-black/70">¡GANASTE!</h1>
          {data.tagline && <h2 className="text-xs text-white font-baloo w-50 mx-auto">{data.tagline}</h2>}
          {data.name && <h2 className="text-xs text-white font-baloo w-50 mx-auto">{data.name}</h2>}
          {data.birthday &&
            <div>
              <h2 className="text-xs text-white font-baloo w-50 mx-auto">{data.birthday} - {data.deathday ? data.deathday : "actualidad"}</h2>
            </div>
          }
          {imgLoading && <LoadingPeopleProfile />}
          {!imageUrl ?
            (
              <div className="w-45 h-25 border-1 bg-amber-200 flex items-center justify-center border-black mx-auto">
                <span className="font-bold font-baloo">NO IMAGE</span>
              </div>
            ) : (
              <img src={imageUrl} alt={imageUrl} className={`w-45 border-1 mx-auto overflow-hidden rounded-xl group
              p-[2px] bg-gradient-to-r from-amber-400 via-white to-amber-400 ${imgLoading ? "hidden" : "block"}`} onLoad={() => setImgLoading(false)} />
            )}

          <div className="text-sm flex gap-2 justify-center">
            <NavLink to={"/"}>
              <button className="bg-none  hover:bg-amber-300 text-white p-2 border-2 mt-3 border-amber-300/60 hover:border-amber-300 hover:text-black font-baloo transition duration-400 ease-in-out cursor-pointer">
                MENU PRINCIPAL
              </button>
            </NavLink>
            <button
              className="bg-none hover:bg-amber-300 text-white p-2 border-2 mt-3 border-amber-300/60 hover:border-amber-300 hover:text-black font-baloo transition duration-400 ease-in-out cursor-pointer"
              onClick={handleNewMovie}
            >
              NUEVO JUEGO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};