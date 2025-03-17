'use client';

import { useState } from 'react';
import { WorkoutProgram } from '../../types';
import Link from 'next/link';

const initialWorkoutPrograms: WorkoutProgram[] = [
  {
    id: '1',
    name: 'Başlangıç Seviyesi Tam Vücut',
    description: 'Yeni başlayanlar için temel hareketleri içeren tam vücut antrenman programı.',
    level: 'beginner',
    duration: '8 hafta',
    frequency: 'Haftada 3 gün',
    exercises: [
      { exerciseId: '1', sets: 3, reps: 10, rest: '90 saniye' },
      { exerciseId: '2', sets: 3, reps: 12, rest: '90 saniye' },
      { exerciseId: '3', sets: 3, reps: 8, rest: '120 saniye' }
    ]
  },
  {
    id: '2',
    name: 'Orta Seviye Bölünmüş Program',
    description: 'Vücut bölümlerini ayrı günlerde çalıştıran orta seviye program.',
    level: 'intermediate',
    duration: '12 hafta',
    frequency: 'Haftada 4 gün',
    exercises: [
      { exerciseId: '1', sets: 4, reps: 8, rest: '60 saniye' },
      { exerciseId: '2', sets: 4, reps: 10, rest: '90 saniye' },
      { exerciseId: '3', sets: 4, reps: 6, rest: '120 saniye' }
    ]
  },
  {
    id: '3',
    name: 'İleri Seviye Güç Programı',
    description: 'Güç ve kas kütlesi geliştirmeye odaklanan ileri seviye program.',
    level: 'advanced',
    duration: '16 hafta',
    frequency: 'Haftada 5 gün',
    exercises: [
      { exerciseId: '1', sets: 5, reps: 5, rest: '180 saniye' },
      { exerciseId: '2', sets: 5, reps: 5, rest: '180 saniye' },
      { exerciseId: '3', sets: 5, reps: 3, rest: '240 saniye' }
    ]
  }
];

export default function WorkoutsPage() {
  const [workoutPrograms] = useState<WorkoutProgram[]>(initialWorkoutPrograms);

  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="bg-blue-600 text-white p-4 rounded-lg mb-6">
        <h1 className="text-xl font-bold">Antrenman Programları</h1>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workoutPrograms.map((program) => (
          <div key={program.id} className="card hover:shadow-lg transition-shadow duration-200">
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{program.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{program.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded text-xs">
                  {program.level}
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded text-xs">
                  {program.duration}
                </span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded text-xs">
                  {program.frequency}
                </span>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Egzersizler:</h3>
                <ul className="space-y-2">
                  {program.exercises.map((exercise, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-300">
                      • {exercise.sets} set x {exercise.reps} tekrar ({exercise.rest} dinlenme)
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={`/workouts/${program.id}`} className="button inline-block w-full text-center">
                Program Detayları
              </Link>
            </div>
          </div>
        ))}
      </div>

      <nav className="bottom-nav">
        <Link href="/" className="nav-link">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs">Ana Sayfa</span>
        </Link>
        <Link href="/exercises" className="nav-link">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="text-xs">Egzersizler</span>
        </Link>
        <Link href="/workouts" className="nav-link">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span className="text-xs">Programlar</span>
        </Link>
      </nav>
    </main>
  );
} 