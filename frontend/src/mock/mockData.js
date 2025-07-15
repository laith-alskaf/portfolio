// Mock data for portfolio website
export const mockData = {
  personal: {
    name: "Anastasia",
    title: "Software Developer",
    subtitle: "Flutter & Mobile App Developer",
    bio: "Passionate software developer with 3+ years of experience in Flutter development and mobile app creation. I love building beautiful, functional applications that solve real-world problems. When I'm not coding, you can find me exploring the latest mobile technologies and contributing to open-source projects.",
    email: "anastasia.dev@example.com",
    github: "https://github.com/anastasia-dev",
    linkedin: "https://linkedin.com/in/anastasia-dev",
    location: "San Francisco, CA"
  },
  
  skills: [
    { name: "Flutter", level: 90, category: "Mobile" },
    { name: "Dart", level: 85, category: "Language" },
    { name: "React", level: 80, category: "Web" },
    { name: "JavaScript", level: 75, category: "Language" },
    { name: "Firebase", level: 80, category: "Backend" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "UI/UX Design", level: 70, category: "Design" },
    { name: "REST APIs", level: 80, category: "Backend" }
  ],
  
  projects: [
    {
      id: 1,
      title: "TaskFlow - Productivity App",
      description: "A beautiful task management app built with Flutter featuring dark mode, synchronization, and intuitive gestures. Helps users organize their daily tasks with smart categorization.",
      technologies: ["Flutter", "Dart", "Firebase", "Provider"],
      liveDemo: "https://taskflow-demo.vercel.app",
      github: "https://github.com/anastasia-dev/taskflow-app",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Weather Forecast App",
      description: "Real-time weather application with location-based forecasts, beautiful animations, and offline caching. Features 7-day forecasts and weather alerts.",
      technologies: ["Flutter", "OpenWeather API", "Hive", "Geolocator"],
      liveDemo: "https://weather-flutter-demo.netlify.app",
      github: "https://github.com/anastasia-dev/weather-app",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 3,
      title: "Expense Tracker",
      description: "Personal finance management app with spending analytics, budget tracking, and financial insights. Includes data visualization and export features.",
      technologies: ["Flutter", "SQLite", "Chart.js", "PDF Export"],
      liveDemo: "https://expense-tracker-flutter.herokuapp.com",
      github: "https://github.com/anastasia-dev/expense-tracker",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time metrics, post scheduling, and engagement tracking across multiple platforms.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveDemo: "https://social-dashboard-demo.vercel.app",
      github: "https://github.com/anastasia-dev/social-dashboard",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Recipe Finder App",
      description: "Discover and save recipes with advanced search, meal planning, and grocery list generation. Features offline recipe storage and nutritional information.",
      technologies: ["Flutter", "Spoonacular API", "Hive", "Share Plus"],
      liveDemo: "https://recipe-finder-flutter.netlify.app",
      github: "https://github.com/anastasia-dev/recipe-finder",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ],
  
  experiences: [
    {
      company: "TechStart Solutions",
      position: "Mobile Developer",
      duration: "2022 - Present",
      description: "Lead Flutter developer for multiple client projects, focusing on e-commerce and productivity applications."
    },
    {
      company: "Freelance",
      position: "Flutter Developer", 
      duration: "2021 - 2022",
      description: "Developed custom mobile applications for various clients, specializing in cross-platform solutions."
    }
  ]
};

// Mock functions for form submissions (will be replaced with actual API calls)
export const mockApiCalls = {
  submitContact: async (formData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate successful submission
    console.log('Contact form submitted:', formData);
    return { success: true, message: 'Thank you for your message! I\'ll get back to you soon.' };
  },
  
  subscribeNewsletter: async (email) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    console.log('Newsletter subscription:', email);
    return { success: true, message: 'Successfully subscribed to newsletter!' };
  }
};