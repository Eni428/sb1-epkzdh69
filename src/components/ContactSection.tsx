import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="kontakt" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Na Ndiqni</h2>
          <p className="mt-2 text-gray-600">Qëndroni të informuar përmes rrjeteve tona sociale</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a
            href="https://facebook.com/dibraon"
            className="flex items-center justify-center p-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <Facebook className="h-6 w-6 mr-2" />
            <span>Facebook</span>
          </a>

          <a
            href="https://instagram.com/dibraon"
            className="flex items-center justify-center p-6 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
          >
            <Instagram className="h-6 w-6 mr-2" />
            <span>Instagram</span>
          </a>

          <a
            href="https://youtube.com/@dibraon"
            className="flex items-center justify-center p-6 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            <Youtube className="h-6 w-6 mr-2" />
            <span>YouTube</span>
          </a>

          <a
            href="mailto:info@dibraon.com"
            className="flex items-center justify-center p-6 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          >
            <Mail className="h-6 w-6 mr-2" />
            <span>Email</span>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Phone className="h-5 w-5 mr-2 text-red-700" />
              Na Kontaktoni
            </h3>
            <p className="text-gray-600">+355 69 XX XX XXX</p>
            <p className="text-gray-600">info@dibraon.com</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-red-700" />
              Zyra Jonë
            </h3>
            <p className="text-gray-600">Bulevardi Elez Isufi</p>
            <p className="text-gray-600">Peshkopi, Dibër, Shqipëri</p>
          </div>
        </div>
      </div>
    </section>
  );
}