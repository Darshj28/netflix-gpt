import { IMG_CDN_URL } from "../utils/constants";


const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 px-4">
      <img alt="Movie Card" 
      src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard;