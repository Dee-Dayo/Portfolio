import React, { useState } from 'react';
import styles from './index.module.css'

const ServiceModal = ({ toggleTab, toggleState, index, title, description, projects }) => {
    return (
        <div className={toggleState === index ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">{title}</h3>
                <p className="services__modal-description">{description}</p>

                <h4 className="services__modal-subtitle">Projects</h4>
                <ul className="services__modal-projects">
                    {projects.map((project, i) => (
                        <li key={i} className="services__modal-project">
                            <i className="uil uil-folder services__modal-icon"></i>
                            <p className="services__modal-info">
                                {project.projectName} -{" "}
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const ServiceContent = ({ icon, title, toggleTab, index }) => {
    return (
        <div className={styles.services__content}>
            <div>
                <i className={`uil ${icon} ${styles.services__icon}`}></i>
                <h3 className={styles.services__title}>{title}</h3>
            </div>
            <span className={styles.services__button} onClick={() => toggleTab(index)}>
                View More
                <i className={`uil uil-arrow-right ${styles.services__button_icon}`}></i>
            </span>
        </div>
    );
};

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const serviceData = [
        {
            title: "Frontend Engineer",
            description: "Specializing in intuitive, user-friendly interfaces with modern JavaScript frameworks, I build fast, responsive, and accessible web applications optimized for performance.",
            icon: "uil-web-grid",
            projects: [
                {
                    projectName: "Contact Management Website",
                    githubLink: "https://contact-managment-app-using-react.vercel.app/"
                },
                {
                    projectName: "Login/SignUp Website",
                    githubLink: "https://login-page-ten-kappa.vercel.app/"
                },
                {
                    projectName: "Next-Cent App Design",
                    githubLink: "https://react-next-cent-fiuzb7rtr-abolaji-s-projects.vercel.app/"
                },
                {
                    projectName: "Connectivity Website",
                    githubLink: "https://multilconnect-front-end.vercel.app/"
                },
                {
                    projectName: "BeeJhay Gadget App",
                    githubLink: "https://bee-jhay-gadget-n77vawvzu-abolaji-s-projects.vercel.app/"
                },
                {
                    projectName: "Portfolio Website",
                    githubLink: "https://my-portfolio-phi-drab-12.vercel.app/"
                },
                {
                    projectName: "Book Collection Website",
                    githubLink: "https://bookcollections.vercel.app/"
                },
            ]
        },
        {
            title: "Backend Engineer",
            description: "Experienced in building scalable and efficient backend systems, " +
                "ensuring performance and security using Java, Python and JavaScript.",
            icon: "uil-server-network",
            projects: [
                {
                    projectName: "Movie Hub REST API",
                    githubLink: "https://github.com/Abolaji2K21/Movie_Hub"
                },
                {
                    projectName: "ServiceMatch API",
                    githubLink: "https://github.com/MultiConnectWeb/MultiConnect"
                },
                {
                    projectName: "Contact Management API",
                    githubLink: "https://github.com/Abolaji2K21/Cloned_Contact_App_For_Practice"
                },
                {
                    projectName: "Blog Hub REST API",
                    githubLink: "https://github.com/Abolaji2K21/Modern_Blog"
                },
                {
                    projectName: "Productivity Toolbox API ",
                    githubLink: "https://github.com/Abolaji2K21/Java_Script_Gate/"
                },

            ]
        },
        {
            title: "Algorithm Developer",
            description: "Proficient in algorithm design and problem-solving, optimizing solutions for complex computational problems.",
            icon: "uil-brain",
            projects: [
                {
                    projectName: "Archery Game Algorithm",
                    githubLink: "https://github.com/Abolaji2K21/taskForFirstGate-/tree/main/src/ArcheryGame"
                },
                {
                    projectName: "Logistic Workflow Algorithm",
                    githubLink: "https://github.com/Abolaji2K21/taskForFirstGate-/tree/main/src/Back_To_Sender"
                },
                {
                    projectName: "Tic Tac Toe Game Algorithm",
                    githubLink: "https://github.com/Abolaji2K21/taskForFirstGate-/tree/main/src/Tic_Tac_Toe"
                },
                {
                    projectName: "TurtleGraphics Algorithm",
                    githubLink: "https://github.com/Abolaji2K21/taskForFirstGate-/tree/main/src/TurtleGraphics"
                },
                {
                    projectName: "SevenSegment Algorithm",
                    githubLink: "https://github.com/Abolaji2K21/taskForFirstGate-/tree/main/src/SevenSegmentDisplay"
                },
            ]
        }
    ];

    return (
        <section className={styles.section} id="projects">
            <h2 className={styles.section__title}>Projects</h2>
            <span className="section__subtitle">What I Have Done</span>

            <div className={styles.services__container}>
                {serviceData.map((service, index) => (
                    <React.Fragment key={index}>
                        <ServiceContent
                            icon={service.icon}
                            title={service.title}
                            toggleTab={toggleTab}
                            index={index + 1}
                        />
                        <ServiceModal
                            toggleTab={toggleTab}
                            toggleState={toggleState}
                            index={index + 1}
                            title={service.title}
                            description={service.description}
                            projects={service.projects}
                        />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Projects;
