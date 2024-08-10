import { useSelector } from "react-redux";
import useTredingmovies from "../hooks/useTredingmovies"
import Movieslist from "./Movieslist";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const SecondaryContainer = () => {
  useTredingmovies();
  useUpcomingMovies();
  useTopRatedMovies();
  const movies = useSelector((store) => store?.movies)
 
  if(!movies) return
  return (
   movies && 
     <div className="bg-black">
    <div className="-mt-64 pl-12 relative z-20">
       <Movieslist title ={"NOW PLAYING MOVIE"} movies={movies?.nowTrendingMovies}/>  
       <Movieslist title ={"POPULAR"} movies={movies?.nowPlayingMovies}/>
       <Movieslist title ={"TOP RATED"} movies={movies?.nowTopRatedMovies}/> 
       <Movieslist title ={"UPCOMING MOVIES"} movies={movies?.nowUpcomingMovies}/>
      </div>
     </div>
   )

    
}

export default SecondaryContainer

