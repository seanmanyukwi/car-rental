import React from 'react'

import "../pages/page.css"
import {Link} from "react-router-dom"
export const About = () => {
    
  return (
    <div>
      <div className="abt1">

      </div>
      <h1 className='text2'>Don’t squeeze in a sedan when you could relax in a van.</h1>

      <p className='para1'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
       (Hitch costs extra 😉)

        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <div>
          <div className="peach">
            <h2 className='text2 tex'>Your destination is waiting.
            Your van is ready.</h2>
            <Link to="/Vans"><button  className='btn2'>Find your van</button></Link>
        </div>
        </div>
        <footer>
        <p>&copy; 2022. # VANLIFE</p>
      </footer> 
    </div>
  )
}


