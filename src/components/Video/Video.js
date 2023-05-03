import React from 'react'
import tax from "../../assets/taxpotral.mp4"
import "./Video.css"
function Video() {
  return (
    <div className='video'>
      <video src={tax} autoPlay loop controls />
    </div>
  )
}

export default Video
