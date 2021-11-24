import React from 'react'
import CartBtn from './CartBtn'
import CartCard from './CartCard'
import styles from './styles.module.scss'

const Cart: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cart}>
               <CartCard /> 
            </div>
            <div className={styles.cartBtn}>
                <CartBtn />
            </div>
        </div>
    )
}

export default Cart
