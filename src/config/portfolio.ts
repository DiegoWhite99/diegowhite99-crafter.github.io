import { Icon } from "lucide-react";

export interface PortfolioConfig {
  // Personal Information
  personal: {
    name: string;
    title: string;
    subtitle: string;
    greeting: string;
    profilePhoto: string;
    cvUrl?: string;
  };

  // Contact Information
  contact: {
    email: string;
    phone: string;
    location: string;
    social: {
      github: string;
      linkedin: string;
      twitter?: string;
      instagram?: string;
    };
  };

  // About Section
  about: {
    description: string;
    experience: string;
    highlights: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };

  // Projects
  projects: Array<{
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    demo: string;
  }>;

  // Skills
  skills: {
    categories: Array<{
      title: string;
      skills: Array<{
        name: string;
        level: number;
      }>;
    }>;
    technologies: string[];
  };

  // Footer
  footer: {
    copyright: string;
    builtWith: string;
  };

  // Meta Information
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Language-specific content
const content = {
  en: {
    personal: {
      name: "Diego Castelblanco",
      title: "Software Development Tech",
      subtitle: "Building ideas with code",
      greeting: "Hello, I'm",
      profilePhoto: "/profile-photo.jpg",
      cvUrl: "https://drive.google.com/file/d/1hCoFynTKI_LNmBKT32-1mRxnbZiNPkw4/view?usp=sharing"
    },
    about: {
      description: "Software Development Technologist and Systems Engineering student with experience in frontend web development, backend scripting with Python, and data processing using ETL workflows. I have built and deployed web projects using modern development practices, Linux-based environments, and Git version control, focusing on clarity, scalability, and maintainability.",
      experience: "My journey in software development started with a curiosity about how systems and applications work behind the scenes. Today, as a Systems Engineering student, I build web applications and software solutions through hands-on projects, focusing on clean code, continuous learning, and turning ideas into functional digital products.",
      highlights: [
        {
          icon: "Code2",
          title: "2 Years",
          description: "Experience"
        },
        {
          icon: "Users",
          title: "5 Projects",
          description: "projects"
        },
        {
          icon: "Lightbulb",
          title: "Modern Tech",
          description: "tech"
        },
        {
          icon: "Award",
          title: "Quality Focus",
          description: "learning"
        }
      ]
    },
    projects: [
      {
        title: "Web Site Portfolio",
        description: "Commercial portfolio of certified work-at-height courses.",
        image: "/project-website.png",
        technologies: ["Html", "Css", "JavaScript","Tailwind CSS"],
        github: "https://github.com/smed-technology/ajuliettealturas.com",
        demo: "https://ajuliettealturas.com"
      },
      {
        title: "SMED Technology Website",
        description: "Design and development of the SMED Technology website, currently under construction, featuring contact, e-commerce, and process integration through GLPI",
        image: "/project-smed.jpg",
        technologies: ["Html", "Css", "JavaScript","Tailwind CSS","node.js","mysql","GLPI","bootstrap"],
        github: "https://github.com/DiegoWhite99/SMED-TECHNOLOGY",
      },
      {
        title: "Agricultural recommendation system project for associations",
        description: "This project focuses on developing a recommendation system to help small farmers in rural areas of Boyacá connect with agricultural associations, enabling access to fair market opportunities, training, and sustainable economic growth.",
        image: "project-agricultural.png",
        technologies: ["Python", "ETL", "Data Analysis", "pandas","NumPy","Matplotlib","skelearn","matplotlib"],
        github: "https://colab.research.google.com/drive/1YmMVqwUCMd5Io9NIrRBbIvrLUIn_uLcv?usp=sharing",
        demo: "https://colab.research.google.com/drive/1YmMVqwUCMd5Io9NIrRBbIvrLUIn_uLcv?usp=sharing"
      }
    ],
      skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "JavaScript", level: 50 },
            { name: "TypeScript", level: 50 },
            { name: "Tailwind CSS", level: 30 },
            { name: "Html", level: 80 },
            { name: "Css", level: 70 }
          ]
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 40 },
            { name: "Python", level: 55},
            { name: "SQL", level: 45},
            { name: "Linux", level: 70 },
            { name: "Git", level: 65 }
          ]
        },
        {
          title: "Herramientas y Otros",
          skills: [
            { name: "AWS", level: 30},
            { name: "Docker", level: 25 }
            
          ]
        }
      ],
      technologies: [
        "TypeScript", "Node.js", "AWS","Worbench",
        "Tailwind CSS","Python","JavaScript","Html","Css"
      ]
    },
    meta: {
      title: "Diego Castelblanco - Software Engineer",
      description: "Personal portfolio of Diego Castelblanco, a system engineerspecializing in React, TypeScript, and modern web technologies.",
      keywords: ["software engineer", "react", "typescript", "web development", "portfolio"]
    }
  },
  es: {
    personal: {
      name: "Diego Castelblanco",
      title: "Tecnólogo en Desarrollo de Software",
      subtitle: "Construyendo ideas con codigo",
      greeting: "Hola, soy",
      profilePhoto: "/profile-photo.jpg",
      cvUrl: "https://drive.google.com/file/d/1hCoFynTKI_LNmBKT32-1mRxnbZiNPkw4/view?usp=sharing"
    },
    about: {
      description: "Soy estudiante de Ingeniería de Sistemas y Tecnólogo en Desarrollo de Software, con experiencia en el desarrollo de aplicaciones web y soluciones digitales. Me enfoco en la creación de interfaces funcionales utilizando HTML, CSS y JavaScript, y cuento con bases en lógica backend con Python y SQL",
      experience: "Mi camino en el desarrollo de software comenzó con la curiosidad por entender cómo funcionan los sistemas detrás de escena. Actualmente desarrollo proyectos reales, transformando ideas en soluciones digitales bien estructuradas, con énfasis en el aprendizaje continuo, el código limpio y la mantenibilidad.",
      highlights: [
        {
          icon: "Code2",
          title: "2 Años",
          description:"Experience"
        },
        {
          icon: "Users",
          title: "5 Proyectos",
          description: "projects"
        },
        {
          icon: "Lightbulb",
          title: "Tecnología Moderna",
          description: "tech"
        },
        {
          icon: "Award",
          title: "Enfoque en Calidad",
          description: "learning"
        }
      ]
    },
    projects: [
      {
        title: "Plataforma de E-Commerce",
        description: "Una plataforma de e-commerce completa construida con React, TypeScript e integración de Stripe. Incluye catálogo de productos, carrito de compras, procesamiento de pagos y panel de administración.",
        image: "/project-website.png",
        technologies: ["React", "TypeScript", "Node.js", "Stripe", "MongoDB"],
        github: "https://github.com/joanesmith/ecommerce",
        demo: "https://ecommerce-demo.vercel.app"
      },
      {
        title: "Dashboard de Gestión de Proyectos",
        description: "Una herramienta completa de gestión de proyectos con seguimiento de tareas, colaboración en equipo y actualizaciones en tiempo real. Construida con patrones modernos de React y gestión de estado.",
        image: "/project-smed.jpg",
        technologies: ["React", "Redux", "Chart.js", "Socket.io", "Express"],
        github: "https://github.com/joanesmith/pm-dashboard",
        demo: "https://pm-dashboard.vercel.app"
      },
      {
        title: "Aplicación de Banca Móvil",
        description: "Una aplicación de banca móvil segura con autenticación biométrica, historial de transacciones e insights financieros. Optimizada para rendimiento y seguridad.",
        image: "project-agricultural.png",
        technologies: ["React Native", "TypeScript", "Firebase", "Biometrics", "Chart.js"],
        github: "https://github.com/joanesmith/mobile-banking",
        demo: "https://banking-app-demo.vercel.app"
      }
    ],
    skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "JavaScript", level: 50 },
            { name: "TypeScript", level: 50 },
            { name: "Tailwind CSS", level: 30 },
            { name: "Html", level: 80 },
            { name: "Css", level: 70 }
          ]
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 40 },
            { name: "Python", level: 55},
            { name: "SQL", level: 45},
            { name: "Linux", level: 70 },
            { name: "Git", level: 65 }
          ]
        },
        {
          title: "Herramientas y Otros",
          skills: [
            { name: "AWS", level: 30},
            { name: "Docker", level: 25 }
            
          ]
        }
      ],
      technologies: [
        "TypeScript", "Node.js", "AWS","Worbench",
        "Tailwind CSS","Python","JavaScript","Html","Css"
      ]
    },
    meta: {
      title: "Diego Castelblanco - Ingeniera de Software",
      description: "Portfolio personal de Diego Castelblanco, una ingeniera de software especializada en React, TypeScript y tecnologías web modernas.",
      keywords: ["ingeniera de software", "react", "typescript", "desarrollo web", "portfolio"]
    }
  }
};

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Diego Castelblanco",
    title: "Software Engineer",
    subtitle: "Building elegant solutions with modern technologies",
    greeting: "Hello, I'm",
    profilePhoto: "/profile-photo.gif",
    cvUrl: "/path-to-cv.pdf"
  },

  contact: {
    email: "diegofer.cas.99@gmail.com",
    phone: "+57 (319) 6946997",
    location: "Bogotá, Colombia",
    social: {
      github: "https://github.com/DiegoWhite99",
      linkedin: "https://linkedin.com/in/diegowhite99",
      twitter: "https://x.com/99Diegofer",
      instagram: "https://instagram.com/diego.castelblanco"
    }
  },

  about: {
    description: "I'm a passionate system engineerwith over 5 years of experience building web applications and digital solutions. I specialize in React, TypeScript, and modern web technologies, with a focus on creating user-friendly, scalable, and maintainable applications.",
    experience: "My journey in software development started with a curiosity about how things work behind the scenes. Today, I help businesses transform their ideas into digital reality, working with cross-functional teams to deliver high-quality software solutions.",
    highlights: [
      {
        icon: "Code2",
        title: "5+ Years",
        description: "Professional Experience"
      },
      {
        icon: "Users",
        title: "20+ Projects",
        description: "Successfully Delivered"
      },
      {
        icon: "Lightbulb",
        title: "Modern Tech",
        description: "Latest Technologies"
      },
      {
        icon: "Award",
        title: "Quality Focus",
        description: "Best Practices"
      }
    ]
  },

  projects: [
    {
      title: "Web Site Portafolio",
      description: "Commercial portfolio of certified work-at-height courses",
      image: "/project-website.png",
      technologies: ["React", "TypeScript", "Node.js", "Stripe", "MongoDB"],
      github: "https://github.com/joanesmith/ecommerce",
      demo: "https://ecommerce-demo.vercel.app"
    },
    {
      title: "Project Management Dashboard",
      description: "A comprehensive project management tool with task tracking, team collaboration, and real-time updates. Built with modern React patterns and state management.",
      image: "/project-smed.jpg",
      technologies: ["React", "Redux", "Chart.js", "Socket.io", "Express"],
      github: "https://github.com/joanesmith/pm-dashboard",
      demo: "https://pm-dashboard.vercel.app"
    },
    {
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, transaction history, and financial insights. Optimized for performance and security.",
      image: "project-agricultural.png",
      technologies: ["React Native", "TypeScript", "Firebase", "Biometrics", "Chart.js"],
      github: "https://github.com/joanesmith/mobile-banking",
      demo: "https://banking-app-demo.vercel.app"
    }
  ],

  skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "JavaScript", level: 50 },
            { name: "TypeScript", level: 50 },
            { name: "Tailwind CSS", level: 30 },
            { name: "Html", level: 80 },
            { name: "Css", level: 70 }
          ]
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 40 },
            { name: "Python", level: 55},
            { name: "SQL", level: 45},
            { name: "Linux", level: 70 },
            { name: "Git", level: 65 }
          ]
        },
        {
          title: "Herramientas y Otros",
          skills: [
            { name: "AWS", level: 30},
            { name: "Docker", level: 25 }
            
          ]
        }
      ],
      technologies: [
        "TypeScript", "Node.js", "AWS","Worbench",
        "Tailwind CSS","Python","JavaScript","Html","Css"
      ]
    },

  footer: {
    copyright: "All rights reserved.",
    builtWith: "Built with using React & TypeScript"
  },

  meta: {
    title: "Diego Castelblanco - Software Engineer",
    description: "Personal portfolio of Diego Castelblanco, a system engineerspecializing in React, TypeScript, and modern web technologies.",
    keywords: ["software engineer", "react", "typescript", "web development", "portfolio"]
  }
};

// Export the content for use in components
export { content }; 