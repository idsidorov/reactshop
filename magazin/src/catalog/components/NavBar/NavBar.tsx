import React from "react";
import {NavLink } from 'react-router-dom';
import styles from './styles.module.scss'


const NavBar: React.FC = () => {

    
    return(
        <nav>
            <div className='nav-wrapper'>
                <NavLink to="/" className="brand-logo"><i className="material-icons">cloud</i>InterShop</NavLink>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <form>
                            <div className="input-field">
                                <input id="search" type="search" required />
                                <label className="label-icon" htmlFor="search">
                                    <i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                            </div>
                        </form>
                    </li>
                    <li><NavLink to="/registration"><i className="material-icons">account_circle</i></NavLink></li>
                    <li><NavLink to="/cart"><i className="material-icons">shopping_cart</i></NavLink></li>
                    <li><NavLink to="/history"><i className="material-icons">history</i></NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;