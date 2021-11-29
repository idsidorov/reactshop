import React, {useCallback, useEffect} from "react";
import Page from '../../constance/PageConstance'
import Card from "../PageCatalog/Card";
import styles from "./styles.module.scss";


interface ModalProps {
    
    key: number;
    img: any;
    title: string;
    price: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ( props: ModalProps) => {
    console.log(props)

    const overlayRef = React.useRef(null);

    const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === overlayRef.current) {
            props.onClose()
        }
    }

    return props.isOpen ? ( <> 
        <div className={styles.modal} key={props.key}>
            <div 
            className={styles.modal_overlay}
            ref={overlayRef} 
            onClick={handleOverlayClick} />
            <div className={styles.modal_box}>
                <div className={styles.modal_close_btn}>
                    <button onClick={props.onClose}>X</button>
                </div>
                <img className={styles.modal_img} src={`${props.img}`}>
                </img>
                <div className={styles.modal_title}>
                    {props.title}
                </div>
                <div className={styles.modal_content}>
                    {props.price}
                </div>
                <div className={styles.modal_description}>
                    {props.description}
                </div>
                <div className={styles.button}>
                    <div className={styles.btn_add}>
                        <button>
                            Добавить в корзину
                        </button>
                    </div>
                    <div className={styles.number_add}>
                        <input id="number" type="text" placeholder="введите колличество" />
                    </div>
                </div>
            </div>
        </div>
    </>
    ) : null;
};




