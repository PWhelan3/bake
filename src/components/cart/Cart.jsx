import React from "react";
import styles from './Cart.module.css';
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart({
	visibilty,
	products,
	onProductRemove,
	onClose,
	onQuantityChange,
}) {
	return (
		<div className={styles.modal} style={{display: visibilty ? "block" : "none", }}>
			<div className={styles.shoppingCart}>
				<div className={styles.header}>
					<h2>Shopping cart</h2>
					<button className={`${styles.btn} ${styles.close-btn}`} onClick={onClose}>
						<AiFillCloseCircle size={30}/>
					</button>
				</div>
				<div className={styles.cart-products}>
					{products.length === 0 && (
						<span className={styles.empty-text}>
							Your basket is currently empty
						</span>
					)}
					{products.map((product) => (
						<div className={styles.cart-product} key={product.id}>
							<img src={product.image} alt={product.name}/>
							<div className={styles.product-info}>
								<h3>
									{product.name}
								</h3>
								<span className={styles.product-price}>
									{product.price * product.count} $
								</span>
							</div>
							<select className={styles.count} value={product.count} onChange={(event) => {onQuantityChange(product.id, event.target.value); }}>
								{[...Array(10).keys(),].map((number) => {
										const num = number + 1;
										return (
							        <option value={num} key={num}>
												{num}
											</option>
										);
									}
								)}
							</select>
							<button
								className={`${styles.btn} ${styles.remove-btn}`}
								onClick={() => onProductRemove(product)}>
								<RiDeleteBin6Line size={20}/>
							</button>
						</div>
					))}
					{products.length > 0 && (
						<button className={`${styles.btn} ${styles.checkout-btn}`}>
							Proceed to checkout
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default ShoppingCart;