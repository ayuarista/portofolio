import { notFound } from 'next/navigation';
import { projectsData } from '@/app/project-detail/data';
import { MdOutlineDateRange } from "react-icons/md";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
        <div className="min-h-screen py-8">
            <div className="container mx-auto px-4 max-w-4xl">
                <Button variant="ghost" asChild className="mb-8">
                    <Link href="/" className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </Button>

                <div className="mb-8">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-2">{project.title}</h1>
                    <div className="flex gap-2 items-center">
                        <MdOutlineDateRange className="size-5 text-muted-foreground" />
                        <p className="text-sm md:text-base text-muted-foreground">{project.dates}</p>
                    </div>
                </div>

                {project.image && (
                    <div className="mb-8">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={400}
                            className="w-full h-64 md:h-80 object-cover rounded-lg"
                        />
                    </div>
                )}

                <div>
                    <h1 className='text-xl font-bold text-primary'>About this project</h1>
                    <p className="text-[15px]/6 text-muted-foreground mt-2 text-justify">{project.description}</p>
                </div>

                <div className="flex items-start justify-between gap-5 mt-5">
                    <div className='mt-2'>
                        <div className="flex items-center gap-2">
                            <h1 className='text-lg font-bold text-primary'>Role:</h1>
                            <h1 className='text-primary font-bold'>{project.role}</h1>
                        </div>
                        {project.listrole && (
                            <ul className="list-disc mt-1 text-muted-foreground pl-4 text-[16px]">
                                {project.listrole.map((role) => (
                                    <li key={role}>{role}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {project.features && (
                        <div className="mt-3">
                            <h1 className='font-bold text-primary text-xl'>Features: </h1>
                            <ul className="list-disc mt-1 pl-4 text-base text-muted-foreground">
                                {project.features.map((feature, index) => (
                                    <li key={index}>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {project.technologies && (
                    <div className='mt-5 flex items-center gap-2'>
                        <h1 className='font-bold text-primary'>Techologies:</h1>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}

                {project.links && project.links.length > 0 && (
                    <div className="flex flex-wrap gap-4 mt-8">
                        {project.links.map((link, index) => (
                            <Button key={index} asChild variant="default">
                                <Link href={link.href} target="_blank" className="gap-2">
                                    {link.type === "Website" && <ExternalLink className="w-4 h-4" />}
                                    {link.type === "Source Code" && <Github className="w-4 h-4" />}
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

export async function generateMetadata({ params }: PageProps) {
    const project = projectsData.find(p => p.slug === params.slug);

    if (!project) {
        return {
            title: 'Project Not Found'
        };
    }

    return {
        title: `${project.title}`,
        description: project.description,
    };
}

export async function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }));
}