import React from 'react'
import { Link } from 'react-router-dom';

const MobilePageCard = ({ mobile }) => {
    const { id, image, title, price, category} = mobile; 
  return (
    <>
    <div  className='mobilePage1'>
             <Link to={`/mobiles/${id}`}>
             <div className='mobilePageMenu'>
             <img src={image} alt=""/>
            </div>
             </Link>
            <div className='mobilepagesubmenu'>
             <p>Title: {title}</p>
             <p> Price :{price}</p>
             <p> Category:{category}</p>
             <Link to={`/mobiles/${id}`}>
             <button> Click here more Info</button>
             </Link>
            </div>
    </div>
    </>
  )
}

export default MobilePageCard