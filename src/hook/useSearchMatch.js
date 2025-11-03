

export const useSearchMatch = (movie, finalTitle) => {


    const allTitles = () => {
        if (!movie) return [];
        const titles = [movie.title, movie.original_title, finalTitle]

        const alternativeTitles =
            movie.alternative_titles?.titles
                ?.filter(f =>
                    ['US', 'MX', 'AR', 'GB', 'ES'].includes(f.iso_3166_1)
                )
                ?.map(m => m.title) || [];
                console.log(alternativeTitles)
        return [...titles, ...alternativeTitles]
    }

    const findMovie = (title) => {
        if (!title || !movie) return ;
        const matched = allTitles().some(
            t => t?.toLowerCase().trim() === title.toLowerCase().trim()
        );
        return matched
    };

    return findMovie
}