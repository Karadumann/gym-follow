'use client';

import { useState } from 'react';

interface WorkoutProgram {
  id: number;
  name: string;
  description: string;
  difficulty: string;
  duration: string;
  frequency: string;
  schedule: {
    day: string;
    exercises: {
      name: string;
      sets: string;
      reps: string;
      rest: string;
    }[];
  }[];
}

const workoutPrograms: WorkoutProgram[] = [
  {
    id: 1,
    name: "Başlangıç Kalistenik Programı",
    description: "Temel hareketlere odaklanan, vücut ağırlığı ile yapılan başlangıç seviye program.",
    difficulty: "Başlangıç",
    duration: "8 Hafta",
    frequency: "Haftada 3 Gün",
    schedule: [
      {
        day: "Gün 1 - Üst Vücut",
        exercises: [
          { name: "Pike Push-up", sets: "3", reps: "8-12", rest: "90 sn" },
          { name: "Negative Pull-up", sets: "3", reps: "5-8", rest: "90 sn" },
          { name: "Dips", sets: "3", reps: "8-12", rest: "90 sn" },
          { name: "Inverted Row", sets: "3", reps: "10-15", rest: "90 sn" }
        ]
      },
      {
        day: "Gün 2 - Alt Vücut",
        exercises: [
          { name: "Squat", sets: "3", reps: "15-20", rest: "90 sn" },
          { name: "Lunges", sets: "3", reps: "12-15", rest: "90 sn" },
          { name: "Calf Raises", sets: "3", reps: "15-20", rest: "60 sn" }
        ]
      },
      {
        day: "Gün 3 - Tam Vücut",
        exercises: [
          { name: "Push-up", sets: "3", reps: "10-15", rest: "90 sn" },
          { name: "Band Pull-up", sets: "3", reps: "8-12", rest: "90 sn" },
          { name: "Plank", sets: "3", reps: "30-45 sn", rest: "60 sn" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "İleri Seviye PPL Programı",
    description: "Push, Pull, Legs split programı ile maksimum güç ve kas gelişimi hedefleyen ileri seviye program.",
    difficulty: "İleri",
    duration: "12 Hafta",
    frequency: "Haftada 6 Gün",
    schedule: [
      {
        day: "Gün 1 - Push",
        exercises: [
          { name: "Handstand Push-up", sets: "4", reps: "6-8", rest: "120 sn" },
          { name: "Ring Dips", sets: "4", reps: "8-12", rest: "120 sn" },
          { name: "Pike Push-up", sets: "3", reps: "10-12", rest: "90 sn" }
        ]
      },
      {
        day: "Gün 2 - Pull",
        exercises: [
          { name: "Muscle Up", sets: "4", reps: "3-5", rest: "180 sn" },
          { name: "Front Lever Hold", sets: "4", reps: "10-15 sn", rest: "120 sn" },
          { name: "Pull-up", sets: "4", reps: "8-12", rest: "120 sn" }
        ]
      },
      {
        day: "Gün 3 - Legs",
        exercises: [
          { name: "Pistol Squat", sets: "4", reps: "6-8", rest: "120 sn" },
          { name: "Jump Squat", sets: "3", reps: "12-15", rest: "90 sn" },
          { name: "Single Leg Calf Raise", sets: "3", reps: "15-20", rest: "60 sn" }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Core ve Denge Programı",
    description: "Core gücü ve denge geliştirmeye odaklanan orta seviye program.",
    difficulty: "Orta",
    duration: "6 Hafta",
    frequency: "Haftada 4 Gün",
    schedule: [
      {
        day: "Gün 1 - Core Güç",
        exercises: [
          { name: "L-Sit", sets: "4", reps: "10-15 sn", rest: "90 sn" },
          { name: "Dragon Flag", sets: "3", reps: "5-8", rest: "120 sn" },
          { name: "Hollow Body Hold", sets: "3", reps: "30-45 sn", rest: "90 sn" }
        ]
      },
      {
        day: "Gün 2 - Denge",
        exercises: [
          { name: "Handstand Hold", sets: "4", reps: "20-30 sn", rest: "120 sn" },
          { name: "Crow Pose", sets: "3", reps: "15-20 sn", rest: "90 sn" },
          { name: "Single Leg Deadlift", sets: "3", reps: "8-12", rest: "90 sn" }
        ]
      }
    ]
  }
];

export default function WorkoutsPage() {
  const [selectedProgram, setSelectedProgram] = useState<WorkoutProgram | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  const difficulties = Array.from(new Set(workoutPrograms.map(program => program.difficulty)));
  
  const filteredPrograms = workoutPrograms.filter(program => 
    selectedDifficulty === "all" || program.difficulty === selectedDifficulty
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Antrenman Programları</h1>
      
      <div className="mb-6">
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="all">Tüm Zorluk Seviyeleri</option>
          {difficulties.map(difficulty => (
            <option key={difficulty} value={difficulty}>{difficulty}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms.map(program => (
          <div
            key={program.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{program.name}</h2>
              <div className="flex gap-2 mb-4">
                <span className={`text-sm px-2 py-1 rounded ${
                  program.difficulty === 'Başlangıç' ? 'bg-green-100 text-green-800' :
                  program.difficulty === 'Orta' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {program.difficulty}
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                  {program.duration}
                </span>
                <span className="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded">
                  {program.frequency}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <button
                onClick={() => setSelectedProgram(program)}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Program Detayları
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedProgram.name}</h2>
                  <div className="flex gap-2">
                    <span className={`text-sm px-2 py-1 rounded ${
                      selectedProgram.difficulty === 'Başlangıç' ? 'bg-green-100 text-green-800' :
                      selectedProgram.difficulty === 'Orta' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {selectedProgram.difficulty}
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                      {selectedProgram.duration}
                    </span>
                    <span className="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded">
                      {selectedProgram.frequency}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-600 mb-6">{selectedProgram.description}</p>

              <div className="space-y-6">
                {selectedProgram.schedule.map((day, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-4">{day.day}</h3>
                    <table className="w-full">
                      <thead>
                        <tr className="text-left">
                          <th className="pb-2">Egzersiz</th>
                          <th className="pb-2">Set</th>
                          <th className="pb-2">Tekrar</th>
                          <th className="pb-2">Dinlenme</th>
                        </tr>
                      </thead>
                      <tbody>
                        {day.exercises.map((exercise, exerciseIndex) => (
                          <tr key={exerciseIndex} className="border-t">
                            <td className="py-2">{exercise.name}</td>
                            <td className="py-2">{exercise.sets}</td>
                            <td className="py-2">{exercise.reps}</td>
                            <td className="py-2">{exercise.rest}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 