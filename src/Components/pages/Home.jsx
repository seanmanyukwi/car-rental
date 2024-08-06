import React from 'react'
import "../pages/page.css"
import {Link} from "react-router-dom"

export const Home = () => {
  return (
    <div>
      <div className='img1'>
        <h1 className='white text1'>You got the travel plans, we got the travel vans.</h1>
        <p className='white text1'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link to="/Vans"><button  className='btn1'>Find your van</button></Link>
      </div>
      <footer>
        <p>&copy; 2022. # VANLIFE</p>
      </footer>
    </div>
  )
}


