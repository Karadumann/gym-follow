'use client';

import { useState } from 'react';
import { Exercise } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

const initialExercises: Exercise[] = [
  {
    id: 'bench-press',
    name: 'Bench Press',
    description: 'Yatay bench üzerinde yapılan göğüs egzersizi',
    icon: '/exercises/bench-press.png'
  },
  {
    id: 'squat',
    name: 'Squat',
    description: 'Bacak kaslarını çalıştıran temel egzersiz',
    icon: '/exercises/squat.png'
  },
  {
    id: 'deadlift',
    name: 'Deadlift',
    description: 'Sırt kaslarını çalıştıran temel egzersiz',
    icon: '/exercises/deadlift.png'
  },
  {
    id: 'overhead-press',
    name: 'Overhead Press',
    description: 'Omuz kaslarını çalıştıran temel egzersiz',
    icon: '/exercises/overhead-press.png'
  },
  {
    id: 'barbell-row',
    name: 'Barbell Row',
    description: 'Sırt kaslarını çalıştıran temel egzersiz',
    icon: '/exercises/barbell-row.png'
  }
];

export default function ExercisesPage() {
  const [exercises] = useState<Exercise[]>(initialExercises);

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="bg-blue-600 text-white p-4 rounded-lg shadow-lg mb-6">
        <h1 className="text-2xl font-bold">Egzersizler</h1>
      </nav>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-4">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={exercise.icon}
                  alt={exercise.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{exercise.name}</h2>
              <p className="text-gray-600">{exercise.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex justify-around max-w-md mx-auto">
          <a href="/" className="text-gray-600 hover:text-blue-600">
            <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs">Ana Sayfa</span>
          </a>
          <a href="/exercises" className="text-blue-600">
            <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-xs">Egzersizler</span>
          </a>
          <a href="/workouts" className="text-gray-600 hover:text-blue-600">
            <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="text-xs">Programlar</span>
          </a>
        </div>
      </nav>
    </div>
  );
} 