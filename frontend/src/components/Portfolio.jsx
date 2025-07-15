import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X, Sparkles, Code, Zap, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';
import { mockData, mockApiCalls } from '../mock/mockData';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { toast } = useToast();

  const sections = ['home', 'about', 'projects', 'contact'];

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
      const sections = ['home', 'about', 'projects', 'contact'];
      
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await mockApiCalls.submitContact(formData);
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
              <span className="relative z-10">Anastasia</span>
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
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Anastasia</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
              {mockData.personal.title}
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              {mockData.personal.subtitle}
            </p>
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16"
          >
            <ChevronDown 
              size={32} 
              className="mx-auto text-slate-400 animate-bounce cursor-pointer"
              onClick={() => scrollToSection('about')}
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {mockData.personal.bio}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Skills & Technologies</h3>
              <div className="space-y-4">
                {mockData.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                      <Badge variant="outline" className="text-xs">{skill.category}</Badge>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-blue-600 h-2 rounded-full"
                      />
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
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Experience</h3>
              {mockData.experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{exp.position}</CardTitle>
                    <CardDescription className="text-blue-600 dark:text-blue-400">{exp.company} • {exp.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <ExternalLink size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(project.liveDemo, '_blank')}
                        className="flex-1"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(project.github, '_blank')}
                        className="flex-1"
                      >
                        <Github size={16} className="mr-2" />
                        GitHub
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
      <section id="contact" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                  <span className="text-slate-700 dark:text-slate-300">{mockData.personal.email}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                  <span className="text-slate-700 dark:text-slate-300">{mockData.personal.location}</span>
                </div>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open(mockData.personal.github, '_blank')}
                  className="flex-1"
                >
                  <Github size={20} className="mr-2" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open(mockData.personal.linkedin, '_blank')}
                  className="flex-1"
                >
                  <Linkedin size={20} className="mr-2" />
                  LinkedIn
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2024 Anastasia. Built with React and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;