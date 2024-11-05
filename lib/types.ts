export type Course = {
  id: string;
  title: string;
  description: string;
  price: number;
  instructor: User;
  thumbnail: string;
  modules: Module[];
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  studentsEnrolled: number;
  duration: string;
};

export type Module = {
  id: string;
  title: string;
  duration: string;
  lessons: Lesson[];
};

export type Lesson = {
  id: string;
  title: string;
  type: 'video' | 'pdf' | 'quiz';
  duration: string;
  completed: boolean;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  avatar: string;
};