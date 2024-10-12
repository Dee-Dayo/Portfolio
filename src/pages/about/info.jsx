import React from "react";
import styles from "./index.module.css";

const Info = () => {
    return (
        <div className={styles.about__info}>
            <div className={styles.about__box}>
                <i className="bx bx-code-alt about__icon"></i>
                <h3 className={styles.about__title}>Technical Experience</h3>
                <span className={styles.about__subtitle}>10 years of experience</span>
            </div>

            <div className={styles.about__box}>
                <i className="bx bx-award about__icon"></i>
                <h3 className={styles.about__title}>Experience</h3>
                <span className={styles.about__subtitle}>1 Year of Hands-on Training</span>
            </div>

            <div className={styles.about__box}>
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className={styles.about__title}>Projects</h3>
                <span className={styles.about__subtitle}>10+ Completed Projects</span>
            </div>

            <div className={styles.about__box}>
                <i className="bx bx-support about__icon"></i>
                <h3 className={styles.about__title}>Support</h3>
                <span className={styles.about__subtitle}>Available for New Opportunities</span>
            </div>
        </div>
    );
}

export default Info;
