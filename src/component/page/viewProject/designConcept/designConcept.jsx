import React from 'react';
import DesignTitle from '../common/designTitle';
import styles from './designConcept.module.css';

const DesignConcept = ({cencept}) => (
    <section className={styles.box}>
        <DesignTitle text={'디자인 키워드'} />
        <div className={styles.contents}>
            <ul>
                {cencept.map(item => <li>{item.text}</li>)}
            </ul>
            <p>공간, 열린 가능성, 접점이라는 키워드에서 도출된 시각적 모티프를 이용하여 브랜드 아이덴티티 디자인을 진행하였습니다.
다양한 브랜드와 협업이 이루어지는 열린 공간과 브랜드와 고객이 만나는 접점을 상징한다는 의미를 표현하였습니다. </p>
        </div>
    </section>
);

export default DesignConcept;