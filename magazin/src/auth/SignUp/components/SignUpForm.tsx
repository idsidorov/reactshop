import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import {NavLink } from 'react-router-dom';

const SignUpForm: React.FC = () => {

    const [firstName, setFirstName] = useState<string>('')
    const [secondName, setSecondName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rePassword, setRePassword] = useState<string>('')

    const [firstNameError, setFirstNameError] = useState<string>('Поле обязательно к заполнению')
    const [secondNameError, setSecondNameError] = useState<string>('Поле обязательно к заполнению')
    const [emailError, setEmailError] = useState<string>('Поле обязательно к заполнению')
    const [passwordError, setPasswordError] = useState<string>('Поле обязательно к заполнению')
    const [rePasswordError, setRePasswordError] = useState<string>('Поле обязательно к заполнению')

    const [firstNameDirty, setFirstNameDirty] = useState<boolean>(false)
    const [secondNameDirty, setSecondNameDirty] = useState<boolean>(false)
    const [emailDirty, setEmailDirty] = useState<boolean>(false)
    const [passwordDirty, setPasswordDirty] = useState<boolean>(false)
    const [rePasswordDirty, setRePasswordDirty] = useState<boolean>(false)

    const [formValid, setFormValid] = useState<boolean> (false)

    useEffect(( ) => {
        if (firstNameError || secondNameError || emailError || passwordError || rePasswordError ) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[firstNameError, secondNameError, emailError, passwordError, rePasswordError])



    const inputHandler = (e: any) => {
        switch (e.target.name) {
            case 'firstName':
                setFirstName(e.target.value)							
                if(e.target.value.length < 3) {
                    setFirstNameError('Длинна пароля не менее 3 символов')
										break
                } if (!e.target.value) {
                    setFirstNameError('Поле обязательно к заполнению')
										break
                    } 
                    setFirstNameError('')
                break
            case 'secondName':
                setSecondName(e.target.value)
                if(e.target.value.length < 3) {
                    setSecondNameError('Длинна пароля не менее 3 символов')
										break
                } if (!e.target.value) {
                    setSecondNameError('Поле обязательно к заполнению')
										break
                    } 
										setSecondNameError('')
                break
            case 'email':
                setEmail(e.target.value)
                const re3 = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
                if (!re3.test(String(e.target.value).toLowerCase())) {
                    setEmailError('Некорректный email')
										break
                } 
								setEmailError('')
                break
            case 'password':
                setPassword(e.target.value)
                if(e.target.value.length < 3) {
                    setPasswordError('Длинна пароля не менее 3 символов')
										break
                } if (!e.target.value) {
                        setPasswordError('Поле обязательно к заполнению')
												break
                    }
										setPasswordError('')
                break
            case 'rePassword':
                setRePassword(e.target.value)
                if (e.target.value !== password) {
                    setRePasswordError('Пароли не совпадают')
										break
                } 
								setRePasswordError('')
                break
        }
    }

    
    const blureHandle = (e: any) => {
        switch (e.target.name) {
            case 'firstName':
                setFirstNameDirty(true)
                break
            case 'secondName':
                setSecondNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'rePassword':
                setRePasswordDirty(true)
                break
        }
    }

    const handleClick = (): any => {
        localStorage.setItem('email', email)
				localStorage.setItem('password', password)
        console.log('otpravilos')
      }

    return (
                <div className={styles.container}>
                    <div className="row">
                        <form className="col s12" id='form1'>
                            <div className={styles.inpForm}>
                                <div className={styles.FIO}>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            {(firstNameDirty && firstNameError) && <div style={{color: 'red'}}>{firstNameError}</div> }
                                            <input
                                                name='firstName'
                                                value={firstName}
                                                onBlur={(e) => blureHandle(e)}
                                                onChange={(e) => inputHandler(e)}
                                                placeholder="Имя"
                                                id="first_name"
                                                type="text"
                                                className="validate"
                                            />
                                            <label className="active" htmlFor="first_name">First Name</label>
                                        </div>
                                        <div className="input-field col s6">
                                        {(secondNameDirty && secondNameError) && <div style={{color: 'red'}}>{secondNameError}</div> }
                                            <input
                                                name='secondName'
                                                value={secondName}
                                                onBlur={(e) => blureHandle(e)}
                                                onChange={(e) => inputHandler(e)}
                                                id="last_name"
                                                placeholder="Фамилия"
                                                type="text"
                                                className="validate"
                                            />
                                            <label className="active" htmlFor="last_name">Last Name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.email}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div> }
                                            <input
                                                name='email'
                                                value={email}
                                                onBlur={(e) => blureHandle(e)}
                                                onChange={(e) => inputHandler(e)}
                                                placeholder="Эл. Почта"
                                                id="email"
                                                type="email"
                                                className="validate"
                                            />
                                            <label className="active" htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.password}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div> }
                                            <input
                                                name='password'
                                                value={password}
                                                onBlur={(e) => blureHandle(e)}
                                                onChange={(e) => inputHandler(e)}
                                                placeholder="Пароль"
                                                id="password"
                                                type="password"
                                                className="validate"
                                            />
                                            <label className="active" htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.repeatPassword}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        {(rePasswordDirty && rePasswordError) && <div style={{color: 'red'}}>{rePasswordError}</div> }
                                            <input
                                                name='rePassword'
                                                value={rePassword}
                                                onBlur={(e) => blureHandle(e)}
                                                onChange={(e) => inputHandler(e)}
                                                placeholder="Повторите пароль"
                                                id="password"
                                                type="password"
                                                className="validate"
                                            />
                                            <label className="active" htmlFor="password"> Repeat Password</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.btnGroup}>
                                <div className={styles.btnReg}>
                                    <button 
                                    disabled={!formValid}
                                    className="btn waves-effect waves-light" 
                                    type="submit" 
                                    name="action"
																		onClick={handleClick}
                                    >
                                        Зарегистрироваться
                                    </button>
                                </div>
                                <div className={styles.btnAuth}>
                                    <NavLink to="/logined">
                                        <button
                                            className="btn waves-effect waves-light"
                                            type="submit"
                                            name="action"
                                           
                                            >
                                                Уже есть аккаунт?
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
    );
}

export default SignUpForm