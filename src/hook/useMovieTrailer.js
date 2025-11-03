import { useMemo } from "react"

export const useMovieTrailer = (videos) => {

    const trailer = useMemo(() => {
        if (!videos?.data?.results?.length) return null

        const video = videos.data.results.find(
            v => v.type === 'Trailer' || v.type === 'Teaser' && v.site === 'YouTube'
        ) 
        return video ? `https://www.youtube.com/embed/${video.key}` : null

}, [videos])

    return trailer
}
