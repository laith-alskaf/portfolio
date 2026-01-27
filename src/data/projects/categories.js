import { Smartphone, Globe, Server, Building2, Zap, Wrench } from "lucide-react";

export const projectCategories = [
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    description: "Mobile applications built with Flutter and React Native",
  },
  {
    id: "web",
    label: "Web Applications",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    description: "Web applications using React and Next.js",
  },
  {
    id: "backend",
    label: "Backend Systems",
    icon: Server,
    color: "from-orange-500 to-red-500",
    description: "Backend systems with Node.js and Python",
  },
  {
    id: "enterprise",
    label: "Enterprise Solutions",
    icon: Building2,
    color: "from-indigo-500 to-purple-500",
    description: "Integrated systems for enterprises",
  },
  {
    id: "automation",
    label: "Automation",
    icon: Wrench,
    color: "from-green-500 to-emerald-500",
    description: "Scalable, integrated enterprise systems designed to streamline operations and accelerate growth.",
  },
  {
    id: "ai-powered",
    label: "AI-Powered",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    description: "Scalable, integrated enterprise systems designed to streamline operations and accelerate growth.",
  }
];

export const getCategory = (id) => projectCategories.find((c) => c.id === id);