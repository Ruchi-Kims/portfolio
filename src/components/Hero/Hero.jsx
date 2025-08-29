import React from 'react'
import styles from "../Hero/Hero.module.css"

function Hero() {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hello, je me présente</h1>
        <p className={styles.description}>Développeur passionné créatif,je développe des applications web pour rendre vos idées réelles.
        Mon objectif est de concevoir des interfaces modernes avec une expérience utilisateur agréable qui marie design élégant et fonctionnalité robuste. <br /><br /> Explorez mon univers numérique...</p>
        <a href="mailto:ruchikimpolo@gmail.com" className={styles.contactBtns}>Contactez-moi</a>
    </div>
    
   <img /*src='/assets/hero/imageProfil.jpeg'*/ alt='' className={styles.heroImage} />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />


    
  </section>
  )
}

export default Hero