import React from 'react';
import styles from '../../../../css/page/home.module.css';

const Moon = React.memo(({opacity, transform}) => {
    return(
        <div className={styles.moonContainer} style={{opacity: opacity}}>
            <svg className={styles.moon} style={{transform: transform}} xmlns="http://www.w3.org/2000/svg" width="706" height="706" viewBox="0 0 706 706">
                <defs>
                    <clipPath id="a">
                        <rect width="706" height="706" transform="translate(13074 -541)" fill="#fff" stroke="#707070" strokeWidth="1" />
                    </clipPath>
                    <filter id="b" x="0" y="0" width="706" height="706" filterUnits="userSpaceOnUse">
                        <feOffset dx="-10" dy="-18" input="SourceAlpha" />
                        <feGaussianBlur stdDeviation="15" result="c" />
                        <feFlood floodColor="#8896a4" floodOpacity="0.569" result="d" />
                        <feComposite operator="out" in="SourceGraphic" in2="c" />
                        <feComposite operator="in" in="d" />
                        <feComposite operator="in" in2="SourceGraphic" />
                    </filter>
                </defs>
                <g transform="translate(-13074 541)" clipPath="url(#a)">
                    <g transform="matrix(1, 0, 0, 1, 13074, -541)" filter="url(#b)">
                        <circle cx="353" cy="353" r="353" fill="#fff" />
                    </g>
                </g>
            </svg>
        </div>
    );
});

export default Moon;