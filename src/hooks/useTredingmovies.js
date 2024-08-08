import { useEffect } from "react"
import { MOVIE_LIST } from "../utils/constants"
import axios from "axios"
import { useDispatch } from "react-redux"
import { addTrendingMovies } from "../utils/movieSlice"


export const useTredingmovies = () => {
    const dispatch = useDispatch();
    const fetchdata = async ()=>{
    const data = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', MOVIE_LIST)
    const trendingmovies = data.data.results

    dispatch(addTrendingMovies(trendingmovies))

}
  useEffect(()=>{
    fetchdata();
  },[])


}


export default useTredingmovies