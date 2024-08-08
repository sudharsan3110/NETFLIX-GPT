import { useEffect } from "react";
import movieSlice, { addnowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

import { MOVIE_LIST } from "../utils/constants";

const useNowPLayingMovie = () =>{
    const dispatch = useDispatch(movieSlice);
    
    
    const fetchdata = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',MOVIE_LIST)
      
      const json = await data.json();
      
     
      dispatch(addnowPlayingMovies(json.results));
      
      
    }
    useEffect(()=>{
      fetchdata();
    },[])
    
  
}

export default useNowPLayingMovie; 