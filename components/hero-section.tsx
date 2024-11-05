'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Unlock Your Potential with Expert-Led Courses
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of learners mastering new skills from world-class instructors
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search courses..."
                className="pl-10"
              />
            </div>
            <Button size="lg">
              Explore Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}