import React from 'react';
import { MapPin, Star } from 'lucide-react';

interface TouristSpot {
  name: string;
  location: string;
  image: string;
  description: string;
  rating: number;
}

const touristSpots: TouristSpot[] = [
  {
    name: "Oda Tradicionale në Vasije",
    location: "Vasije, Dibër",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Përjetoni ushqimin tradicional organik dhe mikpritjen dibrane në një ambient autentik.",
    rating: 4.8
  },
  {
    name: "Parku Kombëtar i Lurës",
    location: "Lurë, Dibër",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Zbuloni bukurinë natyrore të liqeneve akullnajore dhe pyjeve të virgjëra të Lurës.",
    rating: 4.9
  }
];

export function TourismSection() {
  return (
    <section id="turistike" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Dibra Turistike</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {touristSpots.map((spot, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={spot.image} alt={spot.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{spot.name}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{spot.location}</span>
                  <div className="ml-4 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{spot.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600">{spot.description}</p>
                <button className="mt-4 text-red-700 hover:text-red-800 font-medium">
                  Zbulo më shumë →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}