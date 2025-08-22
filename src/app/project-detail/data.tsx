
export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  dates: string;
  role: string;
  listrole: string[];
  image?: string;
  video?: string;
  links?: {
    type: string;
    href: string;
  }[];
  technologies: string[];
  features?: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    slug: "find-jobs",
    title: "Finding Jobs Website",
    role: "Frontend Developer and UI/UX Designer",
    listrole: [
      'Create the frontend using React.js and Tailwind CSS',
      'Design the UI/UX using Figma',
      'Create responsive design for mobile and desktop',
    ],
    description: "Finding Jobs is a website designed specifically, to help freelancers and users collaborate with each other.  Users can easily find top freelancers with the help of filters provided by the website. I created this website with my friend for a web design competition held by Darussalam Gontor University. I worked on the frontend while my friend worked on the backend. However, due to time constraints, we were unable to integrate the frontend and backend. We made it into the top 20 out of 40 teams.",
    dates: "January 2024 - March 2024",
    technologies: ["React.js", "Laravel", "Figma", "Tailwind.css", "DaisyUI"],
    image: "/project/find-jobs.png",
    features: [
      "User can find freelancers using filters",
      "User can create a job post",
      "User can view freelancer profiles",
    ],
    links: [
      {
        type: "Source Code",
        href: "https://github.com/aryndraa/find-job-lite"
      },
      {
        type: "Website",
        href: "https://find-job-lite.vercel.app/"
      }
    ],
  },
  {
    id: 2,
    slug: "course-era",
    title: "Course Programmer Online",
    role: "Frontend Developer and UI/UX Designer",
    listrole: [
      'Create the frontend using HTML, Alpine.js and Tailwind CSS',
      'Design the UI/UX using Figma',
      'Create responsive design for mobile and desktop',
    ],
    technologies: ["HTML", "Tailwind.css", "Alpine.js", "Figma"],
    description: "Course era is a website that provides online courses for programmers. The website offers a variety of courses, including web development, data science, and machine learning. I created this website as a personal project to improve my frontend skills and learn more about UI/UX design while I internship at PT ASANKA. I designed the UI/UX using Figma and implemented the frontend using HTML, Alpine.js, and Tailwind CSS. The website is fully responsive and works well on both mobile and desktop devices.",
    dates: "March 2025",
    image: "/project/course-era.png",
    links: [
      {
        type: "Source Code",
        href: "https://github.com/ayuarista/CourseEra"
      },
      {
        type: "Website",
        href: "https://course-era.netlify.app/"
      }
    ],
  },
  {
    id: 3,
    slug: "baliwoosh",
    title: "Baliwoosh Tourism Website",
    role: "Frontend Developer and UI/UX Designer",
    listrole: [
      'Create the frontend using React.js, DaisyUI and Tailwind CSS',
      'Design the UI/UX using Figma',
      'Create responsive design for mobile and desktop',
    ],
    technologies: ["React.js", "Tailwind.css", "Alpine.js", "Figma", "DaisyUI"],
    description: "Baliwoosh is a guide website for tourists to find popular places in Bali. Baliwoosh website provides destinations, staycations, and famous restaurants in Bali. I created this website when I participated in a web design competition at the Bali State Polytechnic. I created this website because many tourists still have difficulty finding tourist attractions. I designed the UI/UX using Figma and implemented the frontend using React.js, DaisyUI, and Tailwind CSS. The website is fully responsive and works well on both mobile and desktop devices.",
    features: [
      'User can find popular places in Bali',
      'User can find popular staycations in Bali',
      'User can find popular restaurants in Bali',
    ],
    dates: "August 2024 - October 2024",
    image: "/project/baliwoosh.png",
    links: [
      {
        type: "Source Code",
        href: "https://github.com/ayuarista/baliwoosh"

      },
      {
        type: "Website",
        href: "https://baliwoosh.netlify.app/"
      }
    ],
  },
  {
    id: 4,
    title: "TKJ Website Profile",
    slug: "tkj-website-profile",
    role: "Frontend Developer and UI/UX Designer",
    listrole: [
      'Create the frontend using React.js, DaisyUI and Tailwind CSS',
      'Design the UI/UX using Figma',
      'Create responsive design for mobile and desktop',
    ],
    technologies: ["React.js", "Tailwind.css", "Alpine.js", "Figma", "DaisyUI"],
    description: "TKJ Website Profile is a website that provides information about the Computer and Network Engineering (TKJ) program at SMK Negeri 1 Denpasar. This website is my P5 assignment given by the school. I worked on this website project with two of my friends. I was the team lead, frontend developer, and UI/UX designer. In this website, you can see the profile of the TKJ program, the list of students, and the list of teachers. I designed the UI/UX using Figma and implemented the frontend using React.js, DaisyUI, and Tailwind CSS. The website is fully responsive and works well on both mobile and desktop devices.",
    features: [
      'User can see the profile of the TKJ program',
      'User can see the list of students',
      'User can see the list of teachers',
    ],
    dates: "November 2024",
    image: "/project/tkj.png",
    links: [
      {
        type: "Source Code",
        href: "https://github.com/ayuarista/web-profile-tkj"
        
      },
      {
        type: "Website",
        href: "https://web-profile-tkj.netlify.app/"
      }
    ],
  },
  {
    id: 5,
    title: "Echolife Website",
    slug: "echolife",
    role: "Frontend Developer",
    listrole: [
      'Create the frontend using React.js, and Tailwind CSS',
      'Create responsive design for mobile and desktop',
      'Collaborate with UI/UX designer to create the design',

    ],
    technologies: ["React.js", "Tailwind.css", "Figma", "DaisyUI"],
    description: "Echolife Website is a dedicated website to provide insight to people about the dangers of waste that is not use system reuse, reduce, and recycle. I collaborated with my UI/UX friend to create this website. This website was created when my friends and I participated in the INVOFEST web design competition, held by Politeknik Harapan Bersama. In this echolife website, it explained as clearly as possible what impacts can be caused if humans are not immediately sensitive to recycling waste.",

    features: [
      'Quiz to test user knowledge about waste',
      'User can see the dangers of waste',
      'Calculate the amount of waste produced by the user',
    ],
    dates: "August 2024 - October 2024",
    image: "/project/echo-life.png",
    links: [
      {
        type: "Source Code",
        href: "https://github.com/ayuarista/echolife"

        
      },
      {
        type: "Website",
        href: "https://echolife.netlify.app/"
      }
    ],
  },
  {
    id: 6,
    title: "Nusa Kita Indonesia Culture",
    slug: "nusa-kita",
    role: "Frontend Developer",
    listrole: [
      'Create the frontend using React.js, and Tailwind CSS',
      'Create responsive design for mobile and desktop',
    ],
    technologies: ["React.js", "Tailwind.css", "DaisyUI"],
    description: "Nusa Kita is a website that showcases the rich culture of Indonesia. The website provides information about various cultural aspects, including traditional dances, music, and art from different regions of Indonesia. In this website, I add some features like quiz to test user knowledge about Indonesian culture, information about awards. I create this website, when I and my UI/UX friends participated in the web development competition held by PT IndoApps. We winning favorite award in this competition. I designed the UI/UX using Figma and implemented the frontend using React.js, DaisyUI, and Tailwind CSS. The website is fully responsive and works well on both mobile and desktop devices.",

    features: [
      'Quiz to test user knowledge about Indonesian culture',
      'Information about awards',
      'User can see the list of traditional dances, music, and art from different regions of Indonesia',
    ],
    dates: "January 2025 - March 2025",
    image: "/project/nusa-kita.png",
    links: [
      {
        type: "Source Code",
        href: "https://github.com/ayuarista/indonesia-culture"

        
      },
      {
        type: "Website",
        href: "https://nusa-kita.netlify.app/"

      }
    ],
  },
];