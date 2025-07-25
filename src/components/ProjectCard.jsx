import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Helper function to check if URL is valid and not empty
  const isValidUrl = (url) => {
    if (!url || url.trim() === '') return false;
    // Check if it's a placeholder or invalid URL
    if (url) return true; // Valid live demo
    if (url.includes('github.com/laith-alskaf/') && url.length > 30) return true; // Valid GitHub repo
    return false;
  };

  // Split description into sentences and show first 2 when collapsed
  const getDisplayText = () => {
    const sentences = project.description.split('.');
    if (sentences.length <= 2 || isExpanded) {
      return project.description;
    }
    return sentences.slice(0, 2).join('.') + '.';
  };

  const shouldShowExpandButton = () => {
    const sentences = project.description.split('.');
    return sentences.length > 2;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden relative">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          animate={{
            background: [
              'linear-gradient(45deg, #8B5CF6, #EC4899)',
              'linear-gradient(45deg, #EC4899, #3B82F6)',
              'linear-gradient(45deg, #3B82F6, #8B5CF6)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        
        <div className="aspect-video bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <ExternalLink size={24} className="text-white" />
            </div>
          </motion.div>
          
          {/* Floating elements */}
          <motion.div
            className="absolute top-4 left-4 w-3 h-3 bg-yellow-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          />
          <motion.div
            className="absolute bottom-4 right-4 w-2 h-2 bg-cyan-400 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.3,
            }}
          />
        </div>
        
        <CardHeader className="relative z-10">
          <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors duration-300 flex items-center gap-2">
            {project.title}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkles size={16} className="text-yellow-400" />
            </motion.div>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4 relative z-10">
          {/* Project Description with Expand/Collapse */}
          <div className="space-y-2">
            <motion.div
              initial={false}
              animate={{ height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <CardDescription className="text-white/70 text-sm leading-relaxed">
                {getDisplayText()}
              </CardDescription>
            </motion.div>
            
            {shouldShowExpandButton() && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 p-0 h-auto font-medium transition-all duration-200"
                >
                  <span className="flex items-center gap-1">
                    {isExpanded ? (
                      <>
                        عرض أقل
                        <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        عرض المزيد
                        <ChevronDown size={16} />
                      </>
                    )}
                  </span>
                </Button>
              </motion.div>
            )}
          </div>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Badge 
                  variant="secondary" 
                  className={`text-xs bg-gradient-to-r ${
                    ['from-purple-500 to-pink-500', 'from-blue-500 to-cyan-500', 'from-green-500 to-teal-500', 'from-orange-500 to-red-500'][techIndex % 4]
                  } text-white border-0`}
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
          
          {/* Action Buttons - Only show if URLs are valid */}
          <div className="flex gap-2 pt-4">
            {isValidUrl(project.liveDemo) && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(project.liveDemo, '_blank')}
                  className="w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/50 text-white hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Button>
              </motion.div>
            )}
            
            {isValidUrl(project.github) && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(project.github, '_blank')}
                  className="w-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/50 text-white hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Github size={16} className="mr-2" />
                  GitHub
                </Button>
              </motion.div>
            )}
            
            {/* If no valid URLs, show a disabled button or message */}
            {/* {!isValidUrl(project.liveDemo) && !isValidUrl(project.github) && (
              <div className="flex-1 text-center">
                <Badge 
                  variant="outline" 
                  className="text-white/50 border-white/20 bg-white/5"
                >
                  قيد التطوير
                </Badge>
              </div>
            )} */}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;