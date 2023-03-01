import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/profile'>Profile</Link>
                <Link href='/products'>Products</Link>
            </div>
        </div>
    );
};

export default Navbar;