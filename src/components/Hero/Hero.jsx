import React from 'react'
import styles from "./Hero.module.css"

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>

        <div className={styles.tagWrap}>
          <div className={styles.tagDot}></div>
          <span className={styles.tag} id="rotating-tag">Développeur Web</span>
        </div>

        <h1 className={styles.title}>
          Salut, je suis<br />
          <span className={styles.highlight}>Ruchi Kimpolo</span>
        </h1>

        <p className={styles.description}>
          Je crée des applications web modernes, alliant design élégant
          et code robuste pour donner vie à vos idées.
        </p>

        <div className={styles.skills}>
          {['React', 'JavaScript', 'CSS', 'Node.js', 'HTML'].map(skill => (
            <span key={skill} className={styles.skillBadge}>{skill}</span>
          ))}
        </div>

        <div className={styles.buttons}>
          <a href="mailto:ruchikimpolo@gmail.com" className={styles.btnPrimary}>
            Contactez-moi
          </a>
          <a href="#projects" className={styles.btnSecondary}>
            Voir mes projets
          </a>
        </div>

        <div className={styles.socials}>
          <a href="https://github.com/Ruchi-Kims" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

      </div>

      <img src='/assets/hero/imageProfil.jpeg' alt='Ruchi Kimpolo' className={styles.heroImage} />

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollArrow}></div>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

      
    </section>
  )
}

export default Hero