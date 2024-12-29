import React, { useState } from 'react';
import { AlertCircle, Camera, MapPin, Send } from 'lucide-react';

export function ReportForm() {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: '',
    image: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="raporto" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <AlertCircle className="h-12 w-12 text-red-700 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">Raportoni një Problem</h2>
          <p className="mt-2 text-gray-600">Ndani me ne çdo problem që hasni në komunitetin tonë</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Titulli i Problemit
              </label>
              <input
                type="text"
                id="title"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Vendndodhja
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50">
                  <MapPin className="h-4 w-4 text-gray-400" />
                </span>
                <input
                  type="text"
                  id="location"
                  className="flex-1 block w-full rounded-none rounded-r-md border border-gray-300 px-3 py-2"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Përshkrimi i Problemit
              </label>
              <textarea
                id="description"
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Foto</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <Camera className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="image" className="relative cursor-pointer bg-white rounded-md font-medium text-red-700 hover:text-red-800">
                      <span>Ngarko një foto</span>
                      <input
                        id="image"
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={(e) => setFormData({ ...formData, image: e.target.files?.[0] || null })}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800"
            >
              <Send className="h-4 w-4 mr-2" />
              Dërgo Raportin
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}