import React, { useState } from 'react'
import styles from './styles.module.scss'
import {NavLink } from 'react-router-dom';

const SignInForm: React.FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    // const onSubmit = (value: any) => {
    //     console.log(value) 
    // }

     const handleClick = (): any => {
        console.log('otpravilos')
      }

    return (
        <div className={styles.container}>
            <div className="row">
                <form className="col s12">
                    <div className={styles.inpForm}>
                        <div className={styles.email}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input 
                                    value={email}
                                    placeholder="Почта"
                                    id="email" 
                                    type="email" 
                                    className="validate" 
                                    onChange={(event) => {
                                        setEmail(event.target.value)
                                    }}
                                    />
                                    <label className="active" htmlFor="email">Email</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.password}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input 
                                     value={password}
                                     placeholder="Пароль"
                                     id="password" 
                                     type="password" 
                                     className="validate" 
                                     onChange={(event) => {
                                         setPassword(event.target.value)
                                     }}
                                    />
                                    <label className="active" htmlFor="password">Password</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.btnGroup}>
                        <div className={styles.btnAuth}>
                            <button 
                            className="btn waves-effect waves-light" 
                            type="submit" 
                            name="action"
                            onClick={()=>{handleClick()}}
                            >
                                Войти
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                        <div className={styles.btnReg}>
                            <NavLink to="/registration">
                                <button
                                    className="btn waves-effect waves-light"
                                    type="submit"
                                    name="action"
                                    >
                                        Еще не зарегистрировались?
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignInForm
