import React from "react";
import styles from './styles.module.scss'
import Page from '../../constance/PageConstance'

const Card: React.FC = () => {



    return (
    
            <div className={styles.Card}>
                {Page.map((item: any) => (
                    <div className={styles.oneCard} key={item.id}>
                        
                            <div className="col s12 m6">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={`${item.img}`} />
                                        <a className="btn-floating halfway-fab waves-effect waves-light red">
                                            <i className="material-icons"

                                            >add</i>
                                        </a>
                                    </div>
                                    <div className="card-content">
                                        <h5>{item.title}</h5>
                                    </div>
                                    <div className="card-content">
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="card-content">
                                        <p>{item.price} P.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                

                )
                )}
            </div>
 



    )
}
export default Card;