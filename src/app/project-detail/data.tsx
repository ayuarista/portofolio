export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    fullDescription: string;
    dates: string;
    tags: string[];
    image?: string;
    video?: string;
    links?: {
      icon: React.ReactNode;
      type: string;
      href: string;
    }[];
    technologies: string[];
    features: string[];
  }
  
  export const projectsData: Project[] = [
    {
      id: "1",
      slug: "finding-jobs-website",
      title: "Finding Jobs Website",
      description: "Modern e-commerce platform with React and Next.js",
      fullDescription: "A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
      dates: "Jan 2024 - Mar 2024",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      image: "/project/find-jobs.png",
      technologies: ["React", "Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      features: [
        "User authentication and authorization",
        "Product catalog with search and filters",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Admin dashboard for inventory management"
      ],
      links: [
        {
          icon: "🌐",
          type: "Website",
          href: "https://demo.example.com"
        },
        {
          icon: "💻",
          type: "GitHub",
          href: "https://github.com/username/ecommerce"
        }
      ]
    }
  ];