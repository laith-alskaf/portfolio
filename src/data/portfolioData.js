// Portfolio data for Anastasia - Flutter Developer
export const portfolioData = {
  personal: {
    name: "Laith Alskaf",
    title: "Flutter & Backend Developer",
    subtitle: "Mobile Apps & Node.js Backend",
    bio: "Dynamic Flutter Developer with over 3 years of experience building cross-platform mobile apps, and strong backend skills in Node.js and Clean Architecture. Passionate about creating user-friendly, scalable applications that solve real-world problems.",
    email: "laithalskaf@gmail.com",
    github: "https://github.com/laith-alskaf",
    linkedin: "https://www.linkedin.com/in/laith-alskaf-10a4b4339",
    location: "Sahnaya, Damascus, Syria",
    image: "https://res.cloudinary.com/debuadvrz/image/upload/v1752869322/laith_bccr2p.jpg"
  },
 education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Damascus",
      year: "2022",
      description: "Specialized in software engineering and mobile app development."
    },
    {
      degree: "High School Diploma",
      institution: "Al-Farabi High School",
      year: "2018",
      description: "Focused on mathematics and computer science."
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
    { name: "Docker", level: 60, category: "Tools" },
  ],

  projects: [
    {
      id: 1,
      title: "E-commerce Backend",
      description: "Scalable and secure e-commerce backend using Node.js, TypeScript, MongoDB, PostgreSQL, JWT, and Clean Architecture. Includes authentication, product management, wishlist, and Swagger/Postman documentation.",
      technologies: ["Node.js", "TypeScript", "MongoDB", "JWT", "Swagger"],
      liveDemo: "https://laith-alskaf.github.io/portfolio/",
      github: "https://github.com/laith-alskaf/ecommerce-backend-clean-architecture",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Car Service App",
      description: "Graduation project combining Flutter frontend and Node.js backend for booking car parking and maintenance services. Admin dashboard with statistics and service center management.",
      technologies: ["Flutter","Firebase","GetX","Maps","Node.js", "Express", "MongoDB","Socket.io"],
      github: "https://github.com/laith-alskaf/car_service",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 3,
      title: "Darrebni National",
      description: "Training platform for Syrian students to prepare for the National Unified Exam. Built in Flutter during internship with Darrebni Company.",
      technologies: ["Flutter", "Hive", "PDF", "Localization"],
      github: "https://github.com/laith-alskaf/darrebni_national-Project",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 4,
      title: "BetterMe - Health App",
      description: "Health application offering alerts, health tips, BMI calculators, and ChatGPT integration. Built for university graduation project.",
      technologies: ["Flutter", "Hive", "ChatGPT", "Health Metrics"],
      github: "https://github.com/laith-alskaf/better-me",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Food Ordering App",
      description: "Cross-platform Flutter app for ordering food with Firebase push notifications, Google Maps integration, and clean architecture.",
      technologies: ["Flutter", "Firebase", "Bloc", "Google Maps"],
      github: "https://github.com/laith-alskaf",
      image: "/api/placeholder/400/250",
      featured: false
    }
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