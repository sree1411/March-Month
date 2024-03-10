import React from 'react'
import NavBar from '../stores/components/NavBar'
import { useSelector } from 'react-redux';
 
import CartComplete from './CartComplete';

const CartPage = () => {

  const cartList = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);

  return (
    <>
       <NavBar/>
       <section className="cart">
        <h1>Cart Items: {cartList.length} /${total}</h1>
        { cartList.map((product) => (
          <CartComplete key={product.id} product={product} />
        )) }        
      </section>
    </>
  )
}

export default CartPage