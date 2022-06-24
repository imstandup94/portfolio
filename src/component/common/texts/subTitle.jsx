import React from 'react';
import styles from './subTitle.module.css';

const SubTitle = React.memo(({subTitle, style}) => (
    <p className={styles.subTitle} style={style}>{subTitle}</p>
));

export default SubTitle;