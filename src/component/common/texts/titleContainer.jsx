import React from 'react';
import styles from './titleContainer.module.css';

const TitleContainer = React.memo(({title, fontSize, style}) => {
    return(
        <div className={`${styles.titleContainer}`} style={style}>
            <h2 className={styles.title} style={{fontSize: fontSize}}>{title}</h2>
            <h2 className={`${styles.title} ${styles.titleStroke}`} style={{fontSize: fontSize}}>{title}</h2>
        </div>
    );
    
});

export default TitleContainer;