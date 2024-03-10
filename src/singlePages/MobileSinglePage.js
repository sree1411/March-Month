import React from 'react';
import NavBar from '../stores/components/NavBar';
import { useParams } from 'react-router-dom';
import { mobileData } from '../stores/data/mobiles';
import { add, updateQuantity } from '../storePart/cartSlice'; // Assuming you have an action for updating quantity
import { useDispatch, useSelector } from 'react-redux';

const MobileSinglePage = () => {
   const { id } = useParams();
   const product = mobileData.find((item) => item.id === id);
   const dispatch = useDispatch();
   const cartList = useSelector(state => state.cartState.cartList);

   function isProductInCart(product) {
      return cartList.some(item => item.id === product.id);
   }

   function incProduct(product){
      const existingItem = cartList.find(item => item.id === product.id);
      if (existingItem) {
         dispatch(updateQuantity({ id: product.id, quantity: (existingItem.quantity || 0) + 1 }));
      } else {
         dispatch(add(product));
      }
   }

   return (
      <>
         <NavBar />
         <div className='productSection'>
            <div>
               <img src={product.image} alt='' />
            </div>

            <div>
               <div className='productName'>{product.company}</div>
               <div className='productPrice'>{product.price}</div>
               <div className='productDescription'>{product.description}</div>
               {isProductInCart(product) ? (
                  <>
                     <button onClick={() => incProduct(product)}> + </button>
                  </>
               ) : (
                  <button onClick={() => dispatch(add(product))}>ADD TO CART</button>
               )}
            </div>
         </div>
      </>
   );
};

export default MobileSinglePage;
