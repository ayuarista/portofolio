"use client";
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Category } from '@/lib/types';

interface CategoryFilterProps {
  categories: Category[];
  currentCategory?: string;
}

export function CategoryFilter({ categories, currentCategory }: CategoryFilterProps) {
  // const pathname = usePathname();
  
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-2 pb-2">
          <Button
            asChild
            variant={!currentCategory ? "default" : "outline"}
            size="sm"
            className="flex-shrink-0"
          >
            <Link href="/blog">
              All Posts
              <Badge variant="secondary" className="ml-2">
                {categories.reduce((total, cat) => total + (cat.posts_count || 0), 0)}
              </Badge>
            </Link>
          </Button>

          {categories.map((category) => (
            <Button
              key={category.id}
              asChild
              variant={currentCategory === category.slug ? "default" : "outline"}
              size="sm"
              className="flex-shrink-0"
            >
              <Link href={`/blog/category/${category.slug}`}>
                {category.name}
                {category.posts_count && (
                  <Badge variant="secondary" className="ml-2">
                    {category.posts_count}
                  </Badge>
                )}
              </Link>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}