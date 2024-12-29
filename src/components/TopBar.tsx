import React from 'react';
import { WeatherWidget } from './WeatherWidget';

export function TopBar() {
  return (
    <div className="bg-gray-100 py-2 fixed w-full top-0 z-40"> {/* Added fixed positioning */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {new Date().toLocaleDateString('sq-AL', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          <div className="w-64">
            <WeatherWidget />
          </div>
        </div>
      </div>
    </div>
  );
}