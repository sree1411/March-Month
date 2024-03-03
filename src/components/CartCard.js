import React from "react";

const CartCard = (props) => {

  function getTotal(){
    const sumWithInitial = props.cart.reduce(
        (t, p) => t + (p.count *p.price),
        0,
      )
      return sumWithInitial.toFixed()
  }

  return (
    <>
      <div>CartCard</div>
      {props.cart.map((p) => {
        return (
          <li>
            {p.title}
            {p.price *p.count.toFixed()}
            {p.total}
          </li>
        );
      })}

      <h1> total amount : {getTotal()}</h1>
    </>
  );
};

export default CartCard;
