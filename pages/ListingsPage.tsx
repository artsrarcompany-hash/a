import React, { useState } from 'react';
import ListingCard from '../components/ListingCard';
import type { Listing } from '../types';
import { AdjustmentsIcon, MapIcon, ViewGridIcon, ViewListIcon } from '../components/icons';

const mockListings: Listing[] = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Listing Item #${i + 1}`,
    price: `€${(Math.random() * 50000).toFixed(0)}`,
    location: ['Riga', 'Jurmala', 'Liepaja', 'Daugavpils'][i % 4],
    imageUrl: `https://picsum.photos/seed/listing${i + 1}/400/300`,
    isVerified: Math.random() > 0.5,
    category: ['Cars', 'Real Estate', 'Electronics'][i % 3]
}));

const ListingsPage: React.FC = () => {
    const [view, setView] = useState<'grid' | 'list'>('grid');

    const handlePaginationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        // In a real application, this would also trigger fetching new page data.
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="w-full lg:w-1/4 animate-fade-in-up">
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md sticky top-24">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <AdjustmentsIcon className="w-6 h-6 text-soft-blue-600 dark:text-soft-blue-500" />
                        Smart Filters
                    </h2>
                    <div className="mt-6 space-y-4">
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                            <select id="category" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-soft-blue-500 focus:border-soft-blue-500 sm:text-sm rounded-md">
                                <option>All Categories</option>
                                <option>Cars</option>
                                <option>Real Estate</option>
                                <option>Jobs</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="price-min" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price Range</label>
                            <div className="flex items-center gap-2 mt-1">
                                <input type="number" placeholder="Min" className="w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm" />
                                <span>-</span>
                                <input type="number" placeholder="Max" className="w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
                            <input id="location" type="text" placeholder="e.g., Riga" className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm" />
                        </div>
                        <div className="flex items-center">
                            <input id="verified" type="checkbox" className="h-4 w-4 text-soft-blue-600 border-gray-300 rounded focus:ring-soft-blue-500" />
                            <label htmlFor="verified" className="ml-2 block text-sm text-gray-900 dark:text-gray-200">Verified Users Only</label>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="w-full lg:w-3/4">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Explore Listings</h1>
                    <div className="flex items-center gap-2 mt-4 sm:mt-0">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-full text-sm font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600">
                            <MapIcon className="w-5 h-5" /> Map View
                        </button>
                        <button onClick={() => setView('grid')} className={`p-2 rounded-full ${view === 'grid' ? 'bg-soft-blue-100 dark:bg-gray-700 text-soft-blue-600' : 'text-gray-500'}`}>
                            <ViewGridIcon className="w-5 h-5" />
                        </button>
                        <button onClick={() => setView('list')} className={`p-2 rounded-full ${view === 'list' ? 'bg-soft-blue-100 dark:bg-gray-700 text-soft-blue-600' : 'text-gray-500'}`}>
                           <ViewListIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className={`grid gap-6 ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                    {mockListings.map((listing, index) => (
                         <div key={listing.id} style={{ animationDelay: `${index * 50}ms` }}>
                             <ListingCard listing={listing} />
                         </div>
                    ))}
                </div>
                {/* Pagination Placeholder */}
                <div className="flex justify-center mt-8">
                     <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                        <a href="#" onClick={handlePaginationClick} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 hover:bg-gray-50">Previous</a>
                        <a href="#" onClick={handlePaginationClick} className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-soft-blue-500 text-white text-sm font-medium">1</a>
                        <a href="#" onClick={handlePaginationClick} className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 hover:bg-gray-50">2</a>
                        <a href="#" onClick={handlePaginationClick} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 hover:bg-gray-50">Next</a>
                    </nav>
                </div>
            </main>
        </div>
    );
};

export default ListingsPage;