import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <Navbar />
      <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl">I’m a Full Stack Developer passionate about building web experiences.</p>
      </section>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
