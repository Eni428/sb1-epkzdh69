import React from 'react';
import { Smartphone, AlertTriangle, CheckCircle } from 'lucide-react';

export function AppPromotion() {
  return (
    <section className="bg-red-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Shkarkoni Aplikacionin DibraON</h2>
            <p className="text-lg mb-6">
              Raportoni probleme, ndiqni lajmet dhe kontribuoni në komunitetin tonë përmes aplikacionit tonë të ri.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 flex-shrink-0" />
                <span>Raportoni probleme infrastrukturore</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 flex-shrink-0" />
                <span>Ndiqni statusin e raportimeve tuaja</span>
              </div>
            </div>
            <div className="mt-8 flex space-x-4">
              <a href="#" className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold flex items-center">
                <Smartphone className="h-5 w-5 mr-2" />
                Shkarko për iOS
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="DibraON App" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}