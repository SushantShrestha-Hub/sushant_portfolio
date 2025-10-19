import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/') // Your backend route
      .then(res => res.text())
      .then(data => setBackendMessage(data))
      .catch(err => console.error('Error connecting to backend:', err));
  }, []);

  return (
    <div>
      <Navbar />
      <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-4">I’m a Full Stack Developer passionate about building web experiences.</p>
        <p className="text-green-400">Backend says: {backendMessage}</p>
      </section>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
