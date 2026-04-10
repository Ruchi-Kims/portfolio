import React from 'react'
import styles from './Experience.module.css';
import skills from "../../data/skills.json"
import history from "../../data/history.json"

const icons = {
  "HTML": "🌐",
  "CSS": "🎨",
  "Javascript": "⚡",
  "React": "⚛️",
  "Wordpress": "🔷",
  "Elementor": "🛠️",
  "Github": "🐙"
}

const historyIcons = {
  "Freelance": "💻",
  "Itechia": "⚙️",
  "SpeedTarif": "📞"
}

export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>

      <div className={styles.tag}>
        <div className={styles.tagLine}></div>
        Mon parcours
      </div>
      <h2 className={styles.title}>Compétences & <span className={styles.highlight}>Expériences</span></h2>
      <p className={styles.subtitle}>Technologies maîtrisées et expériences professionnelles</p>

      <div className={styles.content}>

        <div className={styles.left}>
          <p className={styles.sectionLabel}>Technologies</p>
          <div className={styles.skills}>
            {skills.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <div className={styles.skillIcon}>
                  {icons[skill.title] || "💡"}
                </div>
                <span className={styles.skillName}>{skill.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.sectionLabel}>Historique</p>
          <div className={styles.timeline}>
            {history.map((item, id) => (
              <div key={id} className={styles.timelineItem}>
                <div className={styles.dot}>
                  {historyIcons[item.organisation] || "💼"}
                </div>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div>
                      <div className={styles.cardTitle}>{item.role}</div>
                      <div className={styles.cardOrg}>{item.organisation}</div>
                    </div>
                    <div className={styles.cardDate}>{item.startDate} — {item.endDate}</div>
                  </div>
                  <div className={styles.cardTags}>
                    {item.experiences.map((exp, i) => (
                      <span key={i} className={styles.cardTag}>{exp}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}