import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Post } from '@/lib/types';

interface BlogCardProps {
    post: Post;
    variant?: 'default' | 'featured' | 'compact';
}


export function BlogCard({ post, variant = 'default' }: BlogCardProps) {
    const tags = Array.isArray(post.tags)
    ? post.tags
    : post.tags
    ? [post.tags]
    : [];
  
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (variant === 'featured') {
        return (
            <Card className="group overflow-hidden border-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative h-96 overflow-hidden">
                    {post.image ? (
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <div className="text-white text-6xl font-bold opacity-20">
                                {post.title.charAt(0)}
                            </div>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                    {/* Category Badge */}
                    {post.category && (
                        <Badge className="absolute top-6 left-6 bg-white/90 text-black hover:bg-white">
                            {post.category.name}
                        </Badge>
                    )}
                </div>

                <CardContent className="p-8 relative -mt-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-t-3xl">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            {formatDate(post.published_at)}
                        </div>
                        {post.reading_time && (
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.reading_time}
                            </div>
                        )}
                    </div>

                    <Link href={`/blog/${post.slug}`} className="group">
                        <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                            {post.title}
                        </h2>
                    </Link>

                    <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                        {post.description}
                    </p>

                    {/* Tags */}
                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                    <Tag className="w-3 h-3 mr-1" />
                                    {tag}
                                </Badge>
                            ))}
                            {tags.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                    +{tags.length - 3}
                                </Badge>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        );
    }

    if (variant === 'compact') {
        return (
            <Card className="group hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex">
                    {/* Image */}
                    <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden rounded-l-lg">
                        {post.image ? (
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="128px"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                                <div className="text-slate-400 text-lg font-bold">
                                    {post.title.charAt(0)}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <CardContent className="p-4 flex-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                            {post.category && (
                                <Badge variant="secondary" className="text-xs px-2 py-1">
                                    {post.category.name}
                                </Badge>
                            )}
                            <span>{formatDate(post.published_at)}</span>
                        </div>

                        <Link href={`/blog/${post.slug}`}>
                            <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                                {post.description}
                            </h3>
                        </Link>

                        <p className="text-xs text-muted-foreground line-clamp-2">
                            {post.description}
                        </p>
                    </CardContent>
                </div>
            </Card>
        );
    }

    // Default variant
    return (
        <Card className="group overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                {post.image ? (
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                        <div className="text-slate-400 dark:text-slate-500 text-3xl font-bold opacity-50">
                            {post.title.charAt(0)}
                        </div>
                    </div>
                )}

                {/* Category Badge */}
                {post.category && (
                    <Badge className="absolute top-3 left-3 bg-white/90 text-black hover:bg-white">
                        {post.category.name}
                    </Badge>
                )}
            </div>

            {/* Content */}
            <CardHeader className="pb-2 px-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3 mt-3">
                    <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        {formatDate(post.published_at)}
                    </div>
                    {post.reading_time && (
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.reading_time}
                        </div>
                    )}
                </div>

                <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                    </h3>
                </Link>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                    {post.description}
                </p>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col">
                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                            </Badge>
                        ))}
                        {tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                                +{tags.length - 2}
                            </Badge>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}