import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../storePart/cartSlice';

const CartComplete = ({ product }) => {
    const dispatch = useDispatch();
    const { price, image } = product;

    return (
        <div className="cartCard">
            <img src={image} alt='' />
            <p className="productPrice">${price}</p>
            <button onClick={() => { dispatch(remove(product)) }}>Remove</button>
        </div>
    );
};

export default CartComplete;
