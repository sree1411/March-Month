import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <div className="navsection">
              <Link to='/'>
              <div className="title">
                Business App
              </div>
              </Link>
            <div className="searchBox">
                <input type="text" placeholder='enter the product name' />
            </div>
           <Link to='/cart'>
           <div className="cartInfo">
                 cart
            </div>
           </Link>
        </div>
        <div className="navmenusection">
            <ul>
                 <Link to="/mobiles">
                  <li>Mobiles</li>
                 </Link>
                <li>Laptops</li>
                <li>All Service and Repairs</li>
            </ul>
        </div>
    </>
  )
}

export default NavBar