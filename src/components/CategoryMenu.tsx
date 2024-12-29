import React from 'react';
import { Newspaper, Building2, Music, Users, LandPlot, Trophy } from 'lucide-react';

const categories = [
  { name: 'Blog', icon: Newspaper, href: '#blog' },
  { name: 'Biznes', icon: Building2, href: '#biznes' },
  { name: 'Muzikë', icon: Music, href: '#muzike' },
  { name: 'Rinia', icon: Users, href: '#rinia' },
  { name: 'Politikë', icon: LandPlot, href: '#politike' },
  { name: 'Sport', icon: Trophy, href: '#sport' },
];

export function CategoryMenu() {
  return (
    <section className="bg-gray-50 py-8 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <category.icon className="h-5 w-5 text-red-700 mr-2" />
              <span className="font-medium">{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}