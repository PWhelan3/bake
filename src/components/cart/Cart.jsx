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
        <button className={`${styles.btn} ${styles.close-btn}`}></button>
      </div>
    </div>

  )
}

export default Cart