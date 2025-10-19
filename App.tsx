import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import PostAdPage from './pages/PostAdPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import useDarkMode from './hooks/useDarkMode';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <Header colorTheme={colorTheme} setTheme={setTheme} />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listings" element={<ListingsPage />} />
            <Route path="/post-ad" element={<PostAdPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;