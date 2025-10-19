
import React from 'react';

interface CategoryCardProps {
  icon: React.ReactNode;
  name: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, name }) => {
  return (
    <div className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      <div className="text-soft-blue-600 dark:text-soft-blue-500 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <p className="mt-4 text-center font-semibold text-gray-700 dark:text-gray-200">{name}</p>
    </div>
  );
};

export default CategoryCard;
