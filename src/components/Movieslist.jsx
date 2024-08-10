
import Moviecard from "./Moviecard";
const Movieslist = ({ title,movies }) => {
    
    if(!movies) return
    return (
     movies &&   
    <div className="px-4 w-34">
      <h1 className="text-3xl py-4  text-white">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden h-[200px]">
      <div className="flex h-fill">
        {movies.map((movie) => (<Moviecard key={movie.id} posterpath={movie?.backdrop_path} originaltitle={movie?.original_title}/>))}
        </div>
      </div>
      </div>
   
  );
};

export default Movieslist;
