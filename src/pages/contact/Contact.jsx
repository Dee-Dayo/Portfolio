import React, { useState } from 'react';
import styles from "./index.module.css";

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const Modal = ({ message, onClose }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <i onClick={onClose} className={`uil uil-times ${styles.modal__close_icon}`}></i>
                <p>{message}</p>
            </div>
        </div>
    );
};

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData(event.target);
        const response = await fetch("https://formspree.io/f/xqazvdep", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        setIsLoading(false);

        if (response.ok) {
            setModalMessage("Message sent successfully!");
            setIsModalOpen(true);
            event.target.reset();
        } else {
            setModalMessage("There was a problem sending your message.");
            setIsModalOpen(true);
        }
    };

    return (
        <section className={styles.section} id="contact">
            <h2 className={styles.section__title}>Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className={styles.contact__container}>
                <div>
                    <h3 className={styles.contact__title}>Talk to me</h3>
                    <div className={styles.contact__info}>
                        <div className={styles.contact__card}>
                            <i className={`bx bx-mail-send ${styles.contact__card_icon}`}></i>
                            <h3 className={styles.contact__card_title}>Email Address</h3>
                            <span className={styles.contact__card_data}>darhyor2050@gmail.com</span>
                            <a href="mailto:darhyor2050@gmail.com" className={styles.contact__button}>
                                Write me
                                <i className={`bx bx-right-arrow-alt ${styles.contact__button_icon}`}></i>
                            </a>
                        </div>

                        <div className={styles.contact__card}>
                            <i className={`bx bxl-whatsapp ${styles.contact__card_icon}`}></i>
                            <h3 className={styles.contact__card_title}>WhatsApp</h3>
                            <span className={styles.contact__card_data}>+2348172581637</span>
                            <a href="https://wa.me/2348172581637" className={styles.contact__button} target="_blank" rel="noopener noreferrer">
                                Write me
                                <i className={`bx bx-right-arrow-alt ${styles.contact__button_icon}`}></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className={styles.contact__title}>Write me your project</h3>
                    <form className={styles.contact__form} onSubmit={handleSubmit}>
                        <div className={styles.contact__form_div}>
                            <label className={styles.contact__form_tag}>Name</label>
                            <input type="text" name="name" className={styles.contact__form_input}
                                   placeholder="Insert your name sir/ma" required />
                        </div>
                        <div className={styles.contact__form_div}>
                            <label className={styles.contact__form_tag}>Mail</label>
                            <input type="email" name="email" className={styles.contact__form_input}
                                   placeholder="Insert your email sir/ma" required />
                        </div>
                        <div className={`${styles.contact__form_div} ${styles.contact__form_area}`}>
                            <label className={styles.contact__form_tag}>Message</label>
                            <textarea name="message" className={styles.contact__form_input} placeholder="Write your message" required></textarea>
                        </div>
                        <button className={`button ${styles.button__flex}`} type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                </svg>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>
            </div>

            {isModalOpen && <Modal message={modalMessage} onClose={() => setIsModalOpen(false)} />}
        </section>
    );
};

export default Contact;
