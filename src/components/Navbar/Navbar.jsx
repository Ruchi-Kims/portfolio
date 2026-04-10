import React, { useState, useEffect } from 'react'
import styles from "./Navbar.module.css"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['about', 'experience', 'projects', 'contact'];
            for (let id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const { top } = el.getBoundingClientRect();
                    if (top <= 120 && top > -el.offsetHeight + 120) {
                        setActiveLink(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <a className={styles.title} href="/">Portfolio</a>

            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? "assets/nav/closecon.png" : "assets/nav/menucon.png"}
                    alt='menu-button'
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
                    onClick={() => setMenuOpen(false)}>
                    {[
                        { href: 'about', label: 'À Propos' },
                        { href: 'experience', label: 'Expériences' },
                        { href: 'projects', label: 'Projets' },
                        { href: 'contact', label: 'Contactez-moi' },
                    ].map(({ href, label }) => (
                        <li key={href}>
                            
                              <a  href={`#${href}`}
                                className={activeLink === href ? styles.active : ''}
                                >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}