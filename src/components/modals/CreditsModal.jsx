import React, { useEffect, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'

export const CreditsModal = ({ creditsOpen, setCreditsOpen }) => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (creditsOpen) {
      requestAnimationFrame(() => setShow(true)); // Espera un frame antes de activar
    }
  }, [creditsOpen]);

  const handleClose = () => {
    setShow(false);
    // Espera a que termine la animación antes de desmontar
    setTimeout(() => setCreditsOpen(false), 400);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity ease-in-out duration-300 ${show ? 'opacity-100' : 'opacity-0'
          }`}
      />

      <div
        className={`absolute w-[90vw] max-w-[600px] z-999 mx-auto bg-gradient-to-b from-indigo-900 to-indigo-950 rounded-xl shadow-xl 
    border border-indigo-400/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 text-white
    transition-all duration-400 ease-in-out transform ${show
            ? 'opacity-100 scale-100 -translate-x-1/2 -translate-y-1/2'
            : 'opacity-0 scale-90 -translate-x-1/2 -translate-y-1/2'
          }`}
      >
        <button
          className="absolute top-3 right-3 cursor-pointer hover:bg-white/20 text-white hover:text-black rounded-full p-1 transition-colors"
          onClick={handleClose}
        >
          <CgClose className="text-2xl" />
        </button>

        <h1 className="font-baloo text-3xl font-extrabold text-center mb-6 tracking-wide">
          CRÉDITOS
        </h1>

        <div className="bg-indigo-950/40 rounded-lg shadow-inner mx-auto text-center p-6 border border-white/10 max-w-[90%]">
          <h2 className="font-baloo text-lg text-gray-400 mb-2">
            — Producción, Desarrollo y Diseño —
          </h2>
          <h3 className="text-white font-baloo text-2xl font-semibold mb-3">
            Agustín C.
          </h3>

          <div className="text-white flex justify-center items-center gap-4 text-2xl my-3">
            <a
              href="https://github.com/AgustinCastellon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://discord.com/users/957722095381540874"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition-colors"
            >
              <FaDiscord />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 w-3/4 mx-auto my-6" />

        <div className="flex flex-col justify-center items-center text-center w-full gap-3">
          <img
            src="../../public/tmdbLogo2.svg"
            alt="The Movie Database logo"
            className="w-32 opacity-90 hover:opacity-100 transition-opacity"
          />
          <span className="font-baloo text-gray-400 text-xs px-6 leading-snug">
            Este juego utiliza la API de The Movie Database (TMDb) pero no está
            avalado ni certificado por TMDb.
          </span>
        </div>

        <p className="text-center text-[0.7rem] text-gray-500 mt-6">
          © 2025 Agustín C. — Guess The Movie
        </p>
      </div>
    </>

  )
}
