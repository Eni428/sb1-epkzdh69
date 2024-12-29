import React from 'react';
import { BookOpen, Clock } from 'lucide-react';

interface HeritageArticle {
  title: string;
  period: string;
  image: string;
  summary: string;
}

const heritageArticles: HeritageArticle[] = [
  {
    title: "Historia e Doganës dhe Pikës Kufitare në Bllatë",
    period: "1912-2024",
    image: "https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    summary: "Zbuloni historinë e pikës kufitare në Bllatë, një dëshmi e rëndësishme e marrëdhënieve ndërkufitare."
  },
  {
    title: "Traditat dhe Zakonet e Dibrës",
    period: "Traditë shekullore",
    image: "https://images.unsplash.com/photo-1590005354167-6da97870c757?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    summary: "Një vështrim në thesarin e pasur kulturor të Dibrës, duke përfshirë këngët, vallet dhe zakonet tradicionale."
  }
];

export function HeritageSection() {
  return (
    <section id="vendlindja" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Vendlindja Jonë</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {heritageArticles.map((article, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{article.period}</span>
                </div>
                <p className="text-gray-600">{article.summary}</p>
                <button className="mt-4 text-red-700 hover:text-red-800 font-medium flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Lexo historinë →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}