import React, {useState} from 'react'
import styles from "./Navbar.module.css"


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>

        <div className={styles.menu}>
            <img className={styles.menuBtn} src={ menuOpen ? "assets/nav/closecon.png"  : "assets/nav/menucon.png"} alt='menu-button'
             onClick={() => setMenuOpen(!menuOpen)} />

            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} 
            onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#about">A Propos</a>
                </li>
                <li>
                    <a href="#experience">Experiences</a>
                </li>
                <li>
                    <a href="#projects">Projets</a>
                </li>
                <li>
                    <a href="#contact">Contactez-moi</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
