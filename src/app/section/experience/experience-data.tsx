import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { TbWorldShare } from "react-icons/tb";
export const data = [
    {
        id: 1,
        title: "Winning 2nd Website design at Timedoor",
        description: "I participated in a national web design competition held by Timedoor Academy - PT Timedoor Indonesia. I got 2nd place from this Website Design competition. I created a website called 'Herecycle' that aims to raise awareness about recycling and environmental conservation. The website provides information about recycling, tips for reducing waste, and a platform for users to find out more about 3R systems.",
        dates: "22 June - 23 June 2024",
        image: "/timedoor.png",
        links: [
            {
                icon: <GitHubLogoIcon/>,
                title: "Source Code",
                href: "https://github.com/ayuarista/Herecycle",

            },
            {
                icon: <TbWorldShare />,
                title: "Website",
                href: "https://herecycle.netlify.app/",
            }
        ],
        tech: ["HTML", "CSS", "JS"],
        role: ["UI/UX Designer", "Front-End Developer"],
    },
    {
        id: 2,
        title: "Finalist UI Design at Primakara University",
        initial: "P",
        description: "I participated in a UI Design competition held by Primakara University. I was selected as one of the finalists in this competition. This experience helped me improve my design skills and gain valuable insights into user interface design. I created a website design called 'URmental' that focuses on mental health awareness and support. The website provides resources, articles, and a platform for users to connect with mental health professionals and communities.",
        dates: "April 2025 - June 2025",
        image: "/primakara.png",
        tech: ["Figma", "Canva"],
        role: ["UI/UX Designer"],
    },
    {
        id: 3,
        initial: "AS",
        title: "Participated Internship at PT ASANKA",
        description: "During my 3 months internship at PT ASANKA, I learned a lot. These experiences helped me grow both technically and creatively, and strengthened my interest in front-end and back-end development. I worked on various projects, including web development, and UI/UX design. I learn to use various technologies such as WordPress, Laravel, Alpine.js, and others.",
        dates: "26 December 2024 - 13 Maret 2025",
        tech: ['WordPress', 'Laravel', 'Alpine.js', 'Tailwind CSS', 'Figma', 'React.js'],
        role: ['Front-End Developer', 'UI/UX Designer', 'Back-End Developer'],
        
    },
    {
        id: 4,
        title: "Winning Favorite Web Design at IndoApps",
        description: "I participated in a national web design competition held by IndoApps. I got the Favorite Web Design award from this competition, with my project name 'Nusa Kita' which is a website that showcases the rich culture and traditions of Indonesia. The website provides information about various aspects of Indonesian culture, including traditional clothing, cuisine, festivals, and more. It aims to promote cultural awareness and appreciation among users.",
        dates: "May 2025",
        image: "/indoapps.jpg",
        links: [
            {
                icon: <GitHubLogoIcon/>,
                title: "Source Code",
                href: "https://github.com/ayuarista/indonesia-culture",
            },
            {
                icon: <TbWorldShare />,
                title: "Website",
                href: "https://nusa-kita.netlify.app/",
            }
        ],
        tech: ["React.js", "Tailwind.css"],
        role: ["Front-End Developer"],
    },
    {
        id: 5,
        initial: "T",
        title: "Participated in UI/UX Bootcamp held by Telkom Digiup",
        description: "I joined the bootcamp organized by Telkom Digiup. By participating in this bootcamp, I increased my UI/UX Design skills. Among 15,000 nationwide applicants, I was selected as one of 1,000 participants. I learned about user research, wireframing, prototyping, and usability testing. I also had the opportunity to work on a project that involved designing a user-friendly interface for a mobile application.",
        role: ["UI/UX Designer"],
        tech: ["Figma"],
        dates: "01 June 2024 - 07 June 2024",
        image: "/telkom.png",
    },
    {
        id: 6,
        title: "Students of Software Engineering major at SMK Negeri 1 Denpasar school",
        description: "As a dedicated eleventh-grade student in Software Engineering at Vocational High School, I am passionate about web development and actively expanding my technical skills in front-end technologies. ",
        dates: "Study year 2023-2026",
        image: "/skensa.png",
    },
    {
        id: 7,
        title: "Participated in more 4+ Web Design Competitions",
        initial: "4+",
        description: "As an aspiring front-end developer, I have actively participated in multiple web design competitions, leveraging these opportunities to enhance my technical skills and design proficiency. I have competed in over 4+ web design competitions, where I applied my knowledge of HTML, CSS, and JavaScript to create innovative and user-friendly websites. These experiences have not only improved my coding abilities but also deepened my understanding of user experience and interface design. I am committed to continuous learning and growth in the field of web development, and I look forward to applying my skills in future projects and competitions.",
        tech: ["HTML", "CSS", "JS", "MySQL", "PHP"],
        role: ["Front-End Developer", "UI/UX Designer", "Back-End Developer"],
        dates: "2023 - Now"
    }
]