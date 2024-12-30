import React from 'react'
import styles from "../Hero/Hero.module.css"

function Hero() {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kims</h1>
        <p className={styles.description}>I'm a full-stack developper and working in NodeJs, React Js and more...</p>
        <a href="mailto:ruchikimpolo@gmail.com" className={styles.contactBtns}>Contact Me</a>
    </div>
    <img src='/assets/hero/heromage.png' alt='Hero img' className={styles.heroImage} />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />


    
  </section>
  )
}

export default Hero