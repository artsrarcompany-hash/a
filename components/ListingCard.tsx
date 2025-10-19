
import React from 'react';
import type { Listing } from '../types';
import { LocationMarkerIcon, CheckCircleIcon } from './icons';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in-up">
      <div className="relative">
        <img className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" src={listing.imageUrl} alt={listing.title} />
        {listing.isVerified && (
          <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-700/90 p-1 rounded-full flex items-center text-green-500">
            <CheckCircleIcon className="h-5 w-5" />
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-sm font-semibold text-soft-blue-600 dark:text-soft-blue-500">{listing.category.toUpperCase()}</p>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1 truncate">{listing.title}</h3>
        <p className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 mt-2">{listing.price}</p>
        <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2">
          <LocationMarkerIcon className="h-5 w-5 mr-1" />
          <span>{listing.location}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
