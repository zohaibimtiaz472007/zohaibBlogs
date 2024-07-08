import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Zohaib's Blog
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Insights, stories, and ideas from the world of web development.
        </motion.p>

        <Link to={'/allblogs'} >
        
        <motion.a
          className="bg-yellow-300 text-black px-6 py-3 rounded-full text-lg font-bold hover:bg-yellow-400 transition duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          >
          Read More
        </motion.a>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
