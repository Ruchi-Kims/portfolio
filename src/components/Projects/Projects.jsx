import React from 'react'
import styles from './Projects.module.css'
import projects from '../../data/projects.json'
import { ProjectCard } from './ProjectCard'

function Projects() {
  return (

    <section className={styles.container} id='projects'>
        <h2 className={styles.title}>Projets</h2>
        <div className={styles.projects}>
            {projects.map((project, id) => {
                return <ProjectCard key={id} project={project} />
            })}
        </div>
    </section>
    
  )
}

export default Projects