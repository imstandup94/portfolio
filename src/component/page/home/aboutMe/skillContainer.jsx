import React from 'react';
import styles from './skillContainer.module.css';

const SkillContainer = React.memo(({item}) => (
    <li className={`${styles.skill} card-animation contents-bg`}>
        <div className={styles.icon}></div>
        <span className={styles.text}>{item}</span>
    </li>
));

export default SkillContainer;