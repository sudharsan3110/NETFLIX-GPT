import { IMAGE_URL } from "../utils/constants"

const Moviecard = ({posterpath}) => {
   
  return (
    <div className="w-48 h-18 pr-4">

        <img src={IMAGE_URL+posterpath} alt="hello"/>
        </div>

  )
}

export default Moviecard