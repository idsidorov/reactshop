import React from 'react'
import styles from './styles.module.scss'
import SignUpForm from './SignUpForm'

const SignUp: React.FC = () => {
    return (
        <div className={styles.container}>
            <SignUpForm />
        </div>
    );
}

export default SignUp;