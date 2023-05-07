import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/movieDetail";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async (id) => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie(id);
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <MovieDetail
          key={movie.id}
          id={movie.id}
          image={movie.large_cover_image}
          description={movie.description_full}
        />
      )}
    </div>
  );
}
export default Detail;
