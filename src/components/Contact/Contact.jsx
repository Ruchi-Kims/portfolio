import React from 'react'
import styles from '../contact/Contact.module.css'

export default function Contact() {
  return (
    <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src="assets/contact/emailicon.png" alt="Email" />
                    <a href="mailto:ruchikimpolo@gmail.com">ruchikimpolo@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src="assets/contact/githubicon.png" alt="Github" />
                    <a href="https://github.com/">https://github.com/</a>
                </li>
                <li className={styles.link}>
                    <img src="assets/contact/linkedinicon.png" alt="Linkedin" />
                    <a href="https://fr.linkedin.com/">https://fr.linkedin.com/</a>
                </li>
            </ul>
    </footer>
    
  )
}
