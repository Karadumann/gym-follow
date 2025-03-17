'use client';

import { useState } from 'react';
import ExerciseDetail from '../components/ExerciseDetail';

interface Exercise {
  id: number;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
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
}

const initialExercises: Exercise[] = [
  {
    id: 1,
    name: "Pike Push-ups",
    category: "Omuz",
    description: "Handstand push-up'a giden yolda temel egzersiz. Omuz ve üst göğüs kaslarını hedefler.",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600",
    videoUrl: "https://www.youtube.com/embed/sposDXWEB0A",
    difficulty: "Orta",
    instructions: [
      "Kalçanızı havaya kaldırarak ters V pozisyonu alın",
      "Başınız yere yakın olacak şekilde dirseklerinizi bükün",
      "Omuzlarınızı sıkarak yukarı itin",
      "Kontrollü bir şekilde başlangıç pozisyonuna dönün"
    ],
    formTips: [
      "Dirseklerinizi vücudunuza yakın tutun",
      "Başınızı nötral pozisyonda tutun",
      "Sırtınızı düz tutun",
      "Nefes alışınızı kontrol edin"
    ],
    progression: [
      {
        level: "Başlangıç",
        description: "Duvara yaslanarak pike push-up"
      },
      {
        level: "Orta",
        description: "Tam pike push-up"
      },
      {
        level: "İleri",
        description: "Elevated pike push-up"
      }
    ],
    alternatives: [
      {
        name: "Wall Handstand Hold",
        description: "Duvarda el stand pozisyonunda durma"
      },
      {
        name: "Decline Push-up",
        description: "Ayaklar yüksekte push-up"
      }
    ]
  },
  {
    id: 2,
    name: "Pull-up",
    category: "Sırt",
    description: "Üst vücut gücünü geliştiren temel calisthenics hareketi.",
    imageUrl: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600",
    videoUrl: "https://www.youtube.com/embed/eGo4IYlbE5g",
    difficulty: "İleri",
    instructions: [
      "Barı omuz genişliğinde kavrayın",
      "Çenenizi barın üzerine çıkana kadar kendinizi yukarı çekin",
      "Scapular depression'a dikkat edin",
      "Kontrollü bir şekilde başlangıç pozisyonuna dönün"
    ],
    formTips: [
      "Omuzlarınızı geriye ve aşağı çekin",
      "Core'unuzu sıkı tutun",
      "Bacaklarınızı düz tutun",
      "Her tekrarda tam açılın"
    ],
    progression: [
      {
        level: "Başlangıç",
        description: "Negatif pull-up ve assisted pull-up"
      },
      {
        level: "Orta",
        description: "Tam pull-up"
      },
      {
        level: "İleri",
        description: "Ağırlıklı pull-up"
      }
    ],
    alternatives: [
      {
        name: "Inverted Row",
        description: "Yatay çekiş hareketi"
      },
      {
        name: "Band Pull-up",
        description: "Elastik bant yardımıyla pull-up"
      }
    ]
  },
  {
    id: 3,
    name: "Dips",
    category: "Göğüs/Triceps",
    description: "Üst vücut gücünü geliştiren temel hareket. Göğüs ve triceps odaklı.",
    imageUrl: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600",
    videoUrl: "https://www.youtube.com/embed/2z8JmcrW-As",
    difficulty: "Orta",
    instructions: [
      "Paralel barları omuz genişliğinde kavrayın",
      "Dirseklerinizi 90 derece bükün",
      "Göğsünüzü öne eğerek inişi tamamlayın",
      "Patlayıcı şekilde yukarı itin"
    ],
    formTips: [
      "Omuzlarınızı deprese edin",
      "Dirseklerinizi vücuda yakın tutun",
      "Başınızı nötral pozisyonda tutun",
      "İnişte omuzlarınızı koruyun"
    ],
    progression: [
      {
        level: "Başlangıç",
        description: "Bench dips"
      },
      {
        level: "Orta",
        description: "Paralel bar dips"
      },
      {
        level: "İleri",
        description: "Ağırlıklı dips"
      }
    ],
    alternatives: [
      {
        name: "Diamond Push-up",
        description: "Elmas şeklinde el pozisyonuyla şınav"
      },
      {
        name: "Close Grip Push-up",
        description: "Dar tutuşlu şınav"
      }
    ]
  },
  {
    id: 4,
    name: "Pistol Squat",
    category: "Bacak",
    description: "Tek bacak squat hareketi. Denge ve bacak gücünü geliştirir.",
    imageUrl: "https://images.unsplash.com/photo-1584863265045-f9d10ca7fa61?w=600",
    videoUrl: "https://www.youtube.com/embed/vq5-vdgJc0I",
    difficulty: "İleri",
    instructions: [
      "Bir bacağınızı öne uzatın",
      "Diğer bacağınızla yavaşça çömelin",
      "Dengeyi koruyarak dipte durun",
      "Tek bacakla kendinizi yukarı itin"
    ],
    formTips: [
      "Göğsünüzü dik tutun",
      "Destek ayağınızın topuğunu yerden kaldırmayın",
      "Dizinizi ayak parmak ucunuzun ötesine geçirmeyin",
      "Core'unuzu sıkı tutun"
    ],
    progression: [
      {
        level: "Başlangıç",
        description: "Assisted pistol squat (tutunarak)"
      },
      {
        level: "Orta",
        description: "Box pistol squat"
      },
      {
        level: "İleri",
        description: "Tam pistol squat"
      }
    ],
    alternatives: [
      {
        name: "Shrimp Squat",
        description: "Alternatif tek bacak squat varyasyonu"
      },
      {
        name: "Split Squat",
        description: "Tek bacak öne adım alarak squat"
      }
    ]
  },
  {
    id: 5,
    name: "L-Sit",
    category: "Core",
    description: "Tüm vücut gücünü ve kontrolünü geliştiren statik hareket.",
    imageUrl: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600",
    videoUrl: "https://www.youtube.com/embed/IUZJoSP66HI",
    difficulty: "İleri",
    instructions: [
      "Paralel barlarda veya yerde ellerinizi sabitleyin",
      "Bacaklarınızı yerden kaldırıp düz tutun",
      "Core'unuzu sıkın ve pozisyonu koruyun",
      "Nefes alışınıza dikkat edin"
    ],
    formTips: [
      "Omuzlarınızı deprese edin",
      "Bacaklarınızı tamamen düz tutun",
      "Kalçanızı posterior tilt'te tutun",
      "Dirseklerinizi kilitli tutun"
    ],
    progression: [
      {
        level: "Başlangıç",
        description: "Tuck L-sit"
      },
      {
        level: "Orta",
        description: "One leg L-sit"
      },
      {
        level: "İleri",
        description: "Tam L-sit"
      }
    ],
    alternatives: [
      {
        name: "Hanging Leg Raises",
        description: "Asılı pozisyonda bacak kaldırma"
      },
      {
        name: "V-sit",
        description: "V şeklinde oturma pozisyonu"
      }
    ]
  },
  {
    id: 6,
    name: "Muscle Up",
    category: "Tam Vücut",
    description: "İleri seviye bir hareket. Pull-up ve dips kombinasyonu.",
    imageUrl: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600",
    videoUrl: "https://www.youtube.com/embed/astSQRh1-i0",
    difficulty: "İleri",
    instructions: [
      "False grip ile barı kavrayın",
      "Patlayıcı pull-up yapın",
      "Barın üzerine geçiş yapın",
      "Dips ile hareketi tamamlayın"
    ],
    formTips: [
      "False grip tekniğini doğru uygulayın",
      "Çekişte vücudunuzu geriye yatırın",
      "Geçiş anında dirseğinizi barın üzerine koyun",
      "Hareketi patlayıcı yapın"
    ],
    progression: [
      {
        level: "Başlangıç",
        description: "Explosive pull-up ve straight bar dips"
      },
      {
        level: "Orta",
        description: "False grip pull-up ve transition"
      },
      {
        level: "İleri",
        description: "Tam muscle up"
      }
    ],
    alternatives: [
      {
        name: "Ring Muscle Up",
        description: "Halkalarda muscle up"
      },
      {
        name: "Kipping Muscle Up",
        description: "Momentum kullanarak muscle up"
      }
    ]
  },
  {
    id: 7,
    name: "Front Lever",
    category: "Sırt/Core",
    description: "Vücut kontrolü ve sırt gücü gerektiren statik hareket.",
    imageUrl: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600",
    videoUrl: "https://www.youtube.com/embed/X6huKs5OWMU",
    difficulty: "İleri",
    instructions: [
      "Barı geniş kavrayın",
      "Vücudunuzu geriye yatırın",
      "Düz bir çizgi oluşturun",
      "Pozisyonu koruyun"
    ],
    formTips: [
      "Omuzlarınızı deprese edin",
      "Kalçanızı düz tutun",
      "Core'unuzu maksimum sıkın",
      "Kollarınızı düz tutun"
    ],
    progression: [
      {
        level: "Başlangıç",
        description: "Tuck front lever"
      },
      {
        level: "Orta",
        description: "Advanced tuck ve single leg"
      },
      {
        level: "İleri",
        description: "Tam front lever"
      }
    ],
    alternatives: [
      {
        name: "Back Lever",
        description: "Ters yönde lever hareketi"
      },
      {
        name: "Dragon Flag",
        description: "Benzer core ve sırt egzersizi"
      }
    ]
  },
  {
    id: 8,
    name: "Handstand Push-up",
    category: "Omuz",
    description: "El stand pozisyonunda yapılan şınav hareketi.",
    imageUrl: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600",
    videoUrl: "https://www.youtube.com/embed/hvoQiF0kBI8",
    difficulty: "İleri",
    instructions: [
      "Duvarda el stand pozisyonu alın",
      "Başınız yere değene kadar kontrollü inin",
      "Omuzlarınızı sıkarak yukarı itin",
      "Dengeyi koruyun"
    ],
    formTips: [
      "Parmaklarınızı açın ve yere sıkıca basın",
      "Dirseklerinizi vücuda yakın tutun",
      "Core'unuzu sıkı tutun",
      "Başınızı nötral pozisyonda tutun"
    ],
    progression: [
      {
        level: "Başlangıç",
        description: "Pike push-up ve wall handstand hold"
      },
      {
        level: "Orta",
        description: "Wall handstand negative"
      },
      {
        level: "İleri",
        description: "Tam handstand push-up"
      }
    ],
    alternatives: [
      {
        name: "Military Press",
        description: "Ayakta omuz press hareketi"
      },
      {
        name: "Pike Push-up",
        description: "Daha kolay omuz egzersizi"
      }
    ]
  },
  {
    id: 9,
    name: "Dragon Flag",
    category: "Core",
    description: "Bruce Lee'nin ünlü core egzersizi.",
    imageUrl: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600",
    videoUrl: "https://www.youtube.com/embed/pvz7k5gO-DE",
    difficulty: "İleri",
    instructions: [
      "Sırt üstü yatın ve bir destek noktası bulun",
      "Vücudunuzu düz bir şekilde kaldırın",
      "Kontrollü bir şekilde inin",
      "Core'unuzu sürekli sıkı tutun"
    ],
    formTips: [
      "Vücudunuzu düz bir çizgi halinde tutun",
      "İniş ve kalkışı yavaş yapın",
      "Nefes alışınızı kontrol edin",
      "Boynunuzu koruyun"
    ],
    progression: [
      {
        level: "Başlangıç",
        description: "Tuck dragon flag"
      },
      {
        level: "Orta",
        description: "Single leg dragon flag"
      },
      {
        level: "İleri",
        description: "Tam dragon flag"
      }
    ],
    alternatives: [
      {
        name: "Hollow Body Hold",
        description: "Benzer core egzersizi"
      },
      {
        name: "Reverse Crunch",
        description: "Daha kolay core hareketi"
      }
    ]
  },
  {
    id: 10,
    name: "Planche Progression",
    category: "Tam Vücut",
    description: "Yatay düzlemde vücut dengesi gerektiren ileri seviye hareket.",
    imageUrl: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600",
    videoUrl: "https://www.youtube.com/embed/UZ-1jwG7aQ4",
    difficulty: "İleri",
    instructions: [
      "Tuck planche ile başlayın",
      "Omuzlarınızı deprese edin",
      "Protractionu koruyun",
      "Adım adım bacakları açın"
    ],
    formTips: [
      "Omuzlarınızı maksimum deprese edin",
      "Dirseklerinizi kilitli tutun",
      "Core'unuzu sürekli sıkı tutun",
      "Kalçanızı düz tutun"
    ],
    progression: [
      {
        level: "Başlangıç",
        description: "Planche lean ve tuck planche"
      },
      {
        level: "Orta",
        description: "Advanced tuck ve straddle planche"
      },
      {
        level: "İleri",
        description: "Tam planche"
      }
    ],
    alternatives: [
      {
        name: "Pseudo Planche Push-ups",
        description: "Planche hazırlık hareketi"
      },
      {
        name: "Maltese Lean",
        description: "Farklı bir yatay denge hareketi"
      }
    ]
  }
];

export default function ExercisesPage() {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  const categories = Array.from(new Set(initialExercises.map(ex => ex.category)));
  const difficulties = Array.from(new Set(initialExercises.map(ex => ex.difficulty)));

  const filteredExercises = initialExercises.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || exercise.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || exercise.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Egzersiz Listesi</h1>
      
      <div className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Egzersiz ara..."
          className="w-full p-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="flex flex-wrap gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="all">Tüm Kategoriler</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.map(exercise => (
          <div
            key={exercise.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => setSelectedExercise(exercise)}
          >
            <div className="relative h-48">
              <img
                src={exercise.imageUrl}
                alt={exercise.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{exercise.name}</h3>
              <div className="flex gap-2 mb-2">
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
              <p className="text-gray-600 line-clamp-2">{exercise.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedExercise && (
        <ExerciseDetail
          exercise={selectedExercise}
          onClose={() => setSelectedExercise(null)}
        />
      )}
    </div>
  );
} 