import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-dark-900 min-h-screen">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark-900 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }}
              className="flex flex-col items-center gap-4"
            >
              <div className="text-6xl">🐸</div>
              <div className="h-1 w-48 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                  className="h-full w-full bg-frog"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Services />
            <Achievements />
            <Contact />
            <Footer />

            {/* Scroll to Top */}
            <ScrollToTop />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-10 h-10 md:w-12 md:h-12 bg-frog text-white rounded-full flex items-center justify-center shadow-lg shadow-frog/20 hover:bg-frog-dark transition-colors"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default App;
