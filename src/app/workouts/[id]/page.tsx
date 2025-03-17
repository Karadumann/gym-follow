'use client';

import { useState, useEffect } from 'react';
import { WorkoutProgram, Exercise } from '../../../types';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const exercises: Exercise[] = [
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

const workoutPrograms: WorkoutProgram[] = [
  {
    id: 'beginner-strength',
    name: 'Başlangıç Seviyesi Güç Programı',
    description: 'Temel güç egzersizlerini öğrenmek ve güç kazanmak için ideal program',
    level: 'beginner',
    duration: '8 hafta',
    frequency: 'Haftada 3 gün',
    exercises: [
      { exerciseId: 'bench-press', sets: 3, reps: 10 },
      { exerciseId: 'squat', sets: 3, reps: 12 },
      { exerciseId: 'deadlift', sets: 3, reps: 8 }
    ]
  },
  {
    id: 'intermediate-strength',
    name: 'Orta Seviye Güç Programı',
    description: 'Güç ve kas kütlesi kazanımı için tasarlanmış program',
    level: 'intermediate',
    duration: '12 hafta',
    frequency: 'Haftada 4 gün',
    exercises: [
      { exerciseId: 'bench-press', sets: 4, reps: 8 },
      { exerciseId: 'squat', sets: 4, reps: 10 },
      { exerciseId: 'deadlift', sets: 4, reps: 6 },
      { exerciseId: 'overhead-press', sets: 3, reps: 8 }
    ]
  },
  {
    id: 'advanced-strength',
    name: 'İleri Seviye Güç Programı',
    description: 'Maksimum güç ve kas kütlesi için yoğun antrenman programı',
    level: 'advanced',
    duration: '16 hafta',
    frequency: 'Haftada 5 gün',
    exercises: [
      { exerciseId: 'bench-press', sets: 5, reps: 5 },
      { exerciseId: 'squat', sets: 5, reps: 5 },
      { exerciseId: 'deadlift', sets: 5, reps: 5 },
      { exerciseId: 'overhead-press', sets: 4, reps: 6 },
      { exerciseId: 'barbell-row', sets: 4, reps: 8 }
    ]
  }
];

interface Props {
  params: {
    id: string;
  };
}

export default function WorkoutProgramDetailPage({ params }: Props) {
  const program = workoutPrograms.find((p) => p.id === params.id);

  if (!program) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Program bulunamadı.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="bg-blue-600 text-white p-4 rounded-lg shadow-lg mb-6">
        <h1 className="text-2xl font-bold">{program.name}</h1>
      </nav>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Program Detayları</h2>
              <p className="text-gray-600 mb-4">{program.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700">Seviye</h3>
                  <p className="text-gray-600">{program.level}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700">Süre</h3>
                  <p className="text-gray-600">{program.duration}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700">Sıklık</h3>
                  <p className="text-gray-600">{program.frequency}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Egzersizler</h2>
              <div className="space-y-4">
                {program.exercises.map((exercise) => {
                  const exerciseDetails = exercises.find((e) => e.id === exercise.exerciseId);
                  if (!exerciseDetails) return null;

                  return (
                    <div key={exercise.exerciseId} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <Image
                          src={exerciseDetails.icon}
                          alt={exerciseDetails.name}
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-gray-800">{exerciseDetails.name}</h3>
                        <p className="text-gray-600">
                          {exercise.sets} set x {exercise.reps} tekrar
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex justify-around max-w-md mx-auto">
          <a href="/" className="text-gray-600 hover:text-blue-600">
            <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs">Ana Sayfa</span>
          </a>
          <a href="/exercises" className="text-gray-600 hover:text-blue-600">
            <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-xs">Egzersizler</span>
          </a>
          <a href="/workouts" className="text-blue-600">
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