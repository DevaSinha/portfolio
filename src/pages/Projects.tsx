import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from "../components/common/SectionHeader";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import { PROJECTS } from "../utils/constants";

const Projects = () => {
  const gradients = [
    "bg-gradient-to-br from-[#FF512F] to-[#DD2476]", // Orange - Pink
    "bg-gradient-to-br from-[#8E2DE2] to-[#4A00E0]", // Violet - Blue
    "bg-gradient-to-br from-[#11998e] to-[#38ef7d]", // Green - Teal
    "bg-gradient-to-br from-[#fc4a1a] to-[#f7b733]", // Red - Yellow
    "bg-gradient-to-br from-[#00b09b] to-[#96c93d]", // Teal - Green
  ];

  return (
    <div className="w-full h-screen relative flex flex-col items-center pt-20">
      <div className="absolute top-8 z-10">
        <SectionHeader title="Projects" />
      </div>

      <div className="w-full h-full">
        <ScrollStack >
          {PROJECTS.map((project, index) => (
            <ScrollStackItem
              key={index}
            //   itemClassName="bg-transparent border-0 shadow-none p-0 !my-0 !h-auto"
            >
              <div
                className={`w-full max-w-4xl mx-auto rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group border border-white/20 ${gradients[index % gradients.length]}`}
              >
                <div className="relative z-10 flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                      <h3 className="text-3xl font-bold text-white tracking-tight drop-shadow-md">
                        {project.title}
                      </h3>
                      {project.inProgress && (
                        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-white/20 border border-white/30 rounded-full animate-pulse backdrop-blur-sm">
                          In Progress
                        </span>
                      )}
                    </div>

                    <div className="h-[2px] w-20 bg-white/50" />

                    <p className="text-white/90 leading-relaxed text-lg font-medium">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm font-bold text-white bg-black/20 border border-white/20 rounded-lg backdrop-blur-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-6">
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group/link"
                        >
                          <FaGithub className="text-xl" />
                          <span className="font-medium group-hover/link:underline underline-offset-4">
                            GitHub
                          </span>
                        </a>
                      )}
                      {project.links?.website && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group/link"
                        >
                          <FaExternalLinkAlt className="text-lg" />
                          <span className="font-medium group-hover/link:underline underline-offset-4">
                            Website
                          </span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Optional Project Image Placeholder */}
                  {/* <div className="w-full md:w-1/3 h-48 md:h-auto bg-black/10 rounded-xl border border-white/10" /> */}
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </div>
  );
};
export default Projects;
