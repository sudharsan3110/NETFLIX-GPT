import { useDispatch } from "react-redux";
import { MOVIE_LIST } from "../utils/constants";
import {addUpcomingMovies} from "../utils/movieSlice"
import axios from "axios";
import { useEffect } from "react";

const useUpcomingMovies = () =>{
    const dispatch = useDispatch();
    const fetchdata = async ()=>{
    const data = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', MOVIE_LIST)
    
    const trendingmovies = data.data.results

    dispatch(addUpcomingMovies(trendingmovies))

}
  useEffect(()=>{
    fetchdata();
  },[])

}
export default useUpcomingMovies