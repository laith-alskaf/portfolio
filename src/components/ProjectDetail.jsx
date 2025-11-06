// src/components/ProjectDetail.jsx - مكون تفاصيل المشروع المحسّن
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Github,
  ExternalLink,
  FileText,
  FolderOpen,
  Calendar,
  Users,
  TrendingUp,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ProjectDetail = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageLoadError, setImageLoadError] = useState({});

  if (!project) return null;

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "technologies", label: "Technologies" },
    { id: "achievements", label: "Achievements" },
    { id: "gallery", label: "Gallery" },
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
    <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-2">🖼️</div>
        <p className="text-gray-400 text-sm">صورة غير متاحة</p>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-purple-500/30">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl text-white mb-2">
                {project.title}
              </CardTitle>
              <CardDescription className="text-gray-300">
                {project.description}
              </CardDescription>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl leading-none"
            >
              ✕
            </button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Tabs */}
          <div className="flex gap-2 border-b border-gray-700 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={
                  "px-4 py-2 border-b-2 transition-all whitespace-nowrap " +
                  (activeTab === tab.id
                    ? "border-purple-500 text-purple-400"
                    : "border-transparent text-gray-400 hover:text-white")
                }
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-4">
              {/* Project Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Category</p>
                  <p className="text-white font-semibold capitalize">
                    {project.category}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Duration</p>
                  <p className="text-white font-semibold">
                    {project.projectDetails.duration.months} months
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Team Size</p>
                  <p className="text-white font-semibold">
                    {project.projectDetails.team.size} members
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Status</p>
                  <Badge className="capitalize bg-green-500/20 text-green-400">
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Zap size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4">
                {project.links.liveDemo && (
                  <Button
                    className="flex-1 bg-green-500/20 text-green-400 hover:bg-green-500/30"
                    onClick={() => window.open(project.links.liveDemo, "_blank")}
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </Button>
                )}
                {project.links.github && (
                  <Button
                    className="flex-1 bg-gray-500/20 text-gray-400 hover:bg-gray-500/30"
                    onClick={() => window.open(project.links.github, "_blank")}
                  >
                    <Github size={18} className="mr-2" />
                    GitHub
                  </Button>
                )}
                {project.links.drive && (
                  <Button
                    className="flex-1 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
                    onClick={() => window.open(project.links.drive, "_blank")}
                  >
                    <FolderOpen size={18} className="mr-2" />
                    Drive
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Technologies Tab */}
          {activeTab === "technologies" && (
            <div className="space-y-3">
              {project.technologies?.map((tech, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-800/50 p-3 rounded-lg">
                  <div>
                    <p className="text-white font-semibold">{tech.name}</p>
                    <p className="text-sm text-gray-400 capitalize">
                      {tech.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                        style={{ width: `${tech.proficiency}%` }}
                      />
                    </div>
                    <span className="text-white font-semibold w-8 text-right">
                      {tech.proficiency}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === "achievements" && (
            <div className="space-y-3">
              {project.achievements?.map((achievement, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-lg border border-purple-500/20"
                >
                  <TrendingUp className="text-purple-400 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-white font-semibold">{achievement.metric}</p>
                    <p className="text-2xl font-bold text-purple-400">
                      {achievement.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Gallery Tab - محسّن */}
          {activeTab === "gallery" && (
            <div className="space-y-6">
              {hasGallery ? (
                <>
                  {/* Main Image Container - محسّن */}
                  <div className="relative">
                    {/* Main Image */}
                    <motion.div
                      key={selectedImage}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden aspect-video"
                    >
                      {imageLoadError[selectedImage] ? (
                        <PlaceholderImage />
                      ) : (
                        <img
                          src={gallery[selectedImage]}
                          alt={`Project preview ${selectedImage + 1}`}
                          onError={() => handleImageError(selectedImage)}
                          className="w-full h-full object-contain hover:object-cover transition-all duration-300"
                        />
                      )}

                      {/* Image Counter */}
                      <div className="absolute top-3 right-3 bg-black/50 px-3 py-1 rounded-full">
                        <p className="text-white text-sm font-semibold">
                          {selectedImage + 1} / {gallery.length}
                        </p>
                      </div>
                    </motion.div>

                    {/* Navigation Buttons */}
                    {gallery.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-2 rounded-full text-white transition-all z-10"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-2 rounded-full text-white transition-all z-10"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnails Grid - محسّن */}
                  <div>
                    <p className="text-gray-400 text-sm mb-3">
                      Images ({gallery.length})
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                      {gallery.map((img, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedImage(i)}
                          className={
                            "relative aspect-square rounded-lg overflow-hidden border-2 transition-all " +
                            (selectedImage === i
                              ? "border-purple-500 ring-2 ring-purple-400"
                              : "border-gray-600 hover:border-gray-500")
                          }
                        >
                          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
                            {imageLoadError[i] ? (
                              <div className="w-full h-full flex items-center justify-center bg-gray-800">
                                <span className="text-gray-500 text-xl">❌</span>
                              </div>
                            ) : (
                              <img
                                src={img}
                                alt=""
                                onError={() => handleImageError(i)}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>

                          {/* Selected Indicator */}
                          {selectedImage === i && (
                            <div className="absolute inset-0 bg-purple-500/20 border-2 border-purple-400 rounded-lg" />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Image Info */}
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <p className="text-gray-300 text-sm">
                      💡 Use the arrows or click on the images to check the image navigation.
                    </p>
                  </div>
                </>
              ) : (
                <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-3">🖼️</div>
                    <p className="text-gray-400">لا توجد صور متاحة لهذا المشروع</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectDetail;
