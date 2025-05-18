
import React from 'react';
import { BsCart2 } from "react-icons/bs";
import styles from './CartIcon.module.css'; 

const CartIcon = ({ itemCount = 0 }) => {
  return (
    <div className={styles.cartContainer}>
      <BsCart2 size={23} />
      {itemCount > 0 && (
        <span className={styles.itemCountBadge}>{itemCount}</span>
      )}
    </div>
  );
};

export default CartIcon;
