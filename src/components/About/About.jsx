import React from 'react';
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>Qui suis-je?</h2>
        <p className={styles.description}>Développeur frontend passionné et spécialiste IT avec une expertise dans la création d'interfaces utilisateur réactives et intuitives. 
                Je combine compétences techniques et sens du design pour produire des expériences web exceptionnelles. <br />
                Polyvalent, je propose également un support technique complet pour particuliers et professionnels.</p>
        <div className={styles.content}>
            <img src='assets/about/aboutimage.png' alt='Me sitting on with a laptop' className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>💻 Développeur Frontend</h3><br />
                        <p>Je conçois des interfaces simples, performantes et réactives avec des technologies comme :
HTML,CSS (avec Tailwind CSS),JavaScript & React.js</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>🛠️ Gestionnaire de contenu</h3><br />
                        <p>WordPress (Création de sites vitrines & blogs personnalisés),Elementor & WooCommerce</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>⚙️ IT Support</h3><br />
                        <p> Assistance technique (Windows & MacOS),Configuration réseau,Diagnostic matériel & logiciel, Microsoft 365 </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    
  )
}
