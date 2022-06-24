import React, { useEffect, useRef, useState } from 'react';
import styles from './button.module.css';

const Button = React.memo(({index, btnDataName, type, text, style, onClickBtn}) => {
    const [btnWidth, setBtnWidth] = useState();
    const [btnHeight, setBtnHeight] = useState();

    const btnRef = useRef();
    useEffect(() => {
        window.addEventListener('load', () => {
            const btnRect = btnRef.current.getBoundingClientRect();
            setBtnWidth(btnRect.width);
            setBtnHeight(btnRect.height);
            
            btnDataName === 'project' && console.log(btnRect);
        });
    });

    const clickBtn = (event) => {
        const dataName = event.currentTarget.dataset.name;
        dataName === 'project' && onClickBtn(event.currentTarget.dataset.index);
    };
    return(
        <div className={styles.btnWrap} style={style}>
            <button ref={btnRef} type={type ? type : 'button'} data-index={index} data-name={btnDataName} className={styles.btn} onClick={clickBtn}>
                <span className={styles.btnText}>{text}</span>
                {(btnWidth && btnHeight) &&
                <svg xmlns="http://www.w3.org/2000/svg" width={208} height={48}>
                    <rect width={208} height={48} rx="20" ry="20" stroke="#6aa4f5" strokeWidth="4" strokeOpacity="0.7" pathLength={btnWidth / 6} fill="none"></rect>
                </svg>}
            </button>
            
        </div>
    );
});

export default Button;