import React from 'react';
import { AiFillCloseCircle, AiOutlineShopping } from "react-icons/ai";
import {styles} from "./Cart.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";



const Cart = ({
  visibility,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>Shopping Cart</h2>
        <button className={`${styles.btn} ${styles.close-btn}`} onClick={onClose}>
          <AiFillCloseCircle size={30} />
        </button>
      </div>
      <div className={styles.cart-products}>
          {products.length === 0 && (<span className={styles.empty-text}>
            Your cart is currently empty
            </span>)}
            {products.map(product => (
              <div className={styles.cart-product} key={product.id}>
                <img
                src={product.inage}
                alt={product.name}
                />
                <div className={styles.product-info}>
                  <h3>
                    {product.name}
                  </h3>
                  <span className={styles.product-price}>
                    {product.price * product.count}$
                  </span>
                </div>
                <select className={styles.count} value={product.count} onChange={(event) => {
                  onQuantityChange(product.id, event.target.value);
                }}>
                  {
                    [...Array(10).keys()].map(number => {
                      const num = number + 1;
                      return <option value={num} key={num}></option>
                    })
                  }
                </select>
              </div>
            ))}
        </div>
    </div>

  )
}

export default Cart