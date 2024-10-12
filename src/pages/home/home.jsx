import React from "react";
import styles from "./index.module.css";
import Social from "./social";
import Data from "./data";
import About from "../about/about";

const Home = () => {
    return (
        <div className={styles.home__container} id="home">
            <div className={`${styles.home__content} grid`}>
                <Social />
                <div className={styles.home__img}></div>
                <Data />
            </div>

            <div id="about">
                <About />
            </div>
            {/*<Skills/>*/}
            {/*<Projects/>*/}
            {/*<Qualification/>*/}
            {/*<Testimonials/>*/}
            {/*<Contact/>*/}
        </div>
    );
}

export default Home;
