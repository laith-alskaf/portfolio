import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./ui/badge";
import { projects } from "../data/index";
import { getCategory, projectCategories } from "../data/projects/categories";
import { Eye, Github, ExternalLink, Star, Filter } from "lucide-react";

const ProjectsShowcase = ({ limit, showFilters = false }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get filtered projects
  const filteredProjects = projects
    .filter((p) => selectedCategory === "all" || p.category === selectedCategory)
    .sort((a, b) => a.priority - b.priority);

  // Apply limit if provided
  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  return (
    <>
      {/* Category Filters - Only show if showFilters prop is true */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter size={18} className="text-primary-400" />
            <h3 className="text-sm font-semibold text-white/80">Filter by Category</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.button
              onClick={() => setSelectedCategory("all")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${selectedCategory === "all"
                ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25"
                : "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white border border-white/20"
                }`}
            >
              All Projects
              <span className="ml-2 text-xs opacity-70">({projects.length})</span>
            </motion.button>

            {projectCategories.map((category) => {
              const count = projects.filter(p => p.category === category.id).length;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${selectedCategory === category.id
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25"
                    : "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white border border-white/20"
                    }`}
                >
                  {category.label}
                  <span className="ml-2 text-xs opacity-70">({count})</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Projects Grid */}
      <AnimatePresence>
        {displayedProjects.map((project, index) => {
          const category = getCategory(project.category);

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer h-full"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-primary-400/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary-500/20">
                {/* Project Image */}
                <img
                  src={project.images.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Overlay with Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg transition-all shadow-lg"
                    >
                      <Eye size={20} />
                    </motion.button>
                    {project.links.github && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
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
                        whileHover={{ scale: 1.1 }}
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
                </div>

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary-300 transition-colors mb-2 truncate">
                        {project.title}
                      </h3>
                      <Badge className="bg-gradient-to-r from-primary-500 to-primary-600 text-white border-0 text-xs">
                        {category?.label || "Project"}
                      </Badge>
                    </div>
                    {project.featured && (
                      <Badge className="bg-accent/90 text-white border-0 whitespace-nowrap text-xs flex items-center gap-1">
                        <Star size={12} fill="currentColor" />
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Short Description on Hover */}
                  <p className="text-xs text-white/70 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                    {project.shortDescription || project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* No Results Message */}
      {displayedProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-full text-center py-12"
        >
          <p className="text-white/60 text-lg">No projects found in this category</p>
        </motion.div>
      )}
    </>
  );
};

export default ProjectsShowcase;
