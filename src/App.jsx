import React, { useRef } from 'react'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/MyProjects/Projects';


function App() {

  const projectRef = useRef(null);

  return (
    <>
      <Header />
      <Hero projectRef={projectRef} />
      <About />
      <Skills />
      <Projects projectRef={projectRef} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;