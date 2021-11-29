import React from "react";
import styles from './styles.module.scss'
import Page from '../../constance/PageConstance'
import { Modal } from "../Modal/Modal";

const Card: React.FC = () => {

    const [isModalOpen, setModalState] = React.useState(false);

    const toogleModal = () => setModalState(!isModalOpen)
    

    return (
        
            <div className={styles.Card}>
                {Page.map((item: any) => (
                    <div className={styles.oneCard} key={item.id}>
                        
                            <div className="col s12 m6">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={`${item.img}`} />
                                    </div>
                                    <div className="card-content">
                                            <button className="material-icons" onClick={toogleModal}
                                            >add</button>
                                            <Modal
                                                id={item.id}
                                                img={item.img}
                                                title={item.title}
                                                price={item.price}
                                                description={item.description}
                                                isOpen={isModalOpen}
                                                onClose={toogleModal}
                                                >
                                            </Modal>
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
