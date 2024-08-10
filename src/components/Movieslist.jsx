
import Moviecard from "./Moviecard";
const Movieslist = ({ title,movies }) => {
    
    if(!movies) return
    return (
     movies &&   
    <div className="px-4 ">
      <h1 className="text-3xl py-4  text-white">{title}</h1>
      <div className=" flex overflow-x-scroll overflow-y-hidden ">
      <div className="flex space-x-32">
        {movies.map((movie) => (<Moviecard key={movie.id} posterpath={movie?.backdrop_path} originaltitle={movie?.original_title}/>))}
        </div>
      </div>
      </div>
   
  );
};

export default Movieslist;
