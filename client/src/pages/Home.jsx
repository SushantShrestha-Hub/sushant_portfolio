import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl">I’m a Full Stack Developer passionate about building web experiences.</p>
      </section>
    </div>
  );
};

export default Home;
