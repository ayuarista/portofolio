import { Post } from '@/lib/types';
import { BlogCard } from './blog-card';

interface BlogGridProps {
  posts: Post[];
  className?: string;
}

export function BlogGrid({ posts, className = '' }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4 opacity-20">📝</div>
        <h3 className="text-xl font-semibold text-muted-foreground mb-2">
          No posts found
        </h3>
        <p className="text-muted-foreground">
          Check back later for new content!
        </p>
      </div>
    );
  }

  const [featuredPost, ...otherPosts] = posts;

  return (
    <div className={`space-y-8 ${className}`}>
      {featuredPost && (
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px bg-gradient-to-r from-blue-500 to-purple-500 flex-1" />
            <span className="text-sm font-medium text-muted-foreground px-3">
              Featured Post
            </span>
            <div className="h-px bg-gradient-to-r from-purple-500 to-blue-500 flex-1" />
          </div>
          <BlogCard post={featuredPost} variant="featured" />
        </div>
      )}

      {otherPosts.length > 0 && (
        <>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px bg-border flex-1" />
            <span className="text-sm font-medium text-muted-foreground px-3">
              Latest Posts
            </span>
            <div className="h-px bg-border flex-1" />
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <BlogCard key={post.id} post={post} variant="default" />
            ))}
          </div>
        </>
      )}
    </div>
  );
}