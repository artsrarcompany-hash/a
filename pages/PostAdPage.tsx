
import React, { useState } from 'react';
import { UploadIcon } from '../components/icons';

const PostAdPage: React.FC = () => {
    const [step, setStep] = useState(1);
    
    const nextStep = () => setStep(s => Math.min(s + 1, 3));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));
    
    const StepIndicator = ({ num, title, active }: { num: number, title: string, active: boolean }) => (
        <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${active ? 'bg-soft-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
                {num}
            </div>
            <span className={`ml-3 font-medium ${active ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>{title}</span>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4">Create Your Listing</h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Post your ad in just a few simple steps.</p>

            <div className="flex justify-between items-center mb-12 px-4">
                <StepIndicator num={1} title="Details" active={step >= 1} />
                <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700 mx-4"></div>
                <StepIndicator num={2} title="Photos & Price" active={step >= 2} />
                <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700 mx-4"></div>
                <StepIndicator num={3} title="Review" active={step >= 3} />
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                {step === 1 && (
                    <div className="space-y-6 animate-fade-in-up">
                        <h2 className="text-2xl font-semibold">Listing Details</h2>
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Ad Title</label>
                            <input type="text" id="title" placeholder="e.g., Almost new iPhone 14 Pro" className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm focus:ring-soft-blue-500 focus:border-soft-blue-500" />
                        </div>
                        <div>
                             <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                            <select id="category" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-soft-blue-500 focus:border-soft-blue-500 sm:text-sm rounded-md">
                                <option>Select a category...</option>
                                <option>Cars</option>
                                <option>Real Estate</option>
                                <option>Jobs</option>
                                <option>Electronics</option>
                            </select>
                        </div>
                        <div>
                             <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                             <textarea id="description" rows={6} placeholder="Describe your item in detail..." className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm focus:ring-soft-blue-500 focus:border-soft-blue-500"></textarea>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div className="space-y-6 animate-fade-in-up">
                        <h2 className="text-2xl font-semibold">Photos & Price</h2>
                         <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Photos</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                                    <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-soft-blue-600 hover:text-soft-blue-500 focus-within:outline-none">
                                            <span>Upload files</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div>
                             <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price (€)</label>
                            <input type="number" id="price" placeholder="Enter price" className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm focus:ring-soft-blue-500 focus:border-soft-blue-500" />
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div className="animate-fade-in-up text-center">
                        <h2 className="text-2xl font-semibold">Review & Submit</h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">You're all set! Review your ad details on the next page before it goes live.</p>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Ready to post?</p>
                    </div>
                )}
                <div className="flex justify-between mt-8">
                    <button onClick={prevStep} disabled={step === 1} className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
                        Back
                    </button>
                     {step < 3 ? (
                        <button onClick={nextStep} className="px-6 py-2 bg-soft-blue-600 text-white rounded-full text-sm font-semibold hover:bg-soft-blue-500 shadow-sm">
                            Next
                        </button>
                    ) : (
                        <button className="px-6 py-2 bg-green-600 text-white rounded-full text-sm font-semibold hover:bg-green-500 shadow-sm">
                            Submit Ad
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostAdPage;
