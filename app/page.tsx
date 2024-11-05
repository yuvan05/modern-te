import { HeroSection } from '@/components/hero-section';
import { CategorySection } from '@/components/category-section';
import { FeaturedCourses } from '@/components/featured-courses';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <FeaturedCourses />
    </main>
  );
}