import React from 'react';
import WorkIcon from '../../../common/svg/workIcon';
import EyesIcon from '../../../common/svg/eyesIcon';
import StudyIcon from '../../../common/svg/studyIcon';
import DesignIcon from '../../../common/svg/designIcon';
import styles from './pointContainer.module.css';

const PointContainer = React.memo(({item, index}) => {
    const {key, text1, text2} = item;
    return(
        <li className={`${styles.pointContainer} card-animation contents-bg`}>
            <span className={styles.number}>{index}</span>
            <div className={styles.icon}>
                {key === 'item1' && <WorkIcon fill="#fff" /> }
                {key === 'item2' && <EyesIcon fill="#fff" /> }
                {key === 'item3' && <StudyIcon fill="#fff" /> }
                {key === 'item4' && <DesignIcon fill="#fff" /> }
            </div>
            <h6 className={styles.text1}>{text1}</h6>
            <p className={styles.text2}>{text2}</p>
        </li>
    );
});

export default PointContainer;