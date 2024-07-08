import React, { useState } from 'react';
import { FaHome, FaBlog, FaBars, FaTimes, FaTachometerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { RiAdminLine } from "react-icons/ri";
import { json, Link } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import SearchDialog from '../searchDialog/SearchDialog';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const admin = localStorage.getItem('admin')
  return (
    <>
      <header className="bg-gradient-to-r from-gray-900 to-black text-white p-6 shadow-md md:flex md:justify-between md:items-center hidden">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div 
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Zohaib's Blog
          </motion.div>
          <nav className="hidden md:flex space-x-4">
            <Link to={'/'} >
              <motion.a 
                className="flex items-center hover:text-yellow-300 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <FaHome className="mr-1" /> Home
              </motion.a>
            </Link>
            <Link to={'/allblogs'} >
              <motion.a 
                className="flex items-center hover:text-yellow-300 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <FaBlog className="mr-1" /> Blog
              </motion.a>
            </Link>
            {!admin
            ?
            <Link to={'/adminlogin'} >
              <motion.a 
                className="flex items-center hover:text-yellow-300 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <RiAdminLine className="mr-1" /> Admin Login
              </motion.a>
            </Link>
            :
            ""
            }


            <Link to={'/dashboard'} >
              <motion.a 
                className="flex items-center hover:text-yellow-300 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <FaTachometerAlt className="mr-1" /> Dashboard
              </motion.a>
            </Link>
              
            
          </nav>
        </div>
      </header>
      <div className="fixed bottom-0 w-full bg-gradient-to-r from-gray-900 to-black text-white p-3 shadow-md flex justify-around items-center md:hidden">
        <Link to={'/'}>
          <FaHome className="h-6 w-6" />
        </Link>
        <Link to={'/allblogs'}>
          <FaBlog className="h-6 w-6" />
        </Link>
        {!admin
        ?
        <Link to={'/adminlogin'}>
          <RiAdminLine className="h-6 w-6" />
        </Link>
        : ""
        }

        <Link to={'/dashboard'}>
          <FaTachometerAlt className="h-6 w-6" />
        </Link>
      </div>
    </>
  );
};

export default Header;
