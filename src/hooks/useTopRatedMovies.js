import axios from "axios";
import { useDispatch } from "react-redux";
import { MOVIE_LIST } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () =>{
    const dispatch = useDispatch();
    const fetchdata = async ()=>{
    const data = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', MOVIE_LIST)
    const trendingmovies = data.data.results

    dispatch(addTopRatedMovies(trendingmovies))

}
  useEffect(()=>{
    fetchdata();
  },[])

    
}
export default useTopRatedMovies