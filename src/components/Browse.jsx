import Header from "./Header";
import useNowPLayingMovie from "../hooks/useNowPlayingMovie";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
import Gptseach from "./Gptseach";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPLayingMovie();
  const showGptSearch = useSelector((store)=>store?.gpt?.showGptSearch)
  console.log(showGptSearch);

  return <div >
    <Header/>
    
    {showGptSearch ? (<Gptseach/>):
    <>
    (<Maincontainer/>
    <SecondaryContainer/>)
    </>}
    </div>;
};

export default Browse;
