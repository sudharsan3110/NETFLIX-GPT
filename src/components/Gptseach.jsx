import { MAIN_PAGE } from "../utils/constants.js"
import GptmovieSuggestion from "./Gptmoviesuggestion.jsx"
import Gptsearchbar from "./Gptsearchbar"
const Gptseach = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={MAIN_PAGE} alt="logo" />
      </div>
     <Gptsearchbar/>
     <GptmovieSuggestion/>
    </div>
  )
}

export default Gptseach