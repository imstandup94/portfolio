import React from 'react';
import Button from '../button/button';
import styles from './modal.module.css';

const Modal = React.memo(({modal, text, onCloseModal}) => {
    return(
        <section className={modal ? styles.modalContainer : styles.modalContainerHide} onClick={onCloseModal}>
            <div className={`${styles.modal} contents-bg`}>
                <p className="text">{text}</p>
                <Button text='확인' />
            </div>
        </section>
    );
});

export default Modal;