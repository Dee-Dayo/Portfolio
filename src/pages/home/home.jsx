import React from "react";
import styles from "./index.module.css";
import Social from "./social";
import Data from "./data";
import About from "../about/about";

const Home = () => {
    return (
            <div className={styles.home__container}>
                <div className={`${styles.home__content} grid`}>
                    <Social />
                    <div className={styles.home__img}></div>
                    <Data />
                </div>

                <About/>
                {/*<Skills/>*/}
                {/*<Projects/>*/}
                {/*<Qualification/>*/}
                {/*<Testimonials/>*/}
                {/*<Contact/>*/}
            </div>
    );
}

export default Home;
