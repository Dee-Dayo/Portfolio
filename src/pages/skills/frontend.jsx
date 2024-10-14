import React from "react";
import styles from "./index.module.css"

const Frontend = () => {
    return (
        <div className={styles.skills__content}>
            <h3 className={styles.skills__title}>Frontend Developer</h3>

            <div className={styles.skills__box}>
                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                        <h3 className={styles.skills__name}>JavaScript</h3>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>React Native</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>React</h3>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>Tailwind</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>HTML & CSS</h3>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>TypeScript</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frontend;
