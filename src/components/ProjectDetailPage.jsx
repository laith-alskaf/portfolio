// src/components/ProjectDetailPage.jsx - صفحة تفاصيل المشروع الكاملة
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
    Github,
    ExternalLink,
    FolderOpen,
    Zap,
    ChevronLeft,
    ChevronRight,
    ArrowLeft,
    Clock,
    Users,
    TrendingUp,
    Code2,
    Calendar,
} from "lucide-react";
import { projects } from "../data/index";
import { getCategory } from "../data/projects/categories";

const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(0);
    const [imageLoadError, setImageLoadError] = useState({});

    // Convert projectId from URL string to number
    const project = projects.find((p) => p.id === parseInt(projectId));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[hsl(184,45%,18%)] via-[hsl(217,54%,20%)] to-[hsl(184,45%,22%)] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <Button
                        onClick={() => navigate(-1)}
                        className="bg-primary-500 hover:bg-primary-600 text-white"
                    >
                        <ArrowLeft className="mr-2" size={18} />
                        Go Back
                    </Button>
                </div>
            </div>
        );
    }

    const category = getCategory(project.category);
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
        <div className="min-h-screen bg-gradient-to-br from-[hsl(184,45%,18%)] via-[hsl(217,54%,20%)] to-[hsl(184,45%,22%)]">
            {/* Header with back button */}
            <div className="sticky top-0 z-40 bg-[hsl(184,45%,18%)]/95 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Button
                        onClick={() => navigate(-1)}
                        variant="ghost"
                        className="text-white hover:text-primary-300 hover:bg-white/10"
                    >
                        <ArrowLeft className="mr-2" size={18} />
                        Back to Projects
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8"
                >
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <Badge className="bg-gradient-to-r from-primary-500 to-primary-600 text-white border-0">
                            {category?.label || "Project"}
                        </Badge>
                        {project.featured && (
                            <Badge className="bg-gradient-to-r from-accent/80 to-accent text-white border-0 flex items-center gap-1">
                                <Zap size={14} fill="currentColor" />
                                Featured
                            </Badge>
                        )}
                        <Badge className="bg-white/10 text-white/70 border-white/20 capitalize">
                            {project.status}
                        </Badge>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        {project.title}
                    </h1>
                    <p className="text-lg sm:text-xl text-white/70 max-w-4xl">
                        {project.description}
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <div className="flex items-center gap-2 text-primary-300 mb-2">
                                <Clock size={20} />
                                <p className="text-sm font-medium">Duration</p>
                            </div>
                            <p className="text-2xl font-bold text-white">
                                {project.projectDetails.duration.months}
                                <span className="text-sm font-normal text-white/60 ml-1">months</span>
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <div className="flex items-center gap-2 text-accent mb-2">
                                <Users size={20} />
                                <p className="text-sm font-medium">Team Size</p>
                            </div>
                            <p className="text-2xl font-bold text-white">
                                {project.projectDetails.team.size}
                                <span className="text-sm font-normal text-white/60 ml-1">members</span>
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <div className="flex items-center gap-2 text-primary-300 mb-2">
                                <Calendar size={20} />
                                <p className="text-sm font-medium">Started</p>
                            </div>
                            <p className="text-lg font-bold text-white">
                                {project.projectDetails.duration.startDate}
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <div className="flex items-center gap-2 text-accent mb-2">
                                <Code2 size={20} />
                                <p className="text-sm font-medium">Tech Stack</p>
                            </div>
                            <p className="text-2xl font-bold text-white">
                                {project.technologies?.length || 0}
                                <span className="text-sm font-normal text-white/60 ml-1">tools</span>
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-8">
                        {project.links.liveDemo && (
                            <Button
                                className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white font-semibold"
                                onClick={() => window.open(project.links.liveDemo, "_blank")}
                            >
                                <ExternalLink size={18} className="mr-2" />
                                Live Demo
                            </Button>
                        )}
                        {project.links.github && (
                            <Button
                                className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                                onClick={() => window.open(project.links.github, "_blank")}
                            >
                                <Github size={18} className="mr-2" />
                                View Code
                            </Button>
                        )}
                        {project.links.drive && (
                            <Button
                                className="bg-primary-500/20 hover:bg-primary-500/30 text-primary-300 border border-primary-500/30"
                                onClick={() => window.open(project.links.drive, "_blank")}
                            >
                                <FolderOpen size={18} className="mr-2" />
                                Project Files
                            </Button>
                        )}
                    </div>
                </motion.div>

                {/* Gallery Section */}
                {hasGallery && (
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-3xl">🖼️</span>
                            Project Gallery
                        </h2>

                        {/* Main Image */}
                        <div className="relative mb-6">
                            <motion.div
                                key={selectedImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="relative w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden"
                                style={{ height: '60vh', maxHeight: '500px' }}
                            >
                                {imageLoadError[selectedImage] ? (
                                    <PlaceholderImage />
                                ) : (
                                    <img
                                        src={gallery[selectedImage]}
                                        alt={`${project.title} - Screenshot ${selectedImage + 1}`}
                                        onError={() => handleImageError(selectedImage)}
                                        className="w-full h-full object-contain"
                                    />
                                )}

                                {/* Image Counter */}
                                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <p className="text-white text-sm font-semibold">
                                        {selectedImage + 1} / {gallery.length}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Navigation */}
                            {gallery.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-primary-500/80 p-3 rounded-full text-white transition-all"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-primary-500/80 p-3 rounded-full text-white transition-all"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
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
                    </motion.section>
                )}


                {/* Main Content - Full Width */}
                <div className="space-y-12">
                    {/* Features */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                            <Zap className="text-accent" size={28} />
                            Key Features
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.features?.map((feature, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-start gap-3 text-white/90 bg-white/5 p-4 rounded-lg border border-white/10"
                                >
                                    <span className="text-primary-400 text-xl mt-0.5">▪</span>
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.section>

                    {/* Technologies */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                            <Code2 className="text-primary-400" size={28} />
                            Technologies Used
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {project.technologies?.map((tech, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + i * 0.05 }}
                                    className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <p className="text-white font-semibold">{tech.name}</p>
                                            <p className="text-sm text-white/50 capitalize">{tech.category}</p>
                                        </div>
                                        <span className="text-white font-bold">{tech.proficiency}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${tech.proficiency}%` }}
                                            transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                            className="h-full bg-gradient-to-r from-primary-500 to-accent rounded-full"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage;
