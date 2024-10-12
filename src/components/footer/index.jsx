import React from 'react';
import styles from './index.module.css'
const Footer = () => {
    return (
       <footer className={styles.footer}>
           <div className={styles.footer__container}>
               <ul className={styles.footer__list}>
                   <li>
                       <a href="#about" className={styles.footer__link}>About</a>
                   </li>
                   <li>
                       <a href="#skills" className={styles.footer__link}>Skills</a>
                   </li>
                   <li>
                       <a href="#projects" className={styles.footer__link}>Projects</a>
                   </li>
                   <li>
                       <a href="#qualifications" className={styles.footer__link}>Qualifications</a>
                   </li>

               </ul>

               <div className={styles.footer__social}>
                   <a href="https://www.linkedin.com/in/akindayo-akinyemi-3b3685248/" className={styles.footer__social_link}
                      target="_blank" rel="noopener noreferrer">
                       <i className="fab fa-linkedin"></i>
                   </a>
                   <a href="https://github.com/Dee-Dayo" className={styles.footer__social_link} target="_blank"
                      rel="noopener noreferrer">
                       <i className="fab fa-github"></i>
                   </a>
               </div>
               <span className={styles.footer__copy}>&#169; Akindayo Akinyemi. All rights reserved</span>
           </div>
       </footer>
    );
}

export default Footer;
