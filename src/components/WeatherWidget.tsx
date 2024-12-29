import React from 'react';
import { Cloud, Sun, Thermometer } from 'lucide-react';

export function WeatherWidget() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg">Peshkopi</h3>
          <div className="flex items-center mt-1">
            <Thermometer className="h-4 w-4 mr-1" />
            <span>12°C</span>
          </div>
        </div>
        <Sun className="h-10 w-10" />
      </div>
      <div className="mt-4 text-sm">
        <div className="flex items-center justify-between">
          <span>Lagështia: 65%</span>
          <span>Era: 8 km/h</span>
        </div>
      </div>
    </div>
  );
}