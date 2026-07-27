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
    image?: string;
    technologies: string[];
    github: string;
    demo?: string;
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
      title: "Systems Engineer",
      subtitle: "Building ideas with code, automation, and AI",
      greeting: "Hello, I'm",
      profilePhoto: "/profile-photo.jpeg",
      cvUrl: "https://drive.google.com/file/d/11uOBl2ulEVZqe71xG5nPw0Mq2UtiyItg/view?usp=drive_link"
    },
    about: {
      description: "Systems Engineer with experience in frontend and backend web development, IT support, Linux systems administration, databases, and automation. Currently working as an AI Agent at Divergency IA – CUN, developing applied robotics and AI projects with ROS 2, computer vision (ORB-SLAM3), and conversational AI integrated into robotic platforms (Unitree Go2).",
      experience: "My journey in software development started with a curiosity about how systems and applications work behind the scenes. Today, as a Systems Engineer, I build web applications, automation pipelines, and AI-driven robotics projects — always focused on clarity, scalability, and practical results.",
      highlights: [
        {
          icon: "Code2",
          title: "3+ Years",
          description: "Experience"
        },
        {
          icon: "Users",
          title: "8 Projects",
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
        title: "Ajuliette Alturas",
        description: "Commercial portfolio of certified work-at-height courses.",
        image: "/project-website.png",
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        github: "https://github.com/smed-technology/ajuliettealturas.com",
        demo: "https://ajuliettealturas.com"
      },
      {
        title: "Robotics & Applied AI — Unitree Go2",
        description: "SLAM and autonomous navigation project with the Unitree Go2 robot. Configured ORB-SLAM3 on ROS 2 Humble for real-time mapping and localization, and integrated conversational AI into the robotic platform via WebRTC.",
        image: "/unitree.webp",
        technologies: ["ROS 2", "ORB-SLAM3", "WebRTC", "Python", "Linux"],
        github: "https://github.com/DiegoWhite99/Unitreego2",
        demo: "#"
      },
      {
        title: "Internal Services Server — SMED Technology",
        description: "Deployed and maintain a self-hosted Linux server (CasaOS) running Docker, n8n, Ollama, and MariaDB, with secure remote access via Tailscale — powering internal automation and a custom Telegram AI agent.",
        image: "/smedblog.png",
        technologies: ["Linux", "Docker", "n8n", "Ollama", "Tailscale"],
        github: "https://github.com/DiegoWhite99/CRM-SMED",
        demo: "#"
      },
      {
        title: "SMED Technology Website",
        description: "Design and development of the SMED Technology website, featuring contact, e-commerce, and process integration through GLPI",
        image: "/project-smed.jpg",
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Node.js", "MySQL", "GLPI"],
        github: "https://github.com/DiegoWhite99/SMED-TECHNOLOGY",
      },
      {
        title: "ETL — Data Analysis Pipeline",
        description: "An ETL pipeline built with Python and SQL to extract, transform, and load data for analysis — automating cleanup and reporting over structured datasets.",
        image: "/etl.jpg",
        technologies: ["Python", "SQL", "Pandas", "ETL"],
        github: "https://github.com/DiegoWhite99/ETL",
      },
      {
        title: "Kenko Wellness",
        description: "Web platform for a health and martial-arts wellness project, built with Laravel (Blade) — memberships, class scheduling, and a clean member-facing experience.",
        technologies: ["Laravel", "PHP", "Blade", "MySQL"],
        github: "https://github.com/DiegoWhite99/Kenko-Wellness",
      },
      {
        title: "SMED Chatbot",
        description: "A conversational chatbot for SMED Technology that automates customer inquiries and support flows, integrating scripted and AI-assisted responses.",
        technologies: ["JavaScript", "Node.js", "Chatbot", "Automation"],
        github: "https://github.com/DiegoWhite99/ChatBoot-Smed",
      },
      {
        title: "Bank UI — Frontend Simulation",
        description: "A responsive web interface simulating an online banking dashboard, focused on layout, componentization, and a polished, accessible UI.",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/DiegoWhite99/Banco-C-T",
      }
    ],
      skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "JavaScript", level: 70 },
            { name: "TypeScript", level: 65 },
            { name: "React", level: 60 },
            { name: "Tailwind CSS", level: 75 },
            { name: "HTML", level: 85 },
            { name: "CSS", level: 80 }
          ]
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 60 },
            { name: "Python", level: 75},
            { name: "PostgreSQL / SQL", level: 55},
            { name: "Linux", level: 80 },
            { name: "Git", level: 75 }
          ]
        },
        {
          title: "Tools",
          skills: [
            { name: "Docker", level: 50},
            { name: "AWS", level: 35},
            { name: "n8n", level: 60 },
            { name: "Tailscale", level: 55 }
          ]
        },
        {
          title: "Robotics & AI",
          skills: [
            { name: "ROS 2", level: 45},
            { name: "ORB-SLAM3", level: 40},
            { name: "WebRTC", level: 50},
            { name: "Computer Vision", level: 45}
          ]
        }
      ],
      technologies: [
        "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "ROS 2", "ORB-SLAM3", "Linux", "Tailwind CSS", "JavaScript", "n8n", "Tailscale"
      ]
    },
    meta: {
      title: "Diego Castelblanco - Systems Engineer",
      description: "Personal portfolio of Diego Castelblanco, a Systems Engineer specializing in web development, automation, and applied AI/robotics (ROS 2, computer vision, conversational AI).",
      keywords: ["systems engineer", "software development", "robotics", "AI", "ROS2", "automation", "react", "typescript", "web development", "portfolio"]
    }
  },
  es: {
    personal: {
      name: "Diego Castelblanco",
      title: "Ingeniero de Sistemas",
      subtitle: "Construyendo ideas con código, automatización e IA",
      greeting: "Hola, soy",
      profilePhoto: "/profile-photo.jpeg",
      cvUrl: "https://drive.google.com/file/d/11uOBl2ulEVZqe71xG5nPw0Mq2UtiyItg/view?usp=drive_link"
    },
    about: {
      description: "Ingeniero de Sistemas con experiencia en desarrollo web frontend y backend, soporte IT, administración de sistemas Linux, bases de datos y automatización. Actualmente trabajo como AI Agent en Divergency IA – CUN, desarrollando proyectos aplicados de robótica e IA con ROS 2, visión por computadora (ORB-SLAM3) e IA conversacional integrada en plataformas robóticas (Unitree Go2).",
      experience: "Mi camino en el desarrollo de software comenzó con la curiosidad por entender cómo funcionan los sistemas detrás de escena. Hoy, como Ingeniero de Sistemas, construyo aplicaciones web, pipelines de automatización y proyectos de robótica impulsados por IA — siempre enfocado en claridad, escalabilidad y resultados prácticos.",
      highlights: [
        {
          icon: "Code2",
          title: "3+ Años",
          description:"Experience"
        },
        {
          icon: "Users",
          title: "8 Proyectos",
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
        title: "Ajuliette Alturas",
        description: "Portafolio profesional para vendedora de cursos certificados de trabajo en alturas, orientado a la presentación clara de la oferta formativa y al fortalecimiento del proceso comercial.",
        image: "/project-website.png",
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        github: "https://github.com/smed-technology/ajuliettealturas.com",
        demo: "https://ajuliettealturas.com"
      },
      {
        title: "Robótica e IA Aplicada — Unitree Go2",
        description: "Proyecto de SLAM y navegación autónoma con el robot Unitree Go2. Configuré ORB-SLAM3 en ROS 2 Humble para mapeo y localización en tiempo real, e integré IA conversacional en la plataforma robótica a través de WebRTC.",
        image: "/unitree.webp",
        technologies: ["ROS 2", "ORB-SLAM3", "WebRTC", "Python", "Linux"],
        github: "https://github.com/DiegoWhite99/Unitreego2",
        demo: "#"
      },
      {
        title: "Servidor de Servicios Internos — SMED Technology",
        description: "Servidor Linux autohospedado (CasaOS) ejecutando Docker, n8n, Ollama y MariaDB, con acceso remoto seguro a través de Tailscale — potenciando automatización interna y un agente de IA personalizado en Telegram.",
        image: "/smedblog.png",
        technologies: ["Linux", "Docker", "n8n", "Ollama", "Tailscale"],
        github: "https://github.com/DiegoWhite99/CRM-SMED",
        demo: "#"
      },
      {
        title: "SMED Technology Website",
        description: "Diseño y desarrollo del sitio web de SMED Technology, con funcionalidades de contacto, comercio electrónico e integración de procesos a través de GLPI",
        image: "/project-smed.jpg",
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Node.js", "MySQL", "GLPI"],
        github: "https://github.com/DiegoWhite99/SMED-TECHNOLOGY",
      },
      {
        title: "ETL — Pipeline de Análisis de Datos",
        description: "Un pipeline ETL construido con Python y SQL para extraer, transformar y cargar datos para su análisis — automatizando la limpieza y los reportes sobre conjuntos de datos estructurados.",
        image: "/etl.jpg",
        technologies: ["Python", "SQL", "Pandas", "ETL"],
        github: "https://github.com/DiegoWhite99/ETL",
      },
      {
        title: "Kenko Wellness",
        description: "Plataforma web para un proyecto de salud y artes marciales, construida con Laravel (Blade) — membresías, agenda de clases y una experiencia limpia para los miembros.",
        technologies: ["Laravel", "PHP", "Blade", "MySQL"],
        github: "https://github.com/DiegoWhite99/Kenko-Wellness",
      },
      {
        title: "Chatbot SMED",
        description: "Un chatbot conversacional para SMED Technology que automatiza consultas y flujos de soporte al cliente, integrando respuestas guiadas y asistidas por IA.",
        technologies: ["JavaScript", "Node.js", "Chatbot", "Automatización"],
        github: "https://github.com/DiegoWhite99/ChatBoot-Smed",
      },
      {
        title: "UI Bancaria — Simulación Frontend",
        description: "Una interfaz web responsiva que simula el panel de un banco en línea, enfocada en el layout, la componentización y una UI pulida y accesible.",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/DiegoWhite99/Banco-C-T",
      }
    ],
    skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "JavaScript", level: 70 },
            { name: "TypeScript", level: 65 },
            { name: "React", level: 60 },
            { name: "Tailwind CSS", level: 75 },
            { name: "HTML", level: 85 },
            { name: "CSS", level: 80 }
          ]
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 60 },
            { name: "Python", level: 75},
            { name: "PostgreSQL / SQL", level: 55},
            { name: "Linux", level: 80 },
            { name: "Git", level: 75 }
          ]
        },
        {
          title: "Tools",
          skills: [
            { name: "Docker", level: 50},
            { name: "AWS", level: 35},
            { name: "n8n", level: 60 },
            { name: "Tailscale", level: 55 }
          ]
        },
        {
          title: "Robotics & AI",
          skills: [
            { name: "ROS 2", level: 45},
            { name: "ORB-SLAM3", level: 40},
            { name: "WebRTC", level: 50},
            { name: "Computer Vision", level: 45}
          ]
        }
      ],
      technologies: [
        "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "ROS 2", "ORB-SLAM3", "Linux", "Tailwind CSS", "JavaScript", "n8n", "Tailscale"
      ]
    },
    meta: {
      title: "Diego Castelblanco - Ingeniero de Sistemas",
      description: "Portfolio personal de Diego Castelblanco, Ingeniero de Sistemas especializado en desarrollo web, automatización e IA/robótica aplicada (ROS 2, visión por computadora, IA conversacional).",
      keywords: ["ingeniero de sistemas", "desarrollo de software", "robótica", "IA", "ROS2", "automatización", "react", "typescript", "desarrollo web", "portfolio"]
    }
  }
};

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Diego Castelblanco",
    title: "Systems Engineer",
    subtitle: "Building ideas with code, automation, and AI",
    greeting: "Hello, I'm",
    profilePhoto: "/profile-photo.jpeg",
    cvUrl: "/Diego_Fernando_Castelblanco_CV.pdf"
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
    description: "Systems Engineer with experience in frontend and backend web development, IT support, Linux systems administration, databases, and automation. Currently working as an AI Agent at Divergency IA – CUN, developing applied robotics and AI projects with ROS 2, computer vision (ORB-SLAM3), and conversational AI integrated into robotic platforms (Unitree Go2).",
    experience: "My journey in software development started with a curiosity about how systems and applications work behind the scenes. Today, as a Systems Engineer, I build web applications, automation pipelines, and AI-driven robotics projects — always focused on clarity, scalability, and practical results.",
    highlights: [
      {
        icon: "Code2",
        title: "3+ Years",
        description: "Professional Experience"
      },
      {
        icon: "Users",
        title: "8 Projects",
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
      title: "Ajuliette Alturas",
      description: "Commercial portfolio of certified work-at-height courses",
      image: "/project-website.png",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/smed-technology/ajuliettealturas.com",
      demo: "https://ajuliettealturas.com"
    },
    {
      title: "Robotics & Applied AI — Unitree Go2",
      description: "SLAM and autonomous navigation project with the Unitree Go2 robot. Configured ORB-SLAM3 on ROS 2 Humble for real-time mapping and localization, and integrated conversational AI into the robotic platform via WebRTC.",
      image: "/unitree.webp",
      technologies: ["ROS 2", "ORB-SLAM3", "WebRTC", "Python", "Linux"],
      github: "https://github.com/DiegoWhite99/Unitreego2",
      demo: "#"
    },
    {
      title: "Internal Services Server — SMED Technology",
      description: "Deployed and maintain a self-hosted Linux server (CasaOS) running Docker, n8n, Ollama, and MariaDB, with secure remote access via Tailscale — powering internal automation and a custom Telegram AI agent.",
      image: "/smedblog.png",
      technologies: ["Linux", "Docker", "n8n", "Ollama", "Tailscale"],
      github: "https://github.com/DiegoWhite99/CRM-SMED",
      demo: "#"
    }
  ],

  skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "JavaScript", level: 70 },
            { name: "TypeScript", level: 65 },
            { name: "React", level: 60 },
            { name: "Tailwind CSS", level: 75 },
            { name: "HTML", level: 85 },
            { name: "CSS", level: 80 }
          ]
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 60 },
            { name: "Python", level: 75},
            { name: "PostgreSQL / SQL", level: 55},
            { name: "Linux", level: 80 },
            { name: "Git", level: 75 }
          ]
        },
        {
          title: "Tools",
          skills: [
            { name: "Docker", level: 50},
            { name: "AWS", level: 35},
            { name: "n8n", level: 60 },
            { name: "Tailscale", level: 55 }
          ]
        },
        {
          title: "Robotics & AI",
          skills: [
            { name: "ROS 2", level: 45},
            { name: "ORB-SLAM3", level: 40},
            { name: "WebRTC", level: 50},
            { name: "Computer Vision", level: 45}
          ]
        }
      ],
      technologies: [
        "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "ROS 2", "ORB-SLAM3", "Linux", "Tailwind CSS", "JavaScript", "n8n", "Tailscale"
      ]
    },

  footer: {
    copyright: "All rights reserved.",
    builtWith: "Built with ❤️ using React & TypeScript"
  },

  meta: {
    title: "Diego Castelblanco - Systems Engineer",
    description: "Personal portfolio of Diego Castelblanco, a Systems Engineer specializing in web development, automation, and applied AI/robotics (ROS 2, computer vision, conversational AI).",
    keywords: ["systems engineer", "software development", "robotics", "AI", "ROS2", "automation", "react", "typescript", "web development", "portfolio"]
  }
};

// Export the content for use in components
export { content }; 