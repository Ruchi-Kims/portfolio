import React from 'react';
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src='assets/about/aboutimage.png' alt='Me sitting on with a laptop' className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src="assets/about/cursoricon.png" alt="Cursor icon"  />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a Frontend Developer with experience in building and optimized sites</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="assets/about/servericon.png" alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Back end Developer</h3>
                        <p>I have experience in Backend and Apis</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="assets/about/uiicon.png" alt="ui icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p> I have designed multiple landing pages </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    
  )
}
