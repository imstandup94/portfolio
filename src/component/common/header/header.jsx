import React from 'react';
import styles from './header.module.css';

const Header = React.memo((props) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}><img src="img/logo.png" /></h1>
            <ul className={styles.menu}>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </header>
    );
});

export default Header;