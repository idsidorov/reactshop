import React from 'react'
import styles from './styles.module.scss'

const SignInForm: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className="row">
                <form className="col s12">
                    <div className={styles.inpForm}>
                        <div className={styles.email}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.password}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate" />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.btn}>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignInForm
