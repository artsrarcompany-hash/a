
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SunIcon, MoonIcon, GlobeAltIcon, UserCircleIcon, MenuIcon, XIcon } from './icons';

interface HeaderProps {
    colorTheme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
}

const Header: React.FC<HeaderProps> = ({ colorTheme, setTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-soft-blue-100 dark:bg-gray-700 text-soft-blue-600 dark:text-white' : 'text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`;
    
    return (
        <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-soft-blue-600 dark:text-soft-blue-500">
                            TARGO
                        </Link>
                        <nav className="hidden md:ml-10 md:flex md:space-x-4">
                            <NavLink to="/listings" className={navLinkClass}>Listings</NavLink>
                            <NavLink to="/about" className={navLinkClass}>About</NavLink>
                            <NavLink to="/contact" className={navLinkClass}>Support</NavLink>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <button onClick={() => setIsLangOpen(!isLangOpen)} className="p-2 rounded-full text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <GlobeAltIcon className="h-6 w-6" />
                            </button>
                            {isLangOpen && (
                                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Latviešu</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Русский</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">English</a>
                                </div>
                            )}
                        </div>
                         <button onClick={() => setTheme(colorTheme)} className="p-2 rounded-full text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                            {colorTheme === 'light' ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                        </button>
                         <Link to="/post-ad" className="hidden sm:inline-block bg-soft-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-soft-blue-500 transition-all shadow-sm">
                            Post an Ad
                        </Link>
                         <Link to="/profile" className="p-2 rounded-full text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <UserCircleIcon className="h-6 w-6" />
                        </Link>
                        <div className="md:hidden">
                             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-500 dark:text-gray-300">
                                {isMenuOpen ? <XIcon className="h-6 w-6"/> : <MenuIcon className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
             {isMenuOpen && (
                <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <NavLink to="/listings" className={navLinkClass} onClick={()=> setIsMenuOpen(false)}>Listings</NavLink>
                    <NavLink to="/about" className={navLinkClass} onClick={()=> setIsMenuOpen(false)}>About</NavLink>
                    <NavLink to="/contact" className={navLinkClass} onClick={()=> setIsMenuOpen(false)}>Support</NavLink>
                    <Link to="/post-ad" className="block w-full text-left bg-soft-blue-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-soft-blue-500" onClick={()=> setIsMenuOpen(false)}>
                        Post an Ad
                    </Link>
                </div>
            )}
        </header>
    )
};

export default Header;
