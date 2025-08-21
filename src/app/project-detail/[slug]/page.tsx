import { notFound } from 'next/navigation';
import { projectsData } from '@/app/project-detail/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BsCalendarDate } from "react-icons/bs";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

interface PageProps {
    params: {
        slug: string;
    };
}

export default function ProjectDetail({ params }: PageProps) {

    const project = projectsData.find(p => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <Button variant="ghost" asChild className="mb-8">
                    <Link href="/" className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </Button>

                <div className="mb-8">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-4">{project.title}</h1>
                    <div className="flex items-center">
                    <BsCalendarDate className="w-4 h-4 text-muted-foreground mr-2" />
                    <p className="text-sm text-muted-foreground mb-4">{project.dates}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Project Image */}
                {project.image && (
                    <div className="mb-8">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={400}
                            className="w-full h-64 md:h-72 object-cover rounded-lg"
                        />
                    </div>
                )}

                {/* Project Description */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>About This Project</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg leading-relaxed mb-4">
                            {project.fullDescription}
                        </p>
                    </CardContent>
                </Card>

                {/* Technologies */}
                {project.technologies && (
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>Technologies Used</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <Badge key={tech} variant="outline">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Features */}
                {project.features && (
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>Key Features</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-primary">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                )}

                {/* Project Links */}
                {project.links && project.links.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                        {project.links.map((link, index) => (
                            <Button key={index} asChild variant="default">
                                <Link href={link.href} target="_blank" className="gap-2">
                                    {link.type === "Website" && <ExternalLink className="w-4 h-4" />}
                                    {link.type === "GitHub" && <Github className="w-4 h-4" />}
                                    {link.type}
                                </Link>
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
    const project = projectsData.find(p => p.slug === params.slug);

    if (!project) {
        return {
            title: 'Project Not Found'
        };
    }

    return {
        title: `${project.title} | Your Portfolio`,
        description: project.description,
    };
}

// Generate static paths for all projects
export async function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }));
}