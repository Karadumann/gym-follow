import Image from 'next/image';
import { useState } from 'react';

interface ExerciseDetailProps {
  exercise: {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    videoUrl?: string;
    category: string;
    difficulty: string;
    instructions: string[];
    progression?: {
      level: string;
      description: string;
    }[];
    formTips?: string[];
    alternatives?: {
      name: string;
      description: string;
    }[];
  };
  onClose: () => void;
}

export default function ExerciseDetail({ exercise, onClose }: ExerciseDetailProps) {
  const [timer, setTimer] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<'instructions' | 'progression' | 'alternatives'>('instructions');

  const startTimer = (seconds: number) => {
    setTimer(seconds);
    setIsTimerRunning(true);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold">{exercise.name}</h2>
              <div className="flex gap-2 mt-1">
                <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                  {exercise.category}
                </span>
                <span className={`text-sm px-2 py-1 rounded ${
                  exercise.difficulty === 'Başlangıç' ? 'bg-green-100 text-green-800' :
                  exercise.difficulty === 'Orta' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {exercise.difficulty}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="relative w-full h-64 mb-6">
            {exercise.videoUrl ? (
              <iframe
                src={exercise.videoUrl}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <Image
                src={exercise.imageUrl}
                alt={exercise.name}
                fill
                className="object-cover rounded-lg"
              />
            )}
          </div>

          <div className="mb-6">
            <p className="text-gray-700">{exercise.description}</p>
          </div>

          <div className="mb-6">
            <div className="flex gap-2 border-b">
              <button
                onClick={() => setActiveTab('instructions')}
                className={`px-4 py-2 ${activeTab === 'instructions' ? 'border-b-2 border-blue-500' : ''}`}
              >
                Talimatlar
              </button>
              {exercise.progression && (
                <button
                  onClick={() => setActiveTab('progression')}
                  className={`px-4 py-2 ${activeTab === 'progression' ? 'border-b-2 border-blue-500' : ''}`}
                >
                  Progresyon
                </button>
              )}
              {exercise.alternatives && (
                <button
                  onClick={() => setActiveTab('alternatives')}
                  className={`px-4 py-2 ${activeTab === 'alternatives' ? 'border-b-2 border-blue-500' : ''}`}
                >
                  Alternatifler
                </button>
              )}
            </div>

            <div className="mt-4">
              {activeTab === 'instructions' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Nasıl Yapılır?</h3>
                    <ol className="list-decimal list-inside space-y-2">
                      {exercise.instructions.map((instruction, index) => (
                        <li key={index} className="text-gray-700">{instruction}</li>
                      ))}
                    </ol>
                  </div>

                  {exercise.formTips && (
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Form İpuçları</h3>
                      <ul className="list-disc list-inside space-y-2">
                        {exercise.formTips.map((tip, index) => (
                          <li key={index} className="text-gray-700">{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'progression' && exercise.progression && (
                <div>
                  <h3 className="font-semibold text-lg mb-2">Progresyon Adımları</h3>
                  <div className="space-y-4">
                    {exercise.progression.map((step, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">{step.level}</h4>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'alternatives' && exercise.alternatives && (
                <div>
                  <h3 className="font-semibold text-lg mb-2">Alternatif Hareketler</h3>
                  <div className="space-y-4">
                    {exercise.alternatives.map((alt, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">{alt.name}</h4>
                        <p className="text-gray-700">{alt.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold text-lg mb-4">Dinlenme Zamanlayıcısı</h3>
            <div className="flex gap-2 flex-wrap">
              {[30, 60, 90, 120].map((seconds) => (
                <button
                  key={seconds}
                  onClick={() => startTimer(seconds)}
                  disabled={isTimerRunning}
                  className={`px-4 py-2 rounded ${
                    isTimerRunning
                      ? 'bg-gray-200 text-gray-500'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {seconds} saniye
                </button>
              ))}
            </div>
            {timer > 0 && (
              <div className="mt-4 text-center">
                <p className="text-2xl font-bold">{timer} saniye</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 