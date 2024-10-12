import React from "react";
import styles from "./index.module.css";
import Social from "./social";
import Data from "./data";

const Home = () => {
    return (
        <section id="home">
            <div className={`${styles.home__container} container grid`}>
                <div className={`${styles.home__content} grid`}>
                    <Social />
                    <div className={styles.home__img}></div>
                    <Data />
                </div>

                {/* Render the About component */}
                {/*<About />*/}
                {/*<Skills/>*/}
                {/*<Projects/>*/}
                {/*<Qualification/>*/}
                {/*<Testimonials/>*/}
                {/*<Contact/>*/}
            </div>

        </section>

    );
}

export default Home;
