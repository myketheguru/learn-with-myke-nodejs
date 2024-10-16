export interface HandsOnExercise {
  description: string;
}

export interface Project {
  title: string;
  description: string;
}

export interface Topic {
  title: string;
  description: string;
}

export interface Week {
  week: number;
  title: string;
  topics: string[];
  handsOnExercises: string[];
  project: string;
}

export interface Curriculum {
  weeks: Week[];
}
