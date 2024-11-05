import { Course, User } from './types';
import { BookOpen, Code, Palette, Calculator } from 'lucide-react';

export const featuredCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced Web Development',
    description: 'Master modern web development with React, Next.js, and TypeScript',
    price: 99.99,
    instructor: {
      id: '1',
      name: 'Sarah Chen',
      email: 'sarah@example.com',
      role: 'instructor',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    modules: [
      {
        id: 'm1',
        title: 'React Fundamentals',
        duration: '2h 30m',
        lessons: [
          {
            id: 'l1',
            title: 'Introduction to React',
            type: 'video',
            duration: '15m',
            completed: false,
          },
        ],
      },
    ],
    category: 'Programming',
    level: 'Advanced',
    rating: 4.8,
    studentsEnrolled: 1234,
    duration: '24h 30m',
  },
  {
    id: '2',
    title: 'Digital Marketing Mastery',
    description: 'Learn modern digital marketing strategies and techniques',
    price: 79.99,
    instructor: {
      id: '2',
      name: 'Michael Ross',
      email: 'michael@example.com',
      role: 'instructor',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    modules: [
      {
        id: 'm1',
        title: 'SEO Fundamentals',
        duration: '2h',
        lessons: [
          {
            id: 'l1',
            title: 'Understanding SEO Basics',
            type: 'video',
            duration: '20m',
            completed: false,
          },
        ],
      },
    ],
    category: 'Marketing',
    level: 'Intermediate',
    rating: 4.6,
    studentsEnrolled: 856,
    duration: '18h 45m',
  },
];

export const categories = [
  {
    name: 'Programming',
    icon: Code,
    count: 127,
  },
  {
    name: 'Design',
    icon: Palette,
    count: 84,
  },
  {
    name: 'Business',
    icon: BookOpen,
    count: 95,
  },
  {
    name: 'Mathematics',
    icon: Calculator,
    count: 63,
  },
];

export const currentUser: User = {
  id: 'current',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  role: 'student',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
};