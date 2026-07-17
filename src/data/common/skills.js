export const skills = [
  {
    name: "Flutter & Cross-Platform Development",
    level: 95,
    category: "Mobile",
    proficiency: 95,
    description: "Expert in Flutter for iOS, Android, Windows, and Web — Clean Architecture, responsive design, offline-first, and caching (Hive, SQLite, SharedPreferences)"
  },
  {
    name: "State Management (BLoC, GetX, Provider)",
    level: 90,
    category: "Mobile",
    proficiency: 90,
    description: "Advanced state management patterns for complex, multi-module applications"
  },
  {
    name: "Dart",
    level: 90,
    category: "Language",
    proficiency: 90,
    description: "Strong proficiency in Dart with async programming, isolates, and type-safe development"
  },
  {
    name: "Clean Architecture & SOLID Principles",
    level: 92,
    category: "Architecture",
    proficiency: 92,
    description: "Expert in Clean Architecture, MVC, MVVM, Repository Pattern, and SOLID principles across mobile and backend"
  },
  {
    name: "Node.js & TypeScript",
    level: 83,
    category: "Backend",
    proficiency: 83,
    description: "Backend development with Express.js, JWT authentication, RESTful API design, and Swagger documentation"
  },
  {
    name: "Databases (MongoDB, PostgreSQL)",
    level: 80,
    category: "Backend",
    proficiency: 80,
    description: "Database design, indexing, and query optimization with MongoDB and PostgreSQL"
  },
  {
    name: "Firebase & Supabase",
    level: 82,
    category: "Backend",
    proficiency: 82,
    description: "Firebase (Auth, Firestore, FCM) and Supabase (PostgreSQL, RLS, Edge Functions, Storage, real-time subscriptions)"
  },
  {
    name: "Socket.IO & Real-Time Systems",
    level: 80,
    category: "Backend",
    proficiency: 80,
    description: "Real-time communication with Socket.IO for chat, live updates, and push notifications"
  },
  {
    name: "REST APIs & Documentation",
    level: 85,
    category: "Backend",
    proficiency: 85,
    description: "RESTful API design, Swagger/OpenAPI documentation, Postman testing, and Pydantic validation"
  },
  {
    name: "React & Vue.js",
    level: 70,
    category: "Frontend",
    proficiency: 70,
    description: "Modern frontend development with React, Vue.js, Tailwind CSS, and responsive web design"
  },
  {
    name: "Git, GitHub & CI/CD",
    level: 85,
    category: "DevOps",
    proficiency: 85,
    description: "GitHub Actions workflows for automated linting, signed APK/AAB builds, and web deployments via SSH/rsync"
  },
  {
    name: "Docker & Linux VPS Deployment",
    level: 35,
    category: "DevOps",
    proficiency: 60,
    description: "Docker basics, Linux VPS configuration, PM2 process management, and secure deployment pipelines"
  },
];

// Dynamically compute category counts
const categoryCounts = skills.reduce((acc, skill) => {
  acc[skill.category] = (acc[skill.category] || 0) + 1;
  return acc;
}, {});

export const skillCategories = Object.entries(categoryCounts).map(([name, count]) => ({
  name,
  count,
}));