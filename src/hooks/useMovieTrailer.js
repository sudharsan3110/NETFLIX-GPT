import { useDispatch, useSelector } from 'react-redux'
import { MOVIE_LIST } from '../utils/constants';
import { addnowPlayingTrailers } from '../utils/movieSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieid) => {
  const dispatch = useDispatch();
  const background = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
      MOVIE_LIST
    );
    const json = await data.json();
    const trailer = json.results.filter(
      (results) => results.type === "Trailer"
    );
  
    dispatch(addnowPlayingTrailers(trailer[0]));
  };
  useEffect(() => {
    background();
  }, []);
    
}

export default useMovieTrailer
