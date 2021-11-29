import React, {useCallback, useEffect} from "react";
import Page from '../../constance/PageConstance'
import styles from "./styles.module.scss";


interface ModalProps {
    img: any;
    title: string;
    price: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, price, img, description}) => {

    const overlayRef = React.useRef(null);

    const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === overlayRef.current) {
            onClose()
        }
    }

    return isOpen ? ( 
        <div className={styles.modal}>
            <div 
            className={styles.modal_overlay}
            ref={overlayRef} 
            onClick={handleOverlayClick} />
            <div className={styles.modal_box}>
                <div className={styles.modal_close_btn}>
                    <button onClick={onClose}>X</button>
                </div>
                <div className={styles.modal_img}>
                    {img}
                </div>
                <div className={styles.modal_title}>
                    {title}
                </div>
                <div className={styles.modal_content}>
                    {price}
                </div>
                <div className={styles.modal_description}>
                    {description}
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
    ) : null;
};




