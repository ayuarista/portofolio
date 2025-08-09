// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock, ArrowLeft, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { getPost, getPosts } from '@/lib/api';

interface PostPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} - Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
      type: 'article',
      publishedTime: post.published_at,
      authors: ['Your Name'], // Replace with actual author
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

// Generate static paths for better performance
export async function generateStaticParams() {
  const posts = await getPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Back Button */}
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/blog" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </Button>

      {/* Header */}
      <header className="mb-8">
        {/* Category */}
        {post.category && (
          <div className="mb-4">
            <Badge 
              variant="secondary" 
              className="text-sm px-3 py-1"
            >
              <Link href={`/blog/category/${post.category.slug}`}>
                {post.category.name}
              </Link>
            </Badge>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            <time dateTime={post.published_at}>
              {formatDate(post.published_at)}
            </time>
          </div>
          
          {post.reading_time && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.reading_time}</span>
            </div>
          )}
        </div>
      </header>

      {/* Featured Image */}
      {post.image && (
        <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          />
        </div>
      )}

      {/* Content */}
      <div 
        className="prose prose-lg dark:prose-invert max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <Separator className="my-8" />

      {/* Tags */}
      {Array.isArray(post.tags) && post.tags.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Tag className="w-5 h-5" />
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Button variant="outline" asChild>
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            All Posts
          </Link>
        </Button>

        {post.category && (
          <Button variant="outline" asChild>
            <Link href={`/blog/category/${post.category.slug}`}>
              More in {post.category.name}
            </Link>
          </Button>
        )}
      </div>
    </article>
  );
}