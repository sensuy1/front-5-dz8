import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const cartItems = useSelector(state => state.products.cartItems);
  const counter = useSelector(state => state.products.counter)

  return (
    <div>
      <h2>Cart</h2>
      <h2>Товары {counter}шт</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item._id}>
            <div>{item.name}</div>
            <div>{item.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;