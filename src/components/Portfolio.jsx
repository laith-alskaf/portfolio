import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X, Sparkles, Code, Zap, Star, MessageCircle,
  Send,
  Download,
  FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';
// import { portfolioData, handleContactSubmission } from '../data/portfolioData';
import { 
  personalInfo, 
  projects, 
  skills,
  education,
  certificates,
  experiences 
} from '../data/index';
import ProjectsShowcase from './ProjectsShowcase';
// import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { toast } = useToast();

  const sections = ['home', 'about', 'education', 'projects', 'certificates', 'contact'];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating elements animation
  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: i * 0.2,
    duration: 3 + (i % 3),
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  // Skill colors
  const skillColors = {
    Mobile: 'from-purple-500 to-pink-500',
    Language: 'from-blue-500 to-cyan-500',
    Web: 'from-green-500 to-teal-500',
    Backend: 'from-orange-500 to-red-500',
    Tools: 'from-yellow-500 to-orange-500',
    Design: 'from-indigo-500 to-purple-500',
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ['home', 'about', 'education', 'projects', 'certificates', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

    const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 📥 دالة تنزيل CV
  const handleDownloadCV = () => {
    setIsDownloading(true);
    try {
      const link = document.createElement("a");
      link.href = personalInfo.cv.url;
      link.download = personalInfo.cv.fileName;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "✅ جاري التنزيل",
        description: "تم بدء تنزيل ملف CV الخاص بك",
      });
    } catch (error) {
      toast({
        title: "❌ خطأ",
        description: "حدث خطأ أثناء تنزيل الملف",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await handleContactSubmission(formData);
      if (result.success) {
        toast({
          title: "Message sent!",
          description: result.message,
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-4 h-4 rounded-full"
            style={{
              background: `linear-gradient(45deg, 
                ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'][element.id % 6]}, 
                ${['#ff8e8e', '#6ee8e0', '#67c7e8', '#b8d8c7', '#ffefc4', '#e8b8e8'][element.id % 6]}
              )`,
              left: `${element.x}%`,
              top: `${element.y}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
            }}
          />
        ))}

        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 animate-pulse" />
        
        {/* Interactive Mouse Follower */}
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139, 69, 219, 0.1) 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl text-white relative"
            >
              <span className="relative z-10">Laith Alskaf</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-lg opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 relative px-3 py-2 ${
                    activeSection === section
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg -z-10"
                      layoutId="activeSection"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

                        {/* CV Download Button - Desktop */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/50 rounded-lg text-emerald-300 hover:from-emerald-500/30 hover:to-teal-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:border-emerald-400 group relative overflow-hidden"
            >
              <motion.div
                animate={{ y: isDownloading ? [0, -2, 0] : 0 }}
                transition={{ duration: 0.6, repeat: isDownloading ? Infinity : 0 }}
              >
                {isDownloading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-emerald-400/20 border-t-emerald-400 rounded-full"
                  />
                ) : (
                  <Download size={18} className="group-hover:scale-110 transition-transform" />
                )}
              </motion.div>
              <span className="text-sm font-semibold">{isDownloading ? "جاري..." : "CV"}</span>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-2 space-y-2">
                {sections.map((section) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left px-3 py-2 rounded-lg capitalize hover:bg-white/10 text-white"
                    whileHover={{ x: 5 }}
                  >
                    {section}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-center lg:text-left"
            >
              <motion.div
                className="relative inline-block"
                animate={{
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 relative">
                  Hi, I'm <span className="relative">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                      Laith
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-lg blur-xl opacity-20"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </span>
                </h1>
                <motion.div
                  className="absolute -top-4 -right-4"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles size={32} className="text-yellow-400" />
                </motion.div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-white/90 mb-4"
              >
                {personalInfo.title}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-white/70 mb-6 max-w-2xl mx-auto lg:mx-0"
              >
                {personalInfo.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              >
                {['Flutter', 'Node.js', 'Mobile Dev', 'Backend'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 text-white text-sm font-medium"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button 
                  onClick={() => scrollToSection('projects')}
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap size={20} />
                    View Projects
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />
                </Button>
                
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:border-purple-400/50"
                >
                  <span className="flex items-center gap-2">
                    <Mail size={20} />
                    Contact Me
                  </span>
                </Button>
              </motion.div>

              {/* WhatsApp & Telegram Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex gap-4 justify-center lg:justify-start"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    onClick={() => window.open(`https://wa.me/${personalInfo.contact.phone.replace('+', '')}`, '_blank')}
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle size={20} />
                      WhatsApp
                    </span>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    onClick={() => window.open(`https://t.me/${personalInfo.contact.phone.replace('+', '')}`, '_blank')}
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                  >
                    <span className="flex items-center gap-2">
                      <Send size={20} />
                      Telegram
                    </span>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex justify-center lg:justify-start gap-8 mt-8"
              >
                <div className="text-center">
                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-white mb-1"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    3+
                  </motion.div>
                  <div className="text-sm text-white/60">Years Experience</div>
                </div>
                <div className="text-center">
                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-white mb-1"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  >
                    10+
                  </motion.div>
                  <div className="text-sm text-white/60">Projects Completed</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Main Profile Image */}
                <motion.div
                  className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-white/20 shadow-2xl"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={personalInfo.image.url}
                    alt="Laith Alskaf"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent" />
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-80 blur-md"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-80 blur-md"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                {/* Floating Code Icon */}
                <motion.div
                  className="absolute top-8 -left-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-4 shadow-lg"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  <Code size={24} className="text-white" />
                </motion.div>

                {/* Floating Zap Icon */}
                <motion.div
                  className="absolute bottom-8 -right-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-4 shadow-lg"
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                >
                  <Zap size={24} className="text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              <ChevronDown size={32} className="mx-auto text-white/60 hover:text-white transition-colors" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </span>
              <motion.div
                className="absolute -top-2 -right-8"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <Code size={24} className="text-cyan-400" />
              </motion.div>
            </motion.h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.bio}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Star className="text-yellow-400" size={24} />
                Skills & Technologies
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs bg-gradient-to-r ${skillColors[skill.category]} text-white border-0`}
                      >
                        {skill.category}
                      </Badge>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        className={`h-3 rounded-full bg-gradient-to-r ${skillColors[skill.category]} relative`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-full"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="text-purple-400" size={24} />
                Experience
              </h3>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">{exp.position}</CardTitle>
                      <CardDescription className="text-purple-300">
                        {exp.company} â€¢ {exp.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80">{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* EDUCATION  Section */}
<section id="education" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block"
        animate={{
          backgroundPosition: ['0%', '100%', '0%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Education
        </span>
      </motion.h2>
      <p className="text-lg text-white/80 max-w-2xl mx-auto">
        A summary of my academic background and achievements.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-12">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
            <CardHeader>
              <CardTitle className="text-lg text-white">{edu.degree}</CardTitle>
              <CardDescription className="text-purple-300">
                {edu.institution} â€¢ {edu.year}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">{edu.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
              <motion.div
                className="absolute -top-2 -right-8"
                animate={{
                  rotate: [0, -360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Sparkles size={24} className="text-pink-400" />
              </motion.div>
            </motion.h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </motion.div>

          <ProjectsShowcase />
        </div>
      </section>
      {/* CERTIFICATES  Section */}
<section id="certificates" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative">
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5" />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block"
        animate={{
          backgroundPosition: ['0%', '100%', '0%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Certificates
        </span>
        <motion.div
          className="absolute -top-2 -right-8"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <Star size={24} className="text-yellow-400" />
        </motion.div>
      </motion.h2>
      <p className="text-lg text-white/80 max-w-2xl mx-auto">
        My professional certifications and achievements in software development.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {certificates.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="group relative"
        >
          <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
            {/* Certificate Image */}
            <div className="aspect-video bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 relative overflow-hidden">
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* View Certificate Button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Button
                  size="sm"
                  className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 transition-all duration-300"
                  onClick={() => window.open(cert.image, '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Certificate
                </Button>
              </motion.div>
              
              {/* Certificate Badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                  {cert.year}
                </Badge>
              </div>
            </div>
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors duration-300">
                {cert.title}
              </CardTitle>
              <CardDescription className="text-purple-300 flex items-center gap-2">
                <Star size={16} className="text-yellow-400" />
                {cert.issuer}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4 relative z-10">
              <p className="text-white/80 text-sm leading-relaxed">
                {cert.description}
              </p>
              
              {/* Credential ID */}
              {cert.credential && (
                <div className="pt-2 border-t border-white/10">
                  <p className="text-xs text-white/60">
                    Credential ID: <span className="text-purple-300">
                      {/* {cert.credential} */}
                      </span>
                  </p>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="flex gap-2 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/50 text-white hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                  onClick={() => window.open(cert.image, '_blank')}
                >
                  <ExternalLink size={14} className="mr-2" />
                  View
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/50 text-white hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300"
                  onClick={() => navigator.clipboard.writeText(cert.credential || cert.title)}
                >
                  <Code size={14} className="mr-2" />
                  Copy ID
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
              <motion.div
                className="absolute -top-2 -right-8"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <Mail size={24} className="text-cyan-400" />
              </motion.div>
            </motion.h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="text-yellow-400" size={24} />
                Let's Connect
              </h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-white/10 to-white/5 rounded-lg backdrop-blur-sm border border-white/20 hover:border-purple-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="text-purple-400" size={24} />
                  <span className="text-white">{personalInfo.contact.email}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-white/10 to-white/5 rounded-lg backdrop-blur-sm border border-white/20 hover:border-purple-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone className="text-green-400" size={24} />
                  <span className="text-white">{personalInfo.contact.phone}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-white/10 to-white/5 rounded-lg backdrop-blur-sm border border-white/20 hover:border-purple-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <MapPin className="text-pink-400" size={24} />
                  <span className="text-white">{personalInfo.contact.location}</span>
                </motion.div>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open(personalInfo.social.github, '_blank')}
                    className="w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/50 text-white hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                  >
                    <Github size={20} className="mr-2" />
                    GitHub
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open(personalInfo.social.linkedin, '_blank')}
                    className="w-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/50 text-white hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300"
                  >
                    <Linkedin size={20} className="mr-2" />
                    LinkedIn
                  </Button>
                </motion.div>
              </div>

              {/* WhatsApp & Telegram Buttons */}
              <div className="flex space-x-4 pt-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open(`https://wa.me/${personalInfo.contact.phone.replace('+', '')}`, '_blank')}
                    className="w-full bg-gradient-to-r from-green-500/20 to-green-600/20 border-green-400/50 text-white hover:from-green-500/30 hover:to-green-600/30 transition-all duration-300"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    WhatsApp
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open(`https://t.me/${personalInfo.contact.phone.replace('+', '')}`, '_blank')}
                    className="w-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 border-blue-400/50 text-white hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300"
                  >
                    <Send size={20} className="mr-2" />
                    Telegram
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-400/50 transition-all duration-300"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-400/50 transition-all duration-300"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-400/50 transition-all duration-300 resize-none"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Zap size={20} />
                          Send Message
                        </>
                      )}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    />
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md text-white py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p 
            className="text-white/70"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            Â© 2024 Laith. Built with React and lots of{' '}
            <motion.span
              animate={{
                color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              â˜•
            </motion.span>
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;





