import React from 'react'
import NavBar from '../components/NavBar'
import { useSelector } from 'react-redux'
import CartPageCard from '../CardComponents/CartPageCard'
 
const CartPage = () => {
  
    const cartList = useSelector(state => state.cartState.cartList);
    const total = useSelector(state => state.cartState.total);


  return (
    <>
       <NavBar/>
        <div className='part1'>
        <h1>Total items:{cartList.length}</h1>
        <div>
        <h1>Total Price:{total}</h1>
        </div>
       <div className='cartPageCart'>
       { cartList.map((product) => (
          <CartPageCard key={product.id} product={product} />
        )) } 
        </div> 

        </div>
    </>
  )
}

export default CartPage