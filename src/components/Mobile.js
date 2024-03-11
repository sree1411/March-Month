import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MobileCard from './MobileCard'

const Mobile = () => {
    
    const [mobiles, setMobiles] = useState([])

    // useEffect(()=>{
    //     axios.get("https://fakestoreapi.com/products").then((res)=>{
    //         setMobiles(res.data)
    //     })
    // },[])


  useEffect(()=>{
    const fetchData = async ()=>{
        try{
         const response = await axios.get("https://fakestoreapi.com/products")
          setMobiles(response.data)
        }catch(err){
            console.log(err.message);
        }
    }
    fetchData()
  }, [])


  return (
     <>
       <p> Latest Trending Products</p>
        <div className='mobilesection'>
            {
                mobiles.slice(0,5).map((mobile)=>(
                     <MobileCard key={mobile.id} mobile={mobile}/>
                ))
            }
        </div>
     </>
  )
}

export default Mobile