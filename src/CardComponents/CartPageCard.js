 
import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../cartStore/cartSlice'

const CartPageCard = ({product}) => {
  const dispatch = useDispatch()

  const {title, image, price, description,category} = product
  console.log(product);
  return (
    <>
      <div className='cartPageCart1'>
        <div>
        <img src={image} alt="" width='150px'/>
        </div>
         <div className='submenucart'>
          <div><b>Title</b>{title}</div>
          <div><b>category</b>{category}</div>
          <div><b>price</b>{price}</div>
          <div className='des'><b>description</b>{description}</div>
          <button onClick={()=>{dispatch(remove(product))}}>Remove</button>
          
         </div>
      </div>
    </>
  )
}

export default CartPageCard