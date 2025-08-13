
import React from 'react';
import { Breadcrumb } from './Breadcrumb';

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b-2 border-gray-200">
      <div>
        <Breadcrumb />
      </div>
      <div className="flex items-center">
        <span className="text-gray-600 mr-4">Admin User</span>
        <div className="relative">
            <img className="h-10 w-10 rounded-full object-cover" src="https://picsum.photos/100/100" alt="User" />
        </div>
      </div>
    </header>
  );
};
