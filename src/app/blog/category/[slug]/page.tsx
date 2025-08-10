import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { CategoryFilter } from '@/components/blog/CategoryFilter';
import { getPostsByCategory, getCategories } from '@/lib/api';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categories = await getCategories();  
  const category = categories.find(cat => cat.slug === params.slug);
  
  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
    };
  }

  return {
    title: `${category.name} - Blog Categories`,
    description: category.description || `Read articles about ${category.name}`,
    keywords: [category.name, 'blog', 'articles', 'tutorials'],
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();
  
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const [posts, categories] = await Promise.all([
    getPostsByCategory(params.slug),
    getCategories()
  ]);
  
  const category = categories.find(cat => cat.slug === params.slug);
  
  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-36 py-8">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/blog" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to All Posts
        </Link>
      </Button>

      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
          <Folder className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {category.name}
        </h1>
        
        {category.description && (
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            {category.description}
          </p>
        )}
        
        <div className="text-sm text-muted-foreground">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} in this category
        </div>
      </div>

      <CategoryFilter categories={categories} currentCategory={params.slug} />
      
      {posts.length > 0 ? (
        <BlogGrid posts={posts} />
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4 opacity-20">📂</div>
          <h3 className="text-xl font-semibold text-muted-foreground mb-2">
            No posts in this category yet
          </h3>
          <p className="text-muted-foreground mb-6">
            Check back later for new content about {category.name}!
          </p>
          <Button asChild>
            <Link href="/blog">Browse All Posts</Link>
          </Button>
        </div>
      )}
    </div>
  );
}