import React from 'react';
import { Calendar, User } from 'lucide-react';

interface NewsItem {
  title: string;
  date: string;
  author: string;
  image: string;
  summary: string;
}

const latestNews: NewsItem[] = [
  {
    title: "Altin Dumani nderohet nga Departamenti Amerikan i Shtetit",
    date: "2024-03-10",
    author: "DibraON",
    image: "https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    summary: "Prokuror Altin Dumani u nderua si kampion global kundër korrupsionit nga Departamenti Amerikan i Shtetit për vitin 2024."
  },
  {
    title: "Ndriçimi festiv në Peshkopi",
    date: "2024-03-08",
    author: "DibraON",
    image: "https://images.unsplash.com/photo-1545048702-79362596cdc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    summary: "Qyteti i Peshkopisë vishet me ndriçim festiv, duke krijuar një atmosferë magjike për banorët dhe vizitorët."
  }
];

export function NewsSection() {
  return (
    <section id="aktualitet" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Aktualitet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestNews.map((news, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{news.title}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{news.date}</span>
                  <User className="h-4 w-4 ml-4 mr-2" />
                  <span>{news.author}</span>
                </div>
                <p className="text-gray-600">{news.summary}</p>
                <button className="mt-4 text-red-700 hover:text-red-800 font-medium">
                  Lexo më shumë →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}