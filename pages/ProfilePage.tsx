import React, { useState } from 'react';
import ListingCard from '../components/ListingCard';
import type { User, Listing } from '../types';
import { CheckCircleIcon, LocationMarkerIcon, PencilIcon } from '../components/icons';

const mockUser: User = {
    name: 'Jānis Bērziņš',
    avatarUrl: 'https://picsum.photos/seed/user1/200/200',
    isVerified: true,
    memberSince: 'June 2023',
    location: 'Riga, Latvia',
    bio: 'Passionate about technology and classic cars. Here to find and sell quality items.'
};

const mockUserListings: Listing[] = [
    { id: 1, title: 'Audi A4 S-Line 2020', price: '€25,500', location: 'Riga', imageUrl: 'https://picsum.photos/seed/car1/400/300', isVerified: true, category: 'Cars' },
    { id: 4, title: 'iPhone 14 Pro Max', price: '€900', location: 'Jurmala', imageUrl: 'https://picsum.photos/seed/phone1/400/300', isVerified: true, category: 'Electronics' },
];

const mockMessages = [
    { id: 1, sender: 'Anna Ozola', message: 'Hi! Is the iPhone still available?', time: '2h ago', avatar: 'https://picsum.photos/seed/user2/100/100' },
    { id: 2, sender: 'Pēteris Kalniņš', message: 'Can you send more photos of the car?', time: 'Yesterday', avatar: 'https://picsum.photos/seed/user3/100/100' },
    { id: 3, sender: 'TARGO Support', message: 'Welcome to TARGO! Let us know if you need help.', time: '1w ago', avatar: 'https://picsum.photos/seed/targo/100/100' },
];


const ProfilePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('listings');

    const TabButton = ({ id, label }: { id: string, label: string }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTab === id
                    ? 'bg-soft-blue-600 text-white shadow-sm'
                    : 'text-gray-500 hover:bg-soft-blue-100 dark:hover:bg-gray-700'
            }`}
        >
            {label}
        </button>
    );

    return (
        <div className="max-w-6xl mx-auto animate-fade-in-up">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                    <img src={mockUser.avatarUrl} alt={mockUser.name} className="w-32 h-32 rounded-full ring-4 ring-soft-blue-200 dark:ring-soft-blue-500/50" />
                    <div className="sm:ml-8 mt-4 sm:mt-0 flex-grow">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{mockUser.name}</h1>
                             <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                                <PencilIcon className="w-4 h-4" /> Edit Profile
                            </button>
                        </div>

                        {mockUser.isVerified && (
                            <div className="mt-2 flex items-center justify-center sm:justify-start text-green-500">
                                <CheckCircleIcon className="w-6 h-6" />
                                <span className="ml-1 font-semibold">Verified User</span>
                            </div>
                        )}
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Member since {mockUser.memberSince}</p>
                         <p className="mt-1 text-gray-500 dark:text-gray-400 flex items-center justify-center sm:justify-start">
                            <LocationMarkerIcon className="w-5 h-5 mr-1" />
                            {mockUser.location}
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-lg">{mockUser.bio}</p>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="flex space-x-2">
                        <TabButton id="listings" label="My Listings" />
                        <TabButton id="messages" label="Messages" />
                        <TabButton id="settings" label="Settings" />
                    </div>
                    <div className="mt-6">
                        {activeTab === 'listings' && (
                            <div className="animate-fade-in-up">
                                <h2 className="text-xl font-semibold mb-4">Your active ads</h2>
                                {mockUserListings.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {mockUserListings.map(listing => <ListingCard key={listing.id} listing={listing} />)}
                                    </div>
                                ) : (
                                    <p className="text-gray-500">You have no active listings.</p>
                                )}
                            </div>
                        )}
                        {activeTab === 'messages' && (
                           <div className="animate-fade-in-up">
                                <h2 className="text-xl font-semibold mb-4">Messages</h2>
                                <div className="space-y-4">
                                    {mockMessages.map(msg => (
                                        <div key={msg.id} className="flex items-start p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                                            <img src={msg.avatar} alt={msg.sender} className="w-12 h-12 rounded-full" />
                                            <div className="ml-4 flex-grow">
                                                <div className="flex justify-between items-center">
                                                    <p className="font-bold text-gray-800 dark:text-gray-100">{msg.sender}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{msg.time}</p>
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-300 truncate">{msg.message}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeTab === 'settings' && (
                            <div className="animate-fade-in-up">
                                <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                                <div className="max-w-lg space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                                        <input type="text" id="name" defaultValue={mockUser.name} className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm focus:ring-soft-blue-500 focus:border-soft-blue-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                        <input type="email" id="email" defaultValue="janis.berzins@example.com" className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm focus:ring-soft-blue-500 focus:border-soft-blue-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
                                        <textarea id="bio" rows={3} defaultValue={mockUser.bio} className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm focus:ring-soft-blue-500 focus:border-soft-blue-500"></textarea>
                                    </div>
                                    <div className="pt-2">
                                        <button type="submit" className="px-6 py-2 bg-soft-blue-600 text-white rounded-full text-sm font-semibold hover:bg-soft-blue-500 shadow-sm transition-colors">
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;