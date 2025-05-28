import styles from './App.module.css'
import Hero from './components/Hero/Hero.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import About from './components/About/About.jsx';
import { Experience } from './components/Experience/Experience.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';
import Copyright from './components/Copyright/Copyright.jsx';


function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Copyright />
      


    </div>
  )
}

export default App;
