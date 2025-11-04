import React, { useState } from 'react'

export const ActorCard = ({ star }) => {

    const [loading, setLoading] = useState(true);

    return (
        <div className="flex flex-col items-center text-center relative">
            <div className="relative w-16 h-22 sm:w-18 sm:h-24 lg:w-20 lg:h-26 xl:w-22 xl:h-28 lg:block md:hidden border border-black rounded-md overflow-hidden bg-amber-100">
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-amber-200">
                        <svg
                            className="h-6 w-6 animate-spin text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    </div>
                )}
                {star.profilePath ? (
                    <img
                        src={star.profilePath}
                        alt={star.name}
                        onLoad={() => setLoading(false)}
                        className={`object-cover w-full h-full transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"
                            }`}
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-red-400 text-xs font-bold text-white">
                        Imagen no encontrada
                    </div>
                )}
            </div>
            <h3 className="text-xs lg:text-sm font-semibold  w-20 lg:w-24 xl:w-28 2xl:w-32">
                {star.name}
            </h3>
        </div>
    );
}
