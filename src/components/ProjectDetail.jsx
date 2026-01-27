// src/components/ProjectDetail.jsx - مكون تفاصيل المشروع المحسّن
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Github,
  ExternalLink,
  FolderOpen,
  Zap,
  ChevronLeft,
  ChevronRight,
  X,
  Clock,
  Users,
  TrendingUp,
  Code2,
} from "lucide-react";

const ProjectDetail = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageLoadError, setImageLoadError] = useState({});

  if (!project) return null;

  const tabs = [
    { id: "overview", label: "Overview", icon: Zap },
    { id: "technologies", label: "Tech Stack", icon: Code2 },
    { id: "achievements", label: "Impact", icon: TrendingUp },
  ];

  const gallery = project.images?.gallery || [];
  const hasGallery = gallery && gallery.length > 0;

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleImageError = (index) => {
    setImageLoadError((prev) => ({ ...prev, [index]: true }));
  };

  const PlaceholderImage = () => (
    <div className="w-full h-full bg-gradient-to-br from-primary-900/20 to-accent/20 flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-2">🖼️</div>
        <p className="text-white/60 text-sm">Image not available</p>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl max-h-[85vh] my-8"
      >
        <Card className="bg-gradient-to-br from-[hsl(184,45%,18%)] via-[hsl(217,54%,20%)] to-[hsl(184,45%,22%)] border-primary-500/30 shadow-2xl overflow-hidden">
          {/* Header */}
          <CardHeader className="border-b border-white/10 pb-4">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1 min-w-0">
                <CardTitle className="text-xl sm:text-2xl md:text-3xl text-white mb-2 break-words">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </CardDescription>

                {/* Quick Stats - Responsive */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2.5 border border-white/10">
                    <div className="flex items-center gap-2 text-primary-300 mb-1">
                      <Clock size={14} />
                      <p className="text-xs font-medium">Duration</p>
                    </div>
                    <p className="text-white font-bold text-xs">
                      {project.projectDetails.duration.months}mo
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2.5 border border-white/10">
                    <div className="flex items-center gap-2 text-accent mb-1">
                      <Users size={14} />
                      <p className="text-xs font-medium">Team</p>
                    </div>
                    <p className="text-white font-bold text-xs">
                      {project.projectDetails.team.size}
                    </p>
                  </div>
                  <div className="col-span-2 sm:col-span-2 bg-white/5 backdrop-blur-sm rounded-lg p-2.5 border border-white/10">
                    <p className="text-xs font-medium text-white/70 mb-1">Status</p>
                    <Badge className="capitalize bg-accent/20 text-accent border-accent/30 font-semibold text-xs">
                      ✓ {project.status}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="flex-shrink-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all hover:rotate-90 duration-300"
              >
                <X size={20} />
              </button>
            </div>
          </CardHeader>

          <CardContent className="p-4 sm:p-5 space-y-5 max-h-[calc(85vh-180px)] overflow-y-auto">
            {/* Tabs - Improved Mobile */}
            <div className="flex gap-2 border-b border-white/10 overflow-x-auto pb-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 border-b-2 transition-all whitespace-nowrap text-sm sm:text-base ${activeTab === tab.id
                      ? "border-primary-400 text-primary-300 bg-primary-500/10"
                      : "border-transparent text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    <Icon size={18} />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Overview Tab */}
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Gallery Section - если есть */}
                {hasGallery && (
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span className="text-2xl">🖼️</span>
                      Project Gallery
                    </h3>

                    {/* Main Image */}
                    <div className="relative">
                      <motion.div
                        key={selectedImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="relative w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden aspect-video"
                      >
                        {imageLoadError[selectedImage] ? (
                          <PlaceholderImage />
                        ) : (
                          <img
                            src={gallery[selectedImage]}
                            alt={`Project preview ${selectedImage + 1}`}
                            onError={() => handleImageError(selectedImage)}
                            className="w-full h-full object-contain"
                          />
                        )}

                        {/* Counter */}
                        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          <p className="text-white text-xs sm:text-sm font-semibold">
                            {selectedImage + 1} / {gallery.length}
                          </p>
                        </div>
                      </motion.div>

                      {/* Navigation */}
                      {gallery.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-primary-500/80 p-2 sm:p-3 rounded-full text-white transition-all"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-primary-500/80 p-2 sm:p-3 rounded-full text-white transition-all"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Thumbnails */}
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                      {gallery.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedImage(i)}
                          className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedImage === i
                            ? "border-primary-400 ring-2 ring-primary-400/50 scale-105"
                            : "border-white/20 hover:border-primary-400/50"
                            }`}
                        >
                          {imageLoadError[i] ? (
                            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                              <span className="text-gray-500">❌</span>
                            </div>
                          ) : (
                            <img
                              src={img}
                              alt=""
                              onError={() => handleImageError(i)}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Zap className="text-accent" size={24} />
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {project.features?.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-white/80 bg-white/5 p-3 rounded-lg border border-white/10"
                      >
                        <span className="text-primary-400 mt-0.5">▪</span>
                        <span className="text-sm sm:text-base">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Links - Responsive */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {project.links.liveDemo && (
                    <Button
                      className="flex-1 bg-gradient-to-r from-accent/20 to-accent/10 text-accent hover:from-accent/30 hover:to-accent/20 border border-accent/30"
                      onClick={() => window.open(project.links.liveDemo, "_blank")}
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      className="flex-1 bg-white/10 text-white hover:bg-white/20 border border-white/20"
                      onClick={() => window.open(project.links.github, "_blank")}
                    >
                      <Github size={18} className="mr-2" />
                      GitHub
                    </Button>
                  )}
                  {project.links.drive && (
                    <Button
                      className="flex-1 bg-primary-500/20 text-primary-300 hover:bg-primary-500/30 border border-primary-500/30"
                      onClick={() => window.open(project.links.drive, "_blank")}
                    >
                      <FolderOpen size={18} className="mr-2" />
                      Drive
                    </Button>
                  )}
                </div>
              </motion.div>
            )}

            {/* Technologies Tab */}
            {activeTab === "technologies" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                {project.technologies?.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 gap-3"
                  >
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm sm:text-base">{tech.name}</p>
                      <p className="text-xs sm:text-sm text-white/50 capitalize mt-1">
                        {tech.category}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 sm:w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.proficiency}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary-500 to-accent rounded-full"
                        />
                      </div>
                      <span className="text-white font-bold text-sm w-12 text-right">
                        {tech.proficiency}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Achievements Tab */}
            {activeTab === "achievements" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {project.achievements?.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gradient-to-br from-primary-500/10 to-accent/10 p-6 rounded-xl border border-primary-400/30"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 bg-primary-500/20 rounded-lg">
                        <TrendingUp className="text-primary-300" size={24} />
                      </div>
                      <p className="text-white/70 text-sm font-medium">{achievement.metric}</p>
                    </div>
                    <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent bg-clip-text text-transparent">
                      {achievement.value}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
