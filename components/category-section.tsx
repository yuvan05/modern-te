import { categories } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export function CategorySection() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Browse Categories</h2>
          <p className="text-muted-foreground">
            Explore our wide range of courses across different categories
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.name} className="group hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Icon className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} courses</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}