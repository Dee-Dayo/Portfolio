import React, { useEffect, useState } from 'react';
import styles from './index.module.css';

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(`.${styles.header}`);
            if (header) {
                if (window.scrollY >= 80) {
                    header.classList.add(styles.scrollHeader);
                } else {
                    header.classList.remove(styles.scrollHeader);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [activeNav, setActiveNav] = useState('#home');
    const [toggle, setToggle] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <a href="#home" className={styles.nav__logo}>Dee</a>
                <div className={`${styles.nav__menu} ${toggle ? styles.show_menu : ''}`}>
                    <ul className={`${styles.nav__list} grid`}>
                        {['home', 'about', 'skills', 'projects', 'qualifications', 'contact'].map(section => (
                            <li className={styles.nav__item} key={section}>
                                <a
                                    href={`#${section}`}
                                    className={`${styles.nav__link} ${activeNav === `#${section}` ? styles.active_link : ''}`}
                                    onClick={() => {
                                        setActiveNav(`#${section}`);
                                        setToggle(false); // Close menu after selecting an option
                                    }}
                                >
                                    <i className={`uil uil-${section === 'home' ? 'estate' : section} ${styles.nav__icon}`}></i> {section.charAt(0).toUpperCase() + section.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <i className={`uil uil-times ${styles.nav__close}`} onClick={() => setToggle(false)}></i>
                </div>
                <div className={styles.nav__toggle} onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
