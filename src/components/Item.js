import React, { useState } from "react";

function Item({ name, category }) {

  const [addToCart, setAddToCart] = useState(false);

  function handleAddToCart(){

    setAddToCart((addToCart) => !addToCart)
  };

  const itemClass = addToCart ? "in-cart" : ""

  const buttonClass = addToCart ? "add" : "remove"
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleAddToCart}> {addToCart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
