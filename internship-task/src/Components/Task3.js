// Task3.js
import React from 'react';
import styles from './Task3.module.css';

const Task3 = () => {
  return (
    <div className={styles.resumeContainer}>
      <h1 className={styles.heading}>MUHAMMAD AFZAAL</h1>
      <p className={styles.contactInfo}>
        Email: <a href="mailto:mianafzaal097@gmail.com">mianafzaal097@gmail.com</a> | Phone: +92-348-2835397 | Location: Toba Tek Singh
      </p>
      <p className={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/mianafzaal297" target="_blank" rel="noopener noreferrer">LinkedIn</a>|  
        <a href="https://github.com/mianafzaal297" target="_blank" rel="noopener noreferrer"> GitHub</a>
      </p>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>ABOUT ME</h2>
        <p className={styles.sectionContent}>
          Dedicated Software Engineering student with a robust foundation in web development and a keen interest in AI and Machine Learning. Eager to collaborate with dynamic teams and tackle challenging projects to foster innovation and growth.
        </p>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>PROJECTS</h2>
        <div className={styles.project}>
          <h3 className={styles.projectTitle}>SOCIAL APP</h3>
          <p className={styles.sectionContent}>
            Developed a social application using JavaFX where users can add friends, create posts, and manage an authentication system.
          </p>
          <ul className={styles.projectDetails}>
            <li><strong>Friend Management:</strong> Users can add friends.</li>
            <li><strong>Post Creation:</strong> Users can create posts which are visible to their friends.</li>
            <li><strong>Authentication System:</strong> Implemented secure user authentication with login and registration functionalities.</li>
            <li><strong>Technologies Used:</strong> Java, JavaFX, Serializability</li>
          </ul>
        </div>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>EDUCATION</h2>
        <p className={styles.sectionContent}>
          <strong>COMSATS University Islamabad, Lahore Campus</strong><br />
          Bachelor’s in Software Engineering, 09/2022-Present
        </p>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>RELEVANT COURSEWORK</h2>
        <p className={styles.sectionContent}>Object-Oriented Programming | Data Structures and Algorithms | Database Systems | Web Technologies</p>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>SKILLS</h2>
        <p className={styles.sectionContent}>
          <strong>Programming Languages:</strong> C++, Java<br />
          <strong>Web Technologies:</strong> HTML, CSS, JavaScript, EJS, Node.js, Express.js<br />
          <strong>Web Frameworks:</strong> Bootstrap, jQuery<br />
          <strong>Database:</strong> MySQL
        </p>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>TOOLS & PLATFORMS</h2>
        <p className={styles.sectionContent}>Visual Studio | Microsoft 365 | Cisco Packet Tracer | Wireshark | Adobe Illustrator | SQL Server Management System (SSMS) | GitHub</p>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>CERTIFICATIONS</h2>
        <ul className={styles.sectionContent}>
          <li>Introduction to Artificial Intelligence (Coursera)</li>
          <li>Technical Support Fundamentals (Coursera)</li>
          <li>Freelancing (Digiskills.pk)</li>
        </ul>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>PROFESSIONAL EXPERIENCE</h2>
        <p className={styles.sectionContent}>
          <strong>Web Development:</strong> Gained extensive experience through academic tasks involving Node.js, Express, and JavaScript.
        </p>
        <p className={styles.sectionContent}>
          <strong>Teaching Assistant:</strong> Provided support to juniors and classmates in DSA, Database Systems, and Web Technologies courses.
        </p>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>EXTRACURRICULAR ACTIVITIES</h2>
        <ul className={styles.sectionContent}>
          <li>Participated in HACK THE PACK coding competition</li>
          <li>Participated in HACKATHON’24 coding competition</li>
        </ul>
      </section>
    </div>
  );
};

export default Task3;
