import React from 'react'
import styles from './Projects.module.css'
import projects from '../../data/projects.json'
import { ProjectCard } from './ProjectCard'

function Projects() {
  return (
    /* Ce wrapper prendra toute la largeur et la couleur rouge */
    <div className={styles.fullWidthBackground}>
        <section className={styles.container} id='projects'>
            <div className={styles.header}>
                <div className={styles.subtitleWrapper}>
                    <span className={styles.line}></span>
                    <span className={styles.subtitle}>MON TRAVAIL</span>
                </div>
                <h2 className={styles.title}>
                    Mes <span className={styles.titleHighlight}>Projets</span>
                </h2>
                <p className={styles.description}>
                    Une sélection de mes réalisations techniques et créatives
                </p>
            </div>

            <div className={styles.projectsGrid}>
                {projects.map((project, id) => {
                    return <ProjectCard key={id} project={project} />
                })}
            </div>
        </section>
    </div>
  )
}

export default Projects