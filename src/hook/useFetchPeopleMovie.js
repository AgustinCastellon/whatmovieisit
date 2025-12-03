import { useCallback, useEffect, useState } from "react"
import { getMovieDetail, getPopularMovies } from "../helpers/movieService"
import { getDirector } from "../helpers/peopleMovieServices"
import { getImage, getProfile } from "../helpers/imagesService"


export const useFetchDirector = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [director, setDirector] = useState();

    const fetchDirector = useCallback(async () => {
        try {
            setIsLoading(true);
            const dataMovies = await getPopularMovies();
            let directorId = null;
            let movieDetail = null;
            let attempts = 0;

            while (!directorId && attempts < 20) {
                attempts++;
                const randomMovie = dataMovies[Math.floor(Math.random() * dataMovies.length)];
                movieDetail = await getMovieDetail(randomMovie.id);

                // Aplanar crew (por si hay arrays dentro de arrays)
                const crewList = Array.isArray(movieDetail.data.credits.crew)
                    ? movieDetail.data.credits.crew.flat(Infinity)
                    : [];

                directorId = crewList.find(
                    (d) => d.job === "Director" && d.known_for_department === "Directing"
                );
            }

            if (!directorId) {
                throw new Error("No se encontró ningún director en las películas populares.");
            }

            const directorRes = await getDirector(directorId.id);
            const directorDetail = directorRes.data;

            const DirectorMovies = directorDetail.movie_credits.crew
                .filter((f) => f.job === "Director")
                .slice(0, 5);

            const directorFormatted = {
                id: directorDetail.id,
                name: directorDetail.name,
                profile: directorDetail.profile_path ? getProfile(directorDetail.profile_path) : null,
                posters: DirectorMovies.map((c) => ({
                    imgUrl: c.poster_path ? getImage(c.poster_path) : null,
                })),
                birthday: directorDetail.birthday ? directorDetail.birthday.split("-")[0] : null,
                deathday: directorDetail.deathday ? directorDetail.deathday.split("-")[0] : null
            };

            setDirector(directorFormatted);
        } catch (error) {
            console.error(error);
            setError(
                error.response?.data?.status_message ||
                error.message ||
                "Error al cargar el director."
            );
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchDirector()
    }, [fetchDirector]);

    return { director, error, isLoading, refetch: fetchDirector }

}