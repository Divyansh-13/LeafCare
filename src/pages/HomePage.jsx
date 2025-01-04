import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import HowToUse from '../components/HowToUse';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow overflow-x-hidden"> 
        <section className="hero-section bg-green-100 h-screen relative flex items-center justify-end pr-16">
          <img
            src="/Leaf3.jpg" 
            alt="Healthy leaf background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-center bg-white bg-opacity-60 p-8 rounded-md w-3/4 max-w-2xl mt-64">
            <h1 className="text-4xl font-bold text-green-600 mb-4">
              Discover leaf health at a glance
            </h1>
            <p className="text-lg text-black mb-8">
              Our advanced leaf disease detection technology helps you identify various leaf conditions.
            </p>
            <Link to="/result" className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition-colors duration-300">
              Analyze a Leaf
            </Link>
          </div>
        </section>
        <About />
        <HowToUse />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;