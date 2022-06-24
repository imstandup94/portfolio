import React from 'react';
import styles from './commonBg.module.css';

const CommonBg = (props) => (
    <section className={styles.bgContainer}>
        <div className={styles.bg}></div>
        <div className={styles.balckBg}></div>
        <div className={styles.star}></div>
    </section>
);

export default CommonBg;