import React from 'react'
import styles from './ProjectCard.module.css'

export const ProjectCard = ({project : {title, imageSrc, description, skills, source,github}}) => {
  return (
    <div className={styles.container}>
        <img src={imageSrc} alt={`Image of ${title}`} className={styles.image} />
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <ul className={styles.skills}>
                        {skills.map((skill, id) =>{
                            return <li key={id} className={styles.skill} >{skill}</li>
                        })}
                    </ul>
                    <div className={styles.links}>
                        
                        <a href={source} target='_blank' rel="noopener noreferrer" className={`${styles.link} ${styles.linkSource}`}>
                            Démo Live
                        </a>
                        <a href={github} target='_blank' rel="noopener noreferrer" className={`${styles.link} ${styles.linkGithub}`}>
                            <img src="/assets/nav/githubIcon.png" alt="" className={styles.iconGithub} />
                            Github
                        </a>
                    </div>
    </div>
  )
}
