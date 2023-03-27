import React from 'react'
import Navbar from '../Navbar/Navbar';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import "./Home.css"
function Home() {
  return (
  <>
  <Navbar/>
    <div className='container'>
    <div className='root'>
     <div className='home_border'>
      <p className='home_p'>Pay Tax Any Where  <br/> <span className='home_text'>Any Times </span></p>
      <p className='home-para'>Our Services are free and will help you in all</p>
     </div> 
     {/* NAV BUTTONS */}
    <div className='home_btns'> 
    
    <button className='home-btn-one'>Continue</button>
    <button className='home-btn-two'><PlayCircleIcon/> Play Video</button>
   
    </div>
    </div>
    <div className="second-div">
    <img className='home-img' src="./Assets/home.png" alt="home" />

    </div>
    </div>
  </>
  )
}

export default Home
