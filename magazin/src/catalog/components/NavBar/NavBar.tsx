import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss'


const NavBar: React.FC = () => (
    <nav>
        <div className='nav-wrapper'>
            <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>InterShop</a>
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
                <li><a href="/"><i className="material-icons">account_circle</i></a></li>
                <li><a href="/"><i className="material-icons">shopping_cart</i></a></li>
                <li><a href="/"><i className="material-icons">history</i></a></li>
            </ul>
        </div>
    </nav>
)

export default NavBar;