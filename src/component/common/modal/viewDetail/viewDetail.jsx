import React from 'react';
import styles from './viewDetail.module.css';

const ViewDetail = React.memo(({item, viewDetail, onCloseviewImg}) => {
    const {key, title, subTitle, feature, part, skill, url} = item;
    const closeviewImg = () => {
        onCloseviewImg();
    };
    return(
        <>
            {viewDetail &&
            <section className={styles.modalContainer}>
                <div className={`${styles.viewDetail} contents-bg inner`}>
                    <button type="button" className={styles.btn} onClick={closeviewImg}></button>
                    <div className={styles.body}>
                        {/*{currentKey === 'project03' &&
                        <img src={} alt="" />}*/}
                    </div>
                </div>
            </section>}
        </>
    );
});

export default ViewDetail;