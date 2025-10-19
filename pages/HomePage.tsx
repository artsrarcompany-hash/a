
import React from 'react';
import CategoryCard from '../components/CategoryCard';
import ListingCard from '../components/ListingCard';
import type { Listing } from '../types';
import {
  SearchIcon,
  CarIcon,
  HomeIcon,
  BriefcaseIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  SparklesIcon
} from '../components/icons';

const categories = [
  { name: 'Cars', icon: <CarIcon className="h-10 w-10" /> },
  { name: 'Real Estate', icon: <HomeIcon className="h-10 w-10" /> },
  { name: 'Jobs', icon: <BriefcaseIcon className="h-10 w-10" /> },
  { name: 'Electronics', icon: <DevicePhoneMobileIcon className="h-10 w-10" /> },
  { name: 'Services', icon: <WrenchScrewdriverIcon className="h-10 w-10" /> },
  { name: 'Other', icon: <SparklesIcon className="h-10 w-10" /> },
];

const mockListings: Listing[] = [
    { id: 1, title: 'Audi A4 S-Line 2020', price: '€25,500', location: 'Riga', imageUrl: 'https://picsum.photos/seed/car1/400/300', isVerified: true, category: 'Cars' },
    { id: 2, title: 'Modern 2-room apartment in Center', price: '€650/mo', location: 'Riga', imageUrl: 'https://picsum.photos/seed/apt1/400/300', isVerified: true, category: 'Real Estate' },
    { id: 3, title: 'Senior Frontend Developer (React)', price: '€4,000+', location: 'Remote', imageUrl: 'https://picsum.photos/seed/job1/400/300', isVerified: false, category: 'Jobs' },
    { id: 4, title: 'iPhone 14 Pro Max', price: '€900', location: 'Jurmala', imageUrl: 'https://picsum.photos/seed/phone1/400/300', isVerified: true, category: 'Electronics' },
    { id: 5, title: 'VW Passat B8', price: '€16,000', location: 'Liepaja', imageUrl: 'https://picsum.photos/seed/car2/400/300', isVerified: false, category: 'Cars' },
    { id: 6, title: 'House for rent in Sigulda', price: '€1,200/mo', location: 'Sigulda', imageUrl: 'https://picsum.photos/seed/house1/400/300', isVerified: true, category: 'Real Estate' },
];

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-soft-blue-100 dark:bg-gray-800 rounded-xl animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">Find anything in Latvia.</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">The modern, simple, and trusted marketplace.</p>
        <div className="mt-8 max-w-2xl mx-auto relative px-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full pl-5 pr-12 py-4 rounded-full border-0 shadow-lg text-lg focus:ring-2 focus:ring-soft-blue-500 transition-shadow"
          />
          <button className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-soft-blue-600 text-white rounded-full hover:bg-soft-blue-500 transition-colors">
            <SearchIcon className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section style={{ animationDelay: '0.2s' }} className="animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Explore Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
          {categories.map((category) => (
            <CategoryCard key={category.name} name={category.name} icon={category.icon} />
          ))}
        </div>
      </section>

      {/* Newest Listings Section */}
      <section style={{ animationDelay: '0.4s' }} className="animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Newest Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {mockListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
