'use client';

import { useState, useEffect } from 'react';
import { WorkoutProgram, Exercise } from '../../../types';
import Link from 'next/link';
import { useParams } from 'next/navigation';

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

const initialExercises: Exercise[] = [
  {
    id: '1',
    name: 'Bench Press',
    description: 'A compound exercise that targets the chest, shoulders, and triceps.',
    muscleGroup: 'Chest',
    equipment: 'Barbell, Bench',
    difficulty: 'intermediate',
    imageUrl: '/exercises/bench-press.svg'
  },
  {
    id: '2',
    name: 'Squat',
    description: 'A fundamental lower body exercise that targets the quadriceps, hamstrings, and glutes.',
    muscleGroup: 'Legs',
    equipment: 'Barbell, Squat Rack',
    difficulty: 'intermediate',
    imageUrl: '/exercises/squat.svg'
  },
  {
    id: '3',
    name: 'Deadlift',
    description: 'A compound exercise that targets multiple muscle groups including the back, legs, and core.',
    muscleGroup: 'Back',
    equipment: 'Barbell',
    difficulty: 'advanced',
    imageUrl: '/exercises/deadlift.svg'
  }
];

export default function WorkoutDetailPage() {
  const params = useParams();
  const [workout, setWorkout] = useState<WorkoutProgram | null>(null);

  useEffect(() => {
    const foundWorkout = initialWorkoutPrograms.find(w => w.id === params.id);
    setWorkout(foundWorkout || null);
  }, [params.id]);

  if (!workout) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Program Bulunamadı</h1>
          <Link href="/workouts" className="button">
            Programlara Dön
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="bg-blue-600 text-white p-4 rounded-lg mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">{workout.name}</h1>
          <Link href="/workouts" className="text-white hover:text-blue-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
        </div>
      </nav>

      <div className="card">
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded text-xs">
              {workout.level}
            </span>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded text-xs">
              {workout.duration}
            </span>
            <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded text-xs">
              {workout.frequency}
            </span>
          </div>

          <h2 className="text-lg font-semibold mb-2">Program Açıklaması</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{workout.description}</p>

          <h2 className="text-lg font-semibold mb-4">Egzersizler</h2>
          <div className="space-y-4">
            {workout.exercises.map((exercise, index) => {
              const exerciseDetails = initialExercises.find(e => e.id === exercise.exerciseId);
              if (!exerciseDetails) return null;

              return (
                <div key={index} className="border dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium mb-2">{exerciseDetails.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {exercise.sets} set x {exercise.reps} tekrar
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {exercise.rest} dinlenme
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs">
                          {exerciseDetails.muscleGroup}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs">
                          {exerciseDetails.equipment}
                        </span>
                      </div>
                    </div>
                    <Link href={`/exercises/${exerciseDetails.id}`} className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                      Detaylar
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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