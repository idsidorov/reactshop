import React from 'react'
import styles from './styles.module.scss'
import SignInForm from './SignInForm'

const SignIn: React.FC = () => {
    return (
        <div className={styles.container}>
            <SignInForm />
        </div>
    );
}

export default SignIn;