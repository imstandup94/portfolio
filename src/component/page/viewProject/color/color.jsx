import React from 'react';
import DesignTitle from '../common/designTitle';
import styles from './color.module.css';

const Color = ({text, colorInfos}) => (
    <section className={styles.box}>
        <DesignTitle text={text} />
        <div className={styles.contents}>
            <ul>
                {colorInfos.map(color => {
                    return  <li className={styles.color} style={{backgroundColor: color}}>
                                <p className={styles.colorName}>{color}</p>
                            </li>;
                })}
            </ul>
        </div>
    </section>
);

export default Color;