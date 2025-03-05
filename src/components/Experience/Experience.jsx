import React from 'react'
import styles from './Experience.module.css';
import skills from "../../data/skills.json"
import history from "../../data/history.json"


export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
        <h2 className={styles.title}>Experiences</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill, id)=>{
                    return <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}><img src={skill.imageSrc} alt={skill.title} /></div>
                        <p>{skill.title}</p>
                    </div>
                   
                }
                
                )}
            </div>
            <ul className={styles.history}>
            {history.map((historyItem, id)=>{
                    return <div key={id} className={styles.historyItem}>
                        <div><img src={historyItem.imageSrc} alt={`${historyItem.organisation} Logo`}/></div>
                        <div className={styles.historyItemDetails}>
                                 <h3>{`${historyItem.role},${historyItem.organisation} `}</h3>
                                 <p>{`${historyItem.startDate}-${historyItem.endDate} `}</p>
                                 <ul>{historyItem.experiences.map((experienceSkill, id) =>{
                                    return <li key={id}> {experienceSkill}</li>
                                 })}</ul>
                        </div>
                        
                    </div>
                   
                }
                
                )} 
            </ul>
        </div>
    </section>
    
  )
}
