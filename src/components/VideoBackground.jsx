import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer.js";

const VideoBackground = ({movieid}) => {
 
  useMovieTrailer(movieid);
  const nowPlayingTrailers = useSelector(
    (store) => store?.movies?.nowPlayingTrailers
  );

  if(!nowPlayingTrailers) return <div>hello</div>
  const {key} = nowPlayingTrailers

  return ( <div>
      <iframe
       className=" w-screen aspect-video "
        src={`https://www.youtube.com/embed/${key}?&autoplay=1&mute=1&?rel=0?&controls=0?&showinfo=1?&modestbranding=1`}
        title="YouTube video player"
       

        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

