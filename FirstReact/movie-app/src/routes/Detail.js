import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const getMovie = async (id) => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?movies_id=${id}`)).json();
    console.log(json);
  };

  useEffect(() => {
    getMovie(id);
  }, [id]);

  return <h1>Detail</h1>;
}
export default Detail;
