import React, { useEffect, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaInfoCircle } from 'react-icons/fa'

export const HowToPlayModal = ({ howtoOpen, setHowtoOpen }) => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (howtoOpen) {
            requestAnimationFrame(() => setShow(true)); // Espera un frame antes de activar
        }
    }, [howtoOpen]);

    const handleClose = () => {
        setShow(false);
        // Espera a que termine la animación antes de desmontar
        setTimeout(() => setHowtoOpen(false), 400);
    };

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity ease-in-out duration-300 ${show ? 'opacity-100' : 'opacity-0'
                    }`}
            />

            <div
                className={`absolute w-[90vw] max-w-[700px] z-999 max-h-[80vh] overflow-y-auto rounded-xl shadow-lg mx-auto bg-gradient-to-b from-indigo-900 to-indigo-950 
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-indigo-400/30 text-white p-6
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

                <h1 className="font-baloo text-3xl font-extrabold text-center mb-6">
                    CÓMO JUGAR
                </h1>

                <section className="mb-8">
                    <h2 className="font-baloo text-xl font-bold text-center mb-4 text-indigo-200">
                        🎬 Adivina la Película
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-gray-400 font-semibold text-center">Título oculto</h3>
                            <p className="text-sm text-center">
                                Verás el nombre de una película con algunas letras reveladas y otras ocultas.
                                Adivina cuál es escribiendo el título completo.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-gray-400 font-semibold text-center">Idioma del título</h3>
                            <p className="text-sm text-center">
                                La pista puede venir en diferentes idiomas.
                                Debajo del título verás un indicador del idioma actual.
                            </p>

                            <div className="mt-3 flex flex-col items-center text-xs text-center text-gray-300">
                                <FaInfoCircle className="text-gray-400 text-lg mb-1" />
                                Aunque la pista esté en otro idioma, puedes intentar adivinar la película usando títulos alternativos (en inglés, español de México o Argentina).
                                No todas las películas tienen traducción en todos los países, pero lo más recomendable es probar primero con su título original en inglés.
                            </div>
                        </div>

                        <div>
                            <h3 className="text-gray-400 font-semibold text-center">Póster</h3>
                            <p className="text-sm text-center">
                                Aparecerá una imagen desenfocada de la película. Puedes usarla como ayuda.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-gray-400 font-semibold text-center">Otras pistas</h3>
                            <ul className="text-xs text-center mt-2 space-y-1 text-gray-300">
                                <li>• Breve sinopsis</li>
                                <li>• Géneros de la película</li>
                                <li>• Parte del elenco principal</li>
                                <li>• Tráiler (también desenfocado)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="border-t border-white/20 w-3/4 mx-auto my-4" />

                <section>
                    <h2 className="font-baloo text-xl font-bold text-center mb-4 text-indigo-200">
                        🎥 Adivina el Director
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-gray-400 font-semibold text-center">Pistas</h3>
                            <p className="text-sm text-center">
                                Verás una lista de películas. Tu objetivo es adivinar quién las dirigió.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-gray-400 font-semibold text-center">Nombre oculto</h3>
                            <p className="text-sm text-center">
                                Verás el nombre del director con algunas letras reveladas y otras ocultas.
                                Adivina cuál es escribiendo el nombre completo.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
