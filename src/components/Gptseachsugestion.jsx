import { useSelector } from "react-redux";
import Movieslist from "./Movieslist.jsx";

const Gptseachsugestion = () => {
  const { movieName, movieResult } = useSelector((store) => store?.gpt);
  if(!movieName) return null;
  return (
    <div className="bg-black p-2 m-2 opacity-95 overflow-scroll">
      {movieName &&
        movieName.map((movieNames, index) => (
          <Movieslist
            key={movieNames}
            title={movieNames}
            movies={movieResult[index]}
          />
        ))}
    </div>
  );
};

export default Gptseachsugestion;
