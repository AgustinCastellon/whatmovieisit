import { getImage } from '../helpers/imagesService'
import { useMemo } from 'react'
import { useFetchMovie } from './useFetchMovie'

export const usePoster = () => {
    const { movie, videos, loading, error, title, overview, usedLang, refetch } = useFetchMovie();

    const posterPath = useMemo(() => {
        if (!movie?.images?.posters?.length) return null;
        const posterEs = movie.images.posters.find(p => p.iso_639_1 === "es");
        return (posterEs || movie.images.posters[0])?.file_path || null;
    }, [movie]);

    const imageUrl = posterPath ? getImage(posterPath) : null;

    return {
        movie,
        imageUrl,
        videos,
        loading,
        error,
        title, 
        overview,
        usedLang,
        refetch 
    };
};