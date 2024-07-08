// src/components/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-2xl text-gray-600">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <FaHome className="mr-2" />
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NoPage
