import { useSelector } from "react-redux"
import Videotitle from "./Videotitle"
import VideoBackground from "./VideoBackground"


const Maincontainer = () => {
    const nowPlayingMovies = useSelector((store) => store?.movies.nowPlayingMovies)// this is called early return 
   //const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
   //console.log(nowPlayingMovies);
    if(nowPlayingMovies===null)return
   const mainmovie = nowPlayingMovies

const{original_title,overview,id} = mainmovie[0];

return (
   
    <div>
      <Videotitle title={original_title} overview={overview}/>
      <VideoBackground  movieid={id}/>
      </div>

  )
}

export default Maincontainer

/**
 * {
    "adult": false,
    "backdrop_path": "/tncbMvfV0V07UZozXdBEq4Wu9HH.jpg",
    "genre_ids": [
      28,
      80,
      53,
      35
    ],
    "id": 573435,
    "original_language": "en",
    "original_title": "Bad Boys: Ride or Die",
    "overview": "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
    "popularity": 8530.679,
    "poster_path": "/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg",
    "release_date": "2024-06-05",
    "title": "Bad Boys: Ride or Die",
    "video": false,
    "vote_average": 7.568,
    "vote_count": 961
  },
 */