// src/components/ProjectsPage.jsx - صفحة معرض المشاريع الكاملة
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowLeft, Github, ExternalLink, Eye, Star } from "lucide-react";
import { projects } from "../data/index";
import { getCategory, projectCategories } from "../data/projects/categories";

const ProjectsPage = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Filter projects
    const filteredProjects = projects
        .filter((p) => selectedCategory === "all" || p.category === selectedCategory)
        .sort((a, b) => a.priority - b.priority);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[hsl(184,45%,18%)] via-[hsl(217,54%,20%)] to-[hsl(184,45%,22%)]">
            {/* Header */}
            <div className="sticky top-0 z-40 bg-[hsl(184,45%,18%)]/95 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Button
                        onClick={() => navigate(-1)}
                        variant="ghost"
                        className="text-white hover:text-primary-300 hover:bg-white/10"
                    >
                        <ArrowLeft className="mr-2" size={18} />
                        Back to Home
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
                    >
                        <span className="bg-gradient-to-r from-cyan-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                            All Projects
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-lg max-w-2xl mx-auto"
                    >
                        Explore my complete portfolio of innovative projects
                    </motion.p>
                </motion.div>

                {/* Professional Tabs Filter - Improved for Mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-12"
                >
                    {/* Mobile: Horizontal Scroll Tabs */}
                    <div className="lg:hidden">
                        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory("all")}
                                className={`px-5 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${selectedCategory === "all"
                                        ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25"
                                        : "bg-white/10 text-white/70 hover:text-white hover:bg-white/15 border border-white/20"
                                    }`}
                            >
                                All <span className="text-xs opacity-70">({projects.length})</span>
                            </motion.button>

                            {projectCategories.map((category) => {
                                const count = projects.filter((p) => p.category === category.id).length;
                                const Icon = category.icon;

                                return (
                                    <motion.button
                                        key={category.id}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`px-5 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                                                ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25"
                                                : "bg-white/10 text-white/70 hover:text-white hover:bg-white/15 border border-white/20"
                                            }`}
                                    >
                                        {Icon && <Icon size={16} />}
                                        {category.label}
                                        <span className="text-xs opacity-70">({count})</span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Desktop: Wrapped Tabs */}
                    <div className="hidden lg:flex flex-wrap justify-center gap-3">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory("all")}
                            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${selectedCategory === "all"
                                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25"
                                    : "bg-white/10 text-white/70 hover:text-white hover:bg-white/15 border border-white/20"
                                }`}
                        >
                            All Projects
                            <span className="ml-2 text-xs opacity-70">({projects.length})</span>
                        </motion.button>

                        {projectCategories.map((category) => {
                            const count = projects.filter((p) => p.category === category.id).length;
                            const Icon = category.icon;

                            return (
                                <motion.button
                                    key={category.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                                            ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25"
                                            : "bg-white/10 text-white/70 hover:text-white hover:bg-white/15 border border-white/20"
                                        }`}
                                >
                                    {Icon && <Icon size={18} />}
                                    {category.label}
                                    <span className="text-xs opacity-70">({count})</span>
                                </motion.button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Projects Grid with Stagger Animation */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredProjects.map((project, index) => {
                            const category = getCategory(project.category);

                            return (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.4,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                    className="group cursor-pointer h-full"
                                    onClick={() => navigate(`/project/${project.id}`)}
                                >
                                    <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-primary-400/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary-500/20">
                                        {/* Project Image */}
                                        <motion.img
                                            src={project.images.thumbnail}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        />

                                        {/* Hover Overlay */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-300"
                                        >
                                            <div className="absolute inset-0 flex items-center justify-center gap-3">
                                                <motion.button
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="p-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg transition-all shadow-lg"
                                                >
                                                    <Eye size={20} />
                                                </motion.button>
                                                {project.links.github && (
                                                    <motion.button
                                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-lg transition-all"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            window.open(project.links.github, "_blank");
                                                        }}
                                                    >
                                                        <Github size={20} />
                                                    </motion.button>
                                                )}
                                                {project.links.liveDemo && (
                                                    <motion.button
                                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="p-3 bg-accent/80 hover:bg-accent text-white rounded-lg transition-all shadow-lg"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            window.open(project.links.liveDemo, "_blank");
                                                        }}
                                                    >
                                                        <ExternalLink size={20} />
                                                    </motion.button>
                                                )}
                                            </div>
                                        </motion.div>

                                        {/* Project Info */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                                            <div className="flex items-start justify-between gap-3 mb-2">
                                                <div className="flex-1 min-w-0">
                                                    <motion.h3
                                                        className="text-base sm:text-lg font-bold text-white group-hover:text-primary-300 transition-colors mb-2 truncate"
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        {project.title}
                                                    </motion.h3>
                                                    <Badge className="bg-gradient-to-r from-primary-500 to-primary-600 text-white border-0 text-xs">
                                                        {category?.label || "Project"}
                                                    </Badge>
                                                </div>
                                                {project.featured && (
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                                                    >
                                                        <Badge className="bg-accent/90 text-white border-0 whitespace-nowrap text-xs flex items-center gap-1">
                                                            <Star size={12} fill="currentColor" />
                                                            Featured
                                                        </Badge>
                                                    </motion.div>
                                                )}
                                            </div>

                                            {/* Description on Hover */}
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                whileHover={{ opacity: 1, y: 0 }}
                                                className="text-xs text-white/70 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-300 mt-2"
                                            >
                                                {project.shortDescription || project.description}
                                            </motion.p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* No Results with Animation */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20"
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="text-6xl mb-4"
                        >
                            🔍
                        </motion.div>
                        <p className="text-white/60 text-xl">No projects found in this category</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;
