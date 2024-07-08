import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 md:block hidden">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <p>&copy; 2024 Zohaib's Blog</p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="https://www.facebook.com/zohaib.imtiaz.3994" target='blank' 
            className="text-gray-400 hover:text-gray-300 transition duration-300"
          >
            <FaFacebook className="h-6 w-6" />
          </Link>
          <Link
            to="/*"
            className="text-gray-400 hover:text-gray-300 transition duration-300"
          >
            <FaTwitter className="h-6 w-6" />
          </Link>
          <Link
            to="/*"
            className="text-gray-400 hover:text-gray-300 transition duration-300"
          >
            <FaInstagram className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
