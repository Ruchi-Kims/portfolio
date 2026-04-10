import React from 'react';
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.container} id='about'>

      <div className={styles.header}>
        <div className={styles.tag}>
          <div className={styles.tagLine}></div>
          À propos de moi
        </div>
        <h2 className={styles.title}>Qui suis-<span className={styles.highlight}>je ?</span></h2>
        <p className={styles.description}>
          Développeur frontend passionné et spécialiste IT, je combine compétences techniques 
          et sens du design pour produire des expériences web exceptionnelles. 
          Polyvalent, je propose également un support technique complet.
        </p>
      </div>

      <div className={styles.content}>
        <img src='assets/about/aboutimage.png' alt='Ruchi Kimpolo' className={styles.aboutImage} />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutIcon}>💻</div>
            <div className={styles.aboutItemText}>
              <h3>Développeur Frontend</h3>
              <p>HTML, CSS, Tailwind CSS, JavaScript & React.js — interfaces simples, performantes et réactives.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutIcon}>🛠️</div>
            <div className={styles.aboutItemText}>
              <h3>Gestionnaire de contenu</h3>
              <p>WordPress & Elementor — création de sites vitrines et blogs personnalisés.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutIcon}>⚙️</div>
            <div className={styles.aboutItemText}>
              <h3>IT Support</h3>
              <p>Windows & MacOS, configuration réseau, diagnostic matériel & logiciel, Microsoft 365.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNum}>3+</span>
          <span className={styles.statLabel}>Ans d'expérience</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>5+</span>
          <span className={styles.statLabel}>Projets réalisés</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>2+</span>
          <span className={styles.statLabel}>Clients satisfaits</span>
        </div>
      </div>

    </section>
  )
}