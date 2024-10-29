import { useParams } from "react-router-dom";
import MovieDetailInfo from "./MovieDetailInfo";
import MovieDetailCredit from "./MovieDetailCredit";

const MovieDetailPage = () => {
    const {movieId} = useParams();
    console.log(movieId)
    return (
        <>
            <MovieDetailInfo movieId={movieId} />
            <MovieDetailCredit movieId={movieId} />
      </>
    );
};

export default MovieDetailPage;