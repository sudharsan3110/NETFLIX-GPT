import {useState} from 'react'
//rafce react arrow functoin export component 
import Header from './Header'
const Login = () => {
    const [issignin,setisSignIn] = useState(true);
    const handleclick = () =>{
       setisSignIn(!issignin);
    }
  return (
    <div>
        <Header/>
    <div ><img src ="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg" alt='NETFLIX LOGO'/>
    
    </div>
    <div >
    <form className=" p-12 m-5 rounded-xl mx-auto bg-black absolute w-4/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-70">
     
        <h1 className='font-bold text-3xl  py-4 text-white'>{issignin?"Sign In":"Sign Up"}</h1>
        {!issignin && <input type ="text" placeholder="name" className='w-full p-4 my-4 bg-gray-600'/>}
        <input type ="text" placeholder="Email" className='w-full p-4 my-4 bg-gray-600'/>
        <input type ="text" placeholder="password" className='w-full rounded-md p-4 my-4 bg-gray-600'/>
       <button type ="submit" className='bg-red-700  rounded-lg p-4 my-3 w-full'>{issignin?"Sign In":"Sign Up"}</button>
       <h1 className='text-white text-md text-center'>OR</h1>
       <button type ="submit" className='bg-white opacity-50 rounded-lg p-4 my-3 w-full'>Use as a sign in code</button>
        <h1 className='text-white text-md text-center'>Forget password?</h1>
        <div className='flex p-2 m-2 '>
        <input type="checkbox"/>
        <h2 className='ml-3  text-white'>Remember me</h2>
     </div>
     <p className='text-white' onClick={handleclick}>new to Netflix? Sign up now</p>
       
    </form>
    </div>
    
        
    </div>

  )
}

export default Login