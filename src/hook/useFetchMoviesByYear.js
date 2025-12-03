import { useCallback, useEffect, useState } from "react";
import { getMoviesBetweenYears } from "../helpers/movieService";
import { getImage } from "../helpers/imagesService";

export const useFetchMoviesByYear = () => {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState();
    const [isExiting, setIsExiting] = useState(false);
    const [isEntering, setIsEntering] = useState(true);

    function getRandomYearsRange() {
        const min = Math.floor(Math.random() * (2025 - 1960 + 1)) + 1960
        const max = min >= 2020 ? 2025 : min + 5
        return { min, max }
    }

    const fetchMovies = useCallback(async () => {
        try {
            setLoading(true)
            const { min, max } = getRandomYearsRange()
            const data = await getMoviesBetweenYears(min, max);
            const pool = data.data.results.map((m) => {
                return ({
                    id: m.id,
                    title: m.original_title,
                    poster: m.poster_path ? getImage(m.poster_path) : null,
                    release_date: m.release_date,
                    vote_average: m.vote_average
                })
            })

            if (!pool || pool.length < 2) {
                throw new Error("No hay suficientes películas en este rango");
            }

            setMovies(pool)
            pickTwoMovies(pool)

        } catch (err) {
            setError(err)
            console.log(err)
        } finally {
            setLoading(false)
        }
    }, []);

    const pickTwoMovies = (pool) => {
        const shuffled = pool.sort(() => 0.5 - Math.random());
        setOptions(shuffled.slice(0, 2));
        console.log(shuffled)
    }

    const nextRound = () => {

        setIsExiting(true)
        setIsEntering(false)

        setTimeout(() => {
            if (movies.length >= 2) {
                pickTwoMovies(movies)
            } else {
                fetchMovies()
            }

            setIsExiting(false)
            setIsEntering(true)
            
        }, 300);

    }

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    return { options, loading, error, nextRound, isExiting, isEntering, refetch: fetchMovies }

}