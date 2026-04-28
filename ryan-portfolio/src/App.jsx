import { lazy, Suspense } from 'react'
import styles from './App.module.css'
import { NavBar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'
import { Passions } from './components/Passions/Passions'
import { Contact } from './components/Contact/Contact'

const BackgroundScene = lazy(() => import('./components/BackgroundScene/BackgroundScene'))

function App() {

  return (
    <div className={styles.App}>
      <Suspense fallback={null}>
        <BackgroundScene />
      </Suspense>
      <div className={styles.content}>
        <NavBar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Passions />
        <Contact />
      </div>
    </div>
  )
}

export default App
