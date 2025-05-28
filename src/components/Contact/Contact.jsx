import React, { useState } from 'react';
import styles from '../Contact/Contact.module.css'

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Votre message a été envoyé !');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      };
  return (
    <footer id='contact' className={styles.container}>
       <h2 className={styles.title}>CONTACT</h2>
       <p  className={styles.paragraph}>Prêt(e) à transformer votre vision en application ? Je suis là pour vous accompagner !</p>
      <form onSubmit={handleSubmit}>
        <h2>Formulaire de Contact</h2>

        <div>
          <label htmlFor="firstName">Prénom:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Noms:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Objet:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Votre Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Envoyer</button>
    </form>
            <div className={styles.socials_medias}>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src="assets/contact/emailicon.png" alt="Email" />
                    <a href="mailto:ruchikimpolo@gmail.com" target="_blank">ruchikimpolo@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src="assets/contact/githubicon.png" alt="Github" />
                    <a href="https://github.com/" target="_blank">https://github.com/</a>
                </li>
                <li className={styles.link}>
                    <img src="assets/contact/linkedinicon.png" alt="Linkedin" />
                    <a href="https://fr.linkedin.com/" target="_blank">https://fr.linkedin.com/</a>
                </li>
            </ul>
            </div>
            
    </footer>
    
  )
}
