import { MAIN_PAGE } from "../utils/constants.js";
import Gptseachsugestion from "./Gptseachsugestion.jsx";
import Gptsearchbar from "./Gptsearchbar";
const Gptseach = () => {
  
  return (
    
   <div  className="">
      <div className="absolute -z-10 max-h-fit max-w-fit bg-black ">
        <img src={MAIN_PAGE} alt="logo"  className="object-cover w-full h-full" />
      </div>
      <Gptsearchbar />
      <Gptseachsugestion />
    </div>
  );
};

export default Gptseach;
