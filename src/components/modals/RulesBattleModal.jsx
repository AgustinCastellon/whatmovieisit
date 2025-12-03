import React, { useEffect, useState } from 'react'
import { FaClock } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export const RulesBattleModal = ({ rulesBattleOpen }) => {

    const [demoProgress, setDemoProgress] = useState(100);

    useEffect(() => {
        if (!rulesBattleOpen) return; // Solo corre si el modal está abierto

        setDemoProgress(100);

        const interval = setInterval(() => {
            setDemoProgress(prev => {
                if (prev <= 0) return 100; // Reinicia
                return prev - 1.5;        // Velocidad de vaciado
            });
        }, 90); // Qué tan suave es la animación

        return () => clearInterval(interval);
    }, [rulesBattleOpen]);


    return (
        <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 animate-fade-in
                     ${rulesBattleOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}
                     `}>
            <div
                className={`
                        absolute w-[90vw] max-w-[700px] max-h-[80vh] overflow-y-auto 
                        bg-gradient-to-b from-indigo-900 to-indigo-950
                        border border-amber-300/30 text-white rounded-xl shadow-xl p-6
                        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        transition-all duration-300 ease-out animate-zoom-in
                        ${rulesBattleOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                    `}
            >
                <div className="flex justify-center items-center gap-2 text-indigo-200 mb-2">
                    <FaClock className="text-xl" />
                    <h2 className="font-baloo text-2xl font-bold">Modo Contrarreloj</h2>
                </div>

                <p className="text-center text-sm text-indigo-200 mb-3">
                    Tienes un tiempo limitado para elegir la imagen correcta.
                    <span className="text-amber-300"> Cuanto más rápido respondas, más puntos ganas.</span>
                </p>

                <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden my-3">
                    <div
                        className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all ease-linear duration-75"
                        style={{ width: `${demoProgress}%` }}
                    ></div>
                </div>
                <ul className="text-sm space-y-2 text-center text-indigo-100">
                    <li>⏱ La barra de tiempo comienza llena y se vacía en 10 segundos.</li>
                    <li>⚡ Mientras más rápido respondas, más puntos extra ganarás.</li>
                    <li>⭐ Si el tiempo llega a cero pero aciertas, ganas <strong>100 puntos base</strong>.</li>
                    <li>❌ Si fallas, obtienes <strong>0 puntos</strong>.</li>
                    <li>📊 Al final verás tus rondas, tiempos y estadísticas.</li>
                </ul>
                <Link to={"game/release-battle"}>
                    <button
                        className="
                mt-5 mx-auto block
                bg-amber-300 text-black font-baloo px-4 py-2
                rounded-lg shadow-md shadow-black hover:bg-amber-200
                border border-black/40 transition-all cursor-pointer
            "
                    >
                        ¡COMENZAR!
                    </button>
                </Link>
            </div>
        </div>
    )
}
