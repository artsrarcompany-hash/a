
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in-up">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Get in Touch</h1>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          Have a question or need support? Fill out the form below and our team will get back to you as soon as possible.
        </p>

        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm focus:ring-soft-blue-500 focus:border-soft-blue-500"
              placeholder="Jānis Bērziņš"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm focus:ring-soft-blue-500 focus:border-soft-blue-500"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
            <input
              type="text"
              id="subject"
              className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm focus:ring-soft-blue-500 focus:border-soft-blue-500"
              placeholder="How can we help?"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              rows={5}
              className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm focus:ring-soft-blue-500 focus:border-soft-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-soft-blue-600 hover:bg-soft-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-soft-blue-500 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
