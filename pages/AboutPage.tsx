
import React from 'react';
import { CheckCircleIcon, UserCircleIcon, SparklesIcon } from '../components/icons';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white">
                A modern marketplace for honest trade in Latvia.
            </h1>
            <p className="mt-6 text-lg text-center text-gray-600 dark:text-gray-300">
                Welcome to TARGO, the next-generation online marketplace built on principles of simplicity, security, and transparency. Our mission is to create a trusted environment where Latvians can buy, sell, and connect with confidence.
            </p>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center p-6 bg-soft-blue-100/50 dark:bg-gray-700/50 rounded-lg">
                    <div className="p-3 bg-soft-blue-200 dark:bg-soft-blue-500/30 rounded-full">
                        <CheckCircleIcon className="w-8 h-8 text-soft-blue-600 dark:text-soft-blue-400" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold">Trust & Safety</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">With features like user verification and secure chat, we prioritize your safety in every transaction.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-soft-blue-100/50 dark:bg-gray-700/50 rounded-lg">
                     <div className="p-3 bg-soft-blue-200 dark:bg-soft-blue-500/30 rounded-full">
                        <SparklesIcon className="w-8 h-8 text-soft-blue-600 dark:text-soft-blue-400" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold">Modern Experience</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">A clean, fast, and mobile-friendly design that makes finding what you need a pleasure, not a chore.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-soft-blue-100/50 dark:bg-gray-700/50 rounded-lg">
                     <div className="p-3 bg-soft-blue-200 dark:bg-soft-blue-500/30 rounded-full">
                        <UserCircleIcon className="w-8 h-8 text-soft-blue-600 dark:text-soft-blue-400" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold">Community Focused</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Built for Latvia, with multi-language support and features tailored to our local community's needs.</p>
                </div>
            </div>

            <div className="mt-12 text-center">
                 <h2 className="text-3xl font-bold">Join Us</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                    Whether you're decluttering your home, searching for your next car, or looking for a new job, TARGO is here to help. Become part of a community that values honest and straightforward trade.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
