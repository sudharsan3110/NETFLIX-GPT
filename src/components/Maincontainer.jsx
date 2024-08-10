import { useSelector } from "react-redux"
import Videotitle from "./Videotitle"
import VideoBackground from "./VideoBackground"


const Maincontainer = () => {
    const nowPlayingMovies = useSelector((store) => store?.movies.nowPlayingMovies)// this is called early return 
   //const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
   //console.log(nowPlayingMovies);
    if(nowPlayingMovies===null)return
   const mainmovie = nowPlayingMovies

const{original_title,overview,id} = mainmovie[2];

return (
  <div className="bg-black">
      <Videotitle title={original_title} overview={overview}/>
      <VideoBackground  movieid={id}/>
      </div>

  )
}

export default Maincontainer

