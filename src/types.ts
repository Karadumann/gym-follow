export interface Exercise {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface WorkoutProgram {
  id: string;
  name: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  frequency: string;
  exercises: {
    exerciseId: string;
    sets: number;
    reps: number;
  }[];
} 