import { getProfile } from "../helpers/imagesService"
import { ActorCard } from "./ActorCard";


export const ClueStars = ({ movie }) => {

    const getStars = () => {
        return movie?.credits?.cast?.slice(0, 6).map(c => ({
            name: c.name,
            profilePath: getProfile(c.profile_path),
            castId: c.cast_id

        })) || []
    }

    const stars = getStars()

    return (
        <div className="flex flex-wrap justify-center content-start gap-3 p-3 w-full h-full overflow-y-auto">
            {stars.map((star) => (
                <ActorCard key={star.castId} star={star} />
            ))}
        </div>
    )
}
