import { IMAGE_URL } from "../utils/constants"

const Moviecard = ({posterpath}) => {
   if(!posterpath) return null
  return (
    <div className=" md:w-48 pr-4">
      
    <img src={IMAGE_URL+posterpath}  alt="hello "  className="h-48 overflow-y-hidden rounded-xl"/>
    
        </div>

  )
}

export default Moviecard