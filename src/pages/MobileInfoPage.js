import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { add } from '../cartStore/cartSlice'

const MobileInfoPage = () => {

    const {id} = useParams()
    const [mobiles, setMobiles] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
       const fetchData = async ()=>{
        try{
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setMobiles(response.data)
        }catch(err){
            console.log(err.message);
        }
        
       }
       fetchData()
    },[id])
    if (!mobiles) {
        return <div>Loading...</div>; // Render loading indicator while data is being fetched
    }
  
  return (
     <>
        <NavBar/>
        <div className='mobinfosections'>
             <div className="imgsection">
                <img src={mobiles.image} alt="" width='250px' />
             </div>
            <div className="titlesection">
                <div> <b>Tilte:</b>{mobiles.title}</div>
                <div> <b>Categeroy: </b>{mobiles.category}</div>
                <div> <b>Price:</b>{mobiles.price}</div>
                <div> <b>Description:</b>{mobiles.description}</div>
                <button onClick={()=>{dispatch(add(mobiles))}} >Add to Cart </button>
            </div>
        </div>
         
     </>
  )
}

export default MobileInfoPage