import React, { useState } from 'react'
import styles from './styles.module.scss'
import {NavLink } from 'react-router-dom';
import * as yup from "yup";
import { Formik } from "formik";

const schema = yup.object({
    firstName: yup.string().required('Please Enter a first name'),
    secondName: yup.string().required('Please Enter a second name'),
    email: yup
        .string()
        .email()
        .required('Please Enter your Email'),
    password: yup
        .string()
        .required('Please Enter your password')
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number "
        ),
    rePassword: yup
        .string()
        .required()
        .oneOf([yup.ref("password"), null], "Passwords must match")
});

const SignUpForm: React.FC = () => {

    const [firstName, setFirstName] = useState<string>('')
    const [secondName, setSecondName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rePassword, setRePassword] = useState<string>('')

    const getData = (value: any) => {
        console.log(value)
    }

    const handleClick = (): any => {
        console.log('otpravilos')
      }

    return (
        <Formik
            validationSchema={schema}
            onSubmit={(value: any) => getData(value)}
            initialValues={{
                firstName: "",
                secondName: "",
                email: "",
                password: "",
                rePassword: ""
            }}
        >
           {() => (
                <div className={styles.container}>
                    <div className="row">
                        <form className="col s12">
                            <div className={styles.inpForm}>
                                <div className={styles.FIO}>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input
                                                value={firstName}
                                                placeholder="Имя"
                                                id="first_name"
                                                type="text"
                                                className="validate"
                                                onChange={(event) => {
                                                    setFirstName(event.target.value)
                                                }}
                                            />
                                            <label className="active" htmlFor="first_name">First Name</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input
                                                value={secondName}
                                                id="last_name"
                                                placeholder="Фамилия"
                                                type="text"
                                                className="validate"
                                                onChange={(event) => {
                                                    setSecondName(event.target.value)
                                                }}
                                            />
                                            <label className="active" htmlFor="last_name">Last Name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.email}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input
                                                value={email}
                                                placeholder="Эл. Почта"
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
                                <div className={styles.repeatPassword}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input
                                                value={rePassword}
                                                placeholder="Повторите пароль"
                                                id="password"
                                                type="password"
                                                className="validate"
                                                onChange={(event) => {
                                                    setRePassword(event.target.value)
                                                }}
                                            />
                                            <label className="active" htmlFor="password"> Repeat Password</label>
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
                                    >
                                        Зарегистрироваться
                                    </button>
                                </div>
                                <div className={styles.btnReg}>
                                    <NavLink to="/logined">
                                        <button
                                            className="btn waves-effect waves-light"
                                            type="submit"
                                            name="action"
                                            onClick={()=>{handleClick()}}
                                            >
                                                Уже есть аккаунт?
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>)}
        </Formik>
    );
}

export default SignUpForm