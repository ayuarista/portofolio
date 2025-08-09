// app/blog/page.tsx
import { Suspense } from 'react';
import { Metadata } from 'next';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { CategoryFilter } from '@/components/blog/CategoryFilter';
import { Skeleton } from '@/components/ui/skeleton';
import { getPosts, getCategories } from '@/lib/api';

export const metadata: Metadata = {
    title: 'Blog - My Portfolio',
    description: 'Read the latest articles about web development, programming, and technology.',
    keywords: ['blog', 'web development', 'programming', 'technology', 'tutorials'],
};

function BlogLoadingSkeleton() {
    return (
        <div className="space-y-8 px-32">
            {/* Featured post skeleton */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Skeleton className="h-px flex-1" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-px flex-1" />
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg overflow-hidden">
                    <Skeleton className="h-96 w-full" />
                    <div className="p-8 space-y-4">
                        <div className="flex gap-4">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-4 w-16" />
                        </div>
                        <Skeleton className="h-8 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                        <div className="flex gap-2">
                            <Skeleton className="h-6 w-16" />
                            <Skeleton className="h-6 w-20" />
                            <Skeleton className="h-6 w-14" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid skeleton */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Skeleton className="h-px flex-1" />
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-px flex-1" />
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="border rounded-lg overflow-hidden">
                            <Skeleton className="h-48 w-full" />
                            <div className="p-4 space-y-3">
                                <div className="flex gap-2">
                                    <Skeleton className="h-4 w-16" />
                                    <Skeleton className="h-4 w-20" />
                                </div>
                                <Skeleton className="h-6 w-3/4" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-2/3" />
                                <div className="flex gap-2">
                                    <Skeleton className="h-5 w-12" />
                                    <Skeleton className="h-5 w-16" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

async function BlogContent() {
    const [posts, categories] = await Promise.all([
        getPosts(),
        getCategories()
    ]);

    return (
        <>
            {/* Category Filter */}
            <CategoryFilter categories={categories} />

            {/* Blog Grid */}
            <BlogGrid posts={posts} />
        </>
    );
}

export default function BlogPage() {
    return (
        <div className="container mx-auto px-36 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    My Blog
                </h1>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-4">
                    Discover insights, tutorials, and thoughts on web development, programming, and the latest in technology.
                </p>
            </div>

            {/* Content */}
            <Suspense fallback={<BlogLoadingSkeleton />}>
                <BlogContent />
            </Suspense>
        </div>
    );
}