
export const ClueGenres = ({ movie }) => {


    return (
        <div>
            <ul className="font-bold 2xl:text-lg lg:text-[12px] xl:text-[14px] md:text-[7px] divide-y-1 divide-gray-200">
                {
                    movie?.genres?.slice(0, 4).map((gen) => (
                        <li key={gen.id}>{gen.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
