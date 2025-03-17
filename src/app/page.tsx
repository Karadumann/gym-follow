'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              GymFollow
            </Link>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/exercises" className="text-gray-600 hover:text-blue-600">
                Egzersizler
              </Link>
              <Link href="/workouts" className="text-gray-600 hover:text-blue-600">
                Antrenmanlar
              </Link>
              <Link href="/progress" className="text-gray-600 hover:text-blue-600">
                İlerleme
              </Link>
            </div>
          </div>
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <Link
                href="/exercises"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Egzersizler
              </Link>
              <Link
                href="/workouts"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Antrenmanlar
              </Link>
              <Link
                href="/progress"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                İlerleme
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Kalistenik Antrenman Takibi
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Vücut ağırlığıyla yapılan egzersizleri takip edin, ilerlemenizi görün ve hedeflerinize ulaşın.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/exercises"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Egzersizleri Keşfet
            </Link>
            <Link
              href="/workouts"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Antrenman Programları
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-blue-600 mb-4">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Detaylı Egzersiz Bilgisi</h3>
            <p className="text-gray-600">
              Her egzersiz için detaylı açıklamalar, form ipuçları ve progresyon adımları.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-blue-600 mb-4">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Program Takibi</h3>
            <p className="text-gray-600">
              Özelleştirilmiş antrenman programları ve günlük egzersiz planları.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-blue-600 mb-4">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">İlerleme Analizi</h3>
            <p className="text-gray-600">
              Performansınızı takip edin ve gelişiminizi grafiklerle görün.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
