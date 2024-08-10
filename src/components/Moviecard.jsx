import { IMAGE_URL } from "../utils/constants"

const Moviecard = ({posterpath}) => {
   if(!posterpath) return null
  return (
    <div className="flex-shrink-0  md:w-48 pr-4">
      
    <img  src={IMAGE_URL+posterpath}  alt="hello " className="w-[292px] h-[162px] max-w-none rounded-lg  space-x-10 overflow-y-hidden transform transition-transform duration-300 ease-in-out hover:scale-110 rounded-t-lg "/>
    
        </div>

  )
}

export default Moviecard