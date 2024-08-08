import { useSelector } from "react-redux";
import useTredingmovies from "../hooks/useTredingmovies"
import Movieslist from "./Movieslist";

const SecondaryContainer = () => {
  useTredingmovies();
  const movies = useSelector((store) => store?.movies)
 
  if(!movies) return
  return (
   movies && (
     <div className="bg-black">
    <div className="-mt-48 pl-12 relative z-20">
       <Movieslist title ={"nowplayingmoveis"} movies={movies?.nowTrendingMovies}/>  
       <Movieslist title ={"popular"} movies={movies?.nowPlayingMovies}/>
       
    </div>
     </div>
   )

   ) 
}

export default SecondaryContainer

