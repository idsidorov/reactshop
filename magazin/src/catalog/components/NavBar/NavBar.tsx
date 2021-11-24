import React, { useState } from "react";

const NavBar: React.FC = () => {

    const [isLogin, setIsLogin] = useState<boolean> (false)



    return (
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
                        {isLogin ? <button className="btn waves-effect waves-light" type="submit" name="action">Купить</button> : <li><a href="/"><i className="material-icons">account_circle</i></a></li>}
                        <a href="/"><i className="material-icons">account_circle</i></a>
                    <li><a href="/"><i className="material-icons">shopping_cart</i></a></li>
                    <li><a href="/"><i className="material-icons">history</i></a></li>
                </ul>
            </div>
        </nav>
    )
}

    


export default NavBar;