

const Videotitle = ({title,overview}) => {

  return (
    <div className=" w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl text-white font-bold  ">{title}</h1>
      <p className="py-5 text-lg w-1/4  text-white ">{overview}</p>
      <button className="bg-white text-lg text-black m-2 p-2 rounded-lg hover:opacity-80"> ▶️ Play </button>
      <button className="bg-white text-lg text-black m-2 p-2 rounded-lg hover:opacity-80">More info</button>
      

    </div>
    
  )
}

export default Videotitle