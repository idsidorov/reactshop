import React from 'react'
import styles from './styles.module.scss'

const CartBtn: React.FC = () => {
    return (
        <div className={styles.container}>
            <button className="btn waves-effect waves-light" type="submit" name="action">Купить</button>
        </div>
    )
}

export default CartBtn