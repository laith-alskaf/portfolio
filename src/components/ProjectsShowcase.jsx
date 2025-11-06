import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./ui/badge";
import { projects } from "../data/index";
import { getCategory, projectCategories } from "../data/projects/categories";
import ProjectDetail from "./ProjectDetail";
import { Eye, Github, ExternalLink } from "lucide-react";

const ProjectsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects
    .filter((p) => {
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }
      if (
        searchTerm &&
        !p.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }
      return true;
    })
    .sort((a, b) => a.priority - b.priority);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 relative">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A selection of my best work across different platforms and
            technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-8 space-y-4"
        >
          <div>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg focus:border-purple-400 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.button
              onClick={() => setSelectedCategory("all")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={
                "px-4 py-2 rounded-lg font-semibold transition-all " +
                (selectedCategory === "all"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "bg-white/10 text-white/70 hover:text-white")
              }
            >
              All Projects
            </motion.button>

            {projectCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={
                  "px-4 py-2 rounded-lg font-semibold transition-all " +
                  (selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-white/10 text-white/70 hover:text-white")
                }
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const category = getCategory(project.category);

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer h-full"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20">
                    <img
                      src={project.images.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 flex items-center justify-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 bg-purple-500/80 hover:bg-purple-500 text-white rounded-lg transition-all"
                        >
                          <Eye size={22} />
                        </motion.button>
                        {project.links.github && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 bg-gray-600/80 hover:bg-gray-600 text-white rounded-lg transition-all" 
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.links.github, "_blank");
                            }}
                          >
                            <Github size={22} />
                          </motion.button>
                        )}
                        {project.links.liveDemo && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 bg-green-600/80 hover:bg-green-600 text-white rounded-lg transition-all"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.links.liveDemo, "_blank");
                            }}
                          >
                            <ExternalLink size={22} />
                          </motion.button>
                        )}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                            {project.title}
                          </h3>
                          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                            {category?.label || "Unknown"}
                          </Badge>
                        </div>
                        {project.featured && (
                          <Badge className="bg-yellow-500/80 text-yellow-100 border-0 whitespace-nowrap">
                            ⭐ Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">
              No projects found matching your criteria
            </p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsShowcase;
