import { useCallback, useEffect, useState } from 'react'
import { getHorrorMovies, getMovieDetail, getMovieVideos, getPopularMovies, getUnpopularMovies } from '../helpers/movieService'
import { useParams } from 'react-router-dom';

export const useFetchMovie = () => {

    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [videos, setVideos] = useState(null);
    const [title, setTitle] = useState("");
    const [overview, setOverview] = useState("");
    const [usedLang, setUsedLang] = useState("original");

    const { mode } = useParams();

    const fetchMovie = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            let data = null
            if (mode === 'popular') {
                data = await getPopularMovies();
            } else if(mode === 'unpopular') {
                data = await getUnpopularMovies();
            } else{
                data = await getHorrorMovies();
            }
            const randomMovie = data[Math.floor(Math.random() * data.length)];

            const [detail, videoData] = await Promise.all([
                getMovieDetail(randomMovie.id),
                getMovieVideos(randomMovie.id)
            ]);
            const translations = detail?.data?.translations?.translations || [];
            const spanish = translations.find(t => t.iso_639_1 === "es");
            const english = translations.find(t => t.iso_639_1 === "en");

            let finalTitle = detail.data.title || detail.data.original_title;
            let finalOverview = detail.data.overview;

            if (spanish?.data?.title) finalTitle = spanish.data.title;
            else if (english?.data?.title) finalTitle = english.data.title;

            if (spanish?.data?.overview) finalOverview = spanish.data.overview;
            else if (english?.data?.overview) finalOverview = english.data.overview;

            if (spanish?.data?.title) setUsedLang('español')
            else if (english?.data?.title || detail.data.original_language === 'en') setUsedLang('ingles')
            else setUsedLang('original')

            setMovie(detail.data);
            setVideos(videoData);
            setTitle(finalTitle);
            setOverview(finalOverview);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.status_message || "Error al cargar la película.");
        } finally {
            setLoading(false);
        }
    }, [mode]);

    useEffect(() => {
        fetchMovie();
    }, [fetchMovie]);

    return { movie, videos, loading, error, title, overview, usedLang, refetch: fetchMovie };
};
