import React from 'react';
import styles from './designTitle.module.css';

const DesignTitle = ({text}) => (
    <h6 className={styles.text}>{text}</h6>
);

export default DesignTitle;