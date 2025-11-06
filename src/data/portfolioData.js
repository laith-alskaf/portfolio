import { Phone } from "lucide-react";

// Portfolio data for Anastasia - Flutter Developer
export const portfolioData = {
  personal: {
    name: "Eng Laith Alskaf",
    title: "Software Engineer",
    subtitle: " Mobile Applications Developer & Backend Developer",
    bio: "Dynamic Flutter Developer with over 3 years of experience building cross-platform mobile apps, and strong backend skills in Node.js and Clean Architecture. Passionate about creating user-friendly, scalable applications that solve real-world problems.",
    email: "laithalskaf@gmail.com",
    github: "https://github.com/laith-alskaf",
    linkedin: "https://www.linkedin.com/in/laith-alskaf-10a4b4339",
    location: "Sahnaya, Damascus, Syria",
    image: "https://res.cloudinary.com/debuadvrz/image/upload/v1752869322/laith_bccr2p.jpg",
    phone: '+963982055788'
  },
  education: [
    {
      degree: "College of Information Engineering",
      institution: "University of Homs",
      year: "2019-2024",
      description: "Bachelor’s Software Engineering"
    }
  ],
  certificates: [
    {
      title: "Flutter Mobile Development",
      issuer: "Internship Pakistan",
      year: "2024",
      description: "Completed advanced course on Flutter development with focus on state management, animations, and performance optimization.",
      image: "https://res.cloudinary.com/debuadvrz/image/upload/v1752869029/cert_in1gpt.png",
      credential: "UC-certificate-123"
    },
    {
      title: "Flutter Recommendation",
      issuer: "Darrebni Company",
      year: "2023",
      description: "Comprehensive course on backend architecture, RESTful APIs, and database integration with Node.js.",
      image: "https://res.cloudinary.com/debuadvrz/image/upload/v1752869021/photo_2023-10-18_18-42-38_lyxfyz.jpg",
      credential: "coursera-certificate-456"
    },
    {
      title: "Flutter Trainging",
      issuer: "Japan Syria Friendship Association",
      year: "2022",
      description: "Advanced principles of clean architecture for building scalable, maintainable applications.",
      image: "https://res.cloudinary.com/debuadvrz/image/upload/v1752869018/photo_2023-10-18_18-42-41_mi35o9.jpg",
      credential: "pluralsight-certificate-789"
    }
  ],
  skills: [
    { name: "Flutter", level: 95, category: "Mobile" },
    { name: "Dart", level: 90, category: "Language" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "TypeScript", level: 80, category: "Language" },
    { name: "MongoDB", level: 80, category: "Backend" },
    { name: "PostgreSQL", level: 75, category: "Backend" },
    { name: "Firebase", level: 80, category: "Backend" },
    { name: "Git & GitHub", level: 85, category: "Tools" },
    { name: "Clean Architecture", level: 80, category: "Mobile" },
    { name: "GetX / Bloc", level: 80, category: "Mobile" },
    { name: "REST APIs", level: 85, category: "Backend" },
    { name: "Swagger / Postman", level: 80, category: "Tools" },
    { name: "Docker", level: 30, category: "Tools" },
  ],

  projects: [
    {
      id: 1,
      title: "Purchase Management System | Private Project (Enterprise Use)",
      description: "A professional procurement management platform designed to streamline purchasing workflows within organizations. Built with Flutter (Clean Architecture, GetX, Dio) for a modern, cross-platform frontend (Windows & Android) and Node.js (TypeScript, Express, PostgreSQL) for a scalable backend. The system implements a full role-based approval workflow, including General Manager, Finance Manager, Procurement Manager, and Assistant roles. It supports purchase requests, vendor and item management, detailed tracking, and reporting — all through a clean, intuitive interface optimized for maintenance and future expansion.",
      technologies: ["Flutter (Clean Architecture, GetX, Dio)",
        "Node.js (TypeScript, Express)",
        "PostgreSQL", "Firebase"],
      liveDemo: "",
      github: "",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Backend",
      description: "Scalable and secure e-commerce backend using Node.js, TypeScript, MongoDB, PostgreSQL, JWT, and Clean Architecture. Includes authentication, product management, wishlist, and Swagger/Postman documentation.",
      technologies: ["Node.js", "TypeScript", "MongoDB", "JWT", "Swagger", "Firebase"],
      liveDemo: "https://ecommerce-backend-clean-architecture.vercel.app/api-docs/",
      github: "https://github.com/laith-alskaf/ecommerce-backend-clean-architecture",
      image: "/api/placeholder/400/250",
      featured: true
    },

    {
      id: 3,
      title: "Team Management Desktop & Mobile App |Internal Project| YES For Online Services",
      description: "I developed a Flutter-based desktop and mobile application for YES For Online Services that enhanced team productivity by 30% for over 20 employees on Windows and android. This intuitive app streamlined task management by enabling seamless creation, assignment, and tracking of projects, while offering a robust admin dashboard for monitoring performance and progress. It featured real-time communication through a WhatsApp-like chat powered by Socket.IO, alongside integrated email and local notifications to keep teams connected. Additionally.",
      technologies: ["Flutter (Clean Architecture, GetX, Dio , Hive)", "Socket.IO", "Firebase", "Node.js"],
      liveDemo: "",
      github: "",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 4,
      title: "iDBOOK Mobile Application |Google Play Release| YES For Online Services",
      description: "I contributed to the development of the Orbit section in the İDBOOK mobile app for YES For Online Services, creating a dynamic system to display ads, polls, and posts, reordered by weighted priorities to maximize user engagement. I helped implement timer-based logic to promote favorite content and integrated real-time updates for post reactions and views, ensuring seamless interaction",
      technologies: ["Flutter (Clean Architecture , Getx, Provider, HTTP, SharedPreferences, QR, Sqlite)", "Socket.IO", "Google Maps", "Localization", "Firebase", "Node.js"],
      liveDemo: "https://play.google.com/store/apps/details?id=com.yesforonlineservices.idbook",
      github: "",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 5,
      title: "iDBOOK Agent Mobile Application | YES For Online Services",
      description: "is a payment activation application that utilizes QR code scanning. It allows users to activate plans by scanning the corresponding QR codes. The app includes a history feature to track paid plans and requires location activation and sufficient balance. It also features a login page and sends SMS messages for convenient mobile access.",
      technologies: ["Flutter (Clean Architecture , Getx, HTTP, SharedPreferences, QR)", "Socket.IO", "Localization"],
      liveDemo: "",
      github: "",
      image: "/api/placeholder/400/250",
      featured: true
    },

    {
      id: 6,
      title: "Car Service App | Graduation project",
      description: "A comprehensive app combining parking and maintenance services was created to let users easily book spots and locate service centers, improving user experience and maintenance efficiency. It provides detailed administrator statistics to optimize operations while adhering to clean coding practices for improved maintainability and scalability.",
      technologies: ["Flutter", "Firebase", "GetX", "Google Maps","Localization", "Node.js (Express),", "MongoDB", "Socket.io"],
      liveDemo: "",
      github: "https://github.com/laith-alskaf/car_service",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 7,
      title: "Food Ordering App | Freelance Project (Repository Private)",
      description: "A cross-platform food-ordering application with real-time order updates, secure payments, and location-based restaurant discovery; user authentication, cart management, and live-tracked orders; a scalable, modular architecture that is easy to maintain; and a simple user experience with a responsive interface and offline caching.",
      technologies: ["Flutter (Clean Architecture, BLoC)", "Firebase (Auth, Firestore, Cloud Messaging)", "Google Maps", "Stripe (Payment Gateway)", "Hive (Local Storage)", "Push Notifications"],
      liveDemo: "",
      github: "",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 8,
      title: "Darrebni National | Training Course Final Project - Darrebni Company",
      description: "It was developed as a final project at Darrebni Company to deliver a unified educational platform for Syrian students to prepare for the National Unified Exam, offering organized resources and structured content. I collaborated with another trainee to design, develop, and refine the platform after training, focusing on clean architecture, a responsive user interface, and smooth navigation. Quality was ensured through cross-checking and testing, reflecting teamwork, attention to detail, and strong technical skills.",
      technologies: ["Flutter(Clean Architecture, Getx)", "Hive", "PDF", "Localization", "Firebase"],
      liveDemo: "",
      github: "https://github.com/laith-alskaf/darrebni_national-Project",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 9,
      title: "BetterMe | University Final Year Project - Fourth Year",
      description: "A health application was developed to encourage users to adopt healthier habits through smart reminders and wellness insights. It includes BMI calculations, health tips, FAQs, and an AI-powered assistant using ChatGPT 3.5 for personalized guidance, with a focus on intuitive UX and accessibility to ensure a smooth and engaging real-world deployment.",
      technologies: ["Flutter(SharedPreferences, Getx)", "ChatGPT 3.5 API", "Health Metrics"],
      github: "https://github.com/laith-alskaf/better-me",
      liveDemo: "",
      image: "/api/placeholder/400/250",
      featured: false
    },

  ],

  experiences: [
    {
      company: "YES for Online Services",
      position: "Flutter Developer",
      duration: "Nov 2023 - Oct 2024",
      description: "Developed cross-platform Flutter apps for iOS, Android, and Windows. Created revenue-generating apps with strong testing and performance focus."
    },
    {
      company: "Darrebni Company",
      position: "Flutter Trainee",
      duration: "Mar 2023 - Nov 2023",
      description: "Worked on team projects and final training app. Improved team efficiency by 30% through solid collaboration and clean code."
    },
    {
      company: "Japan Syria Friendship Association",
      position: "Flutter Trainee",
      duration: "Oct 2022 - Nov 2022",
      description: "Completed intensive one-month training in Flutter with focus on animations, advanced UI, and state management."
    },
    {
      company: "Freelancer",
      position: "Flutter Developer",
      duration: "2022 - Present",
      description: "Delivered cross-platform Flutter applications with a 90% client satisfaction rate, implementing optimized UIs and high performance."
    }
  ]
};

// Contact form handler for frontend-only deployment
export const handleContactSubmission = async (formData) => {
  // For frontend-only deployment, we'll use mailto or a service like Formspree
  // This is a placeholder that simulates successful submission

  // Option 1: Use mailto (simple but opens email client)
  const mailtoLink = `mailto:${portfolioData.personal.email}?subject=Portfolio Contact: ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;

  // Option 2: For a more sophisticated solution, you could integrate with services like:
  // - Formspree (https://formspree.io/)
  // - Netlify Forms (if hosted on Netlify)
  // - EmailJS (client-side email service)

  // Simulate API delay for better UX
  await new Promise(resolve => setTimeout(resolve, 1000));

  // For demo purposes, we'll show success message and open mailto
  window.open(mailtoLink, '_blank');

  return {
    success: true,
    message: 'Thank you for your message! Your email client should open with the pre-filled message.'
  };
};



