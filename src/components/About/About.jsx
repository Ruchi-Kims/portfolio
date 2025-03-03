import React from 'react';
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>Qui suis-je?</h2>
        <div className={styles.content}>
            <img src='assets/about/aboutimage.png' alt='Me sitting on with a laptop' className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>💻 Développement Frontend avec :</h3><br />
                        <p>Je conçois des interfaces simples, performantes et réactives avec des technologies comme :
HTML,CSS (avec Tailwind CSS),JavaScript & React.js</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>🛠️ Gestion de contenu avec :</h3>
                        <p>WordPress (Création de sites vitrines & blogs personnalisés),Elementor & WooCommerce</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>⚙️ IT Support :</h3>
                        <p> Assistance technique (Windows & MacOS),Configuration réseau,Diagnostic matériel & logiciel, Microsoft 365 </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    
  )
}
