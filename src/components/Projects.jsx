import { useState } from "react";
import { projects } from "../Projectdata";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-[#0b1120] to-[#0f172a] py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-16">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const [isOverlayVisible, setIsOverlayVisible] = useState(false);

            return (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden
                           bg-white/5 border border-white/10"
                onTouchStart={() => setIsOverlayVisible(true)} // Show on touch start (mobile hover simulation)
                onTouchEnd={() => setIsOverlayVisible(false)} // Hide on touch end
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black/70 flex flex-col
                             items-center justify-center text-center
                             transition duration-300 ${
                    isOverlayVisible
                      ? 'opacity-100' // Visible on touch (mobile)
                      : 'md:opacity-0 md:group-hover:opacity-100 opacity-0' // Hidden by default, show on hover (desktop)
                  }`}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-6 px-4">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full bg-indigo-500
                                 text-white text-sm hover:bg-indigo-600"
                      onClick={(e) => e.stopPropagation()} // Prevent interference
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full border
                                 border-white/30 text-white text-sm
                                 hover:bg-white/10"
                      onClick={(e) => e.stopPropagation()} // Prevent interference
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;