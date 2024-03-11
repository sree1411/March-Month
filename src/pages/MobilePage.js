import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import MobilePageCard from '../CardComponents/MobilePageCard'

const MobilePage = () => {
    const [mobiles, setMobiles] = useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setMobiles(res.data)
        })
    },[])
  return (
     <>
        <NavBar/>
       <div className='mobilepage'>
            {
                mobiles.map((mobile)=>(
                     <MobilePageCard key={mobile.id} mobile={mobile}/>
                ))
            }
        </div>
     
     </>
  )
}

export default MobilePage