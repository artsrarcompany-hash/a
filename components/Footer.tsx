
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-xl font-bold text-soft-blue-600 dark:text-soft-blue-500">TARGO</h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">A modern marketplace for honest trade in Latvia.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Home</Link></li>
              <li><Link to="/listings" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Listings</Link></li>
              <li><Link to="/about" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/contact" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</Link></li>
              <li><Link to="/about" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Trust & Safety</Link></li>
              <li><Link to="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 flex items-center justify-between">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} TARGO. All rights reserved.</p>
          <div className="flex space-x-6">
            {/* Placeholder for social icons */}
            <a href="#" className="text-gray-400 hover:text-gray-500">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-gray-500">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-gray-500">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
