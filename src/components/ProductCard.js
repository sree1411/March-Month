import React, { useState } from "react";
import CartCard from "./CartCard";
import axios from "axios";

const ProductCard = () => {

  const [products, setProduts] = useState([])
  const [ cart, setCart] = useState([]) 


  axios.get("https://fakestoreapi.com/products").then((res)=>{
       setProduts(res.data)
    
  })

  function addToCart(product){
     setCart([...cart, {...product, count:1}])
  }

  function isProductInCart(product){
     var x = cart.find((cp)=>{
         if(cp.title === product.title){
          return true
         }
     })
     return x
  }


function incProduct(product){
   
   var temp = cart.map((cp)=>{
          if(cp.title === product.title){
              cp.count = cp.count + 1
          }
          return cp
   })
   setCart([...temp])
   
}


  return (
    <>
      <div className="d-flex">
      <div className='border border-info w-50'>
             {
              products.length>0 && products.map((product)=>{
                return  <li className="d-flex">
                            <div>
                              <img src={product.image} alt=""  width='100px'/>
                            </div>
                          <div>
                            {product.title} <br/>
                            {product.price} <br/>
                            {
                              isProductInCart(product) && (<>
                                 <button onClick={()=>{incProduct(product)}}> + </button>
                                 <button> - </button>
                              
                              </>)
                            }
                             
                             {
                              !isProductInCart(product) && (<button onClick={()=>{addToCart(product)}}> Add to cart </button>)
                            
                            }
                          
                             </div>
                        </li>
              })
             }


      </div>
      <div className='border border-warning w-50'>
        <CartCard cart={cart} />
      </div>
      </div>
    </>
  );
};

export default ProductCard;
