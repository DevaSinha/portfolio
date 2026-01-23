import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import SectionHeader from "../components/common/SectionHeader";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import { PROJECTS } from "../utils/constants";

const Projects = () => {
  const gradients = [
    "bg-gradient-to-br from-[#FF512F] to-[#DD2476]",
    "bg-gradient-to-br from-[#8E2DE2] to-[#4A00E0]",
    "bg-gradient-to-br from-[#11998e] to-[#38ef7d]",
    "bg-gradient-to-br from-[#fc4a1a] to-[#f7b733]",
    "bg-gradient-to-br from-[#00b09b] to-[#96c93d]",
  ];

  return (
    <section className="w-full min-h-screen flex flex-col items-center py-16 sm:py-20 px-4">
      <div className="w-full flex flex-col items-center">
        <SectionHeader title="Projects" />

        <div
          className={[
            "flex items-center gap-2 text-white/50 text-xs sm:text-sm tracking-wide select-none",
            "transition-all duration-300",
          ].join(" ")}
        >
          <span className="uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>

      <div className="w-full max-w-5xl mt-4 sm:mt-6 h-[calc(100vh-200px)] sm:h-[calc(100vh-220px)]">
        <ScrollStack
          className={[
            "h-full projects-stack-scroll",
            "scrollbar-none",
            "[&::-webkit-scrollbar]:w-0",
            "[&::-webkit-scrollbar]:h-0",
            "[&::-webkit-scrollbar-thumb]:bg-transparent",
            "[&::-webkit-scrollbar-track]:bg-transparent",
            "[&_.scroll-stack-inner]:pt-2 sm:[&_.scroll-stack-inner]:pt-4",
            "[&_.scroll-stack-inner]:px-4 sm:[&_.scroll-stack-inner]:px-6 lg:[&_.scroll-stack-inner]:px-10",
            "[&_.scroll-stack-inner]:pb-[40rem] sm:[&_.scroll-stack-inner]:pb-[45rem]",
          ].join(" ")}
          blurAmount={0}
        >
          {PROJECTS.map((project, index) => (
            <ScrollStackItem key={project.title ?? index}>
              <div
                className={[
                  "w-full rounded-3xl p-5 sm:p-8 md:p-10",
                  "relative overflow-hidden border border-white/15",
                  "shadow-xl sm:shadow-2xl",
                  gradients[index % gradients.length],
                ].join(" ")}
              >
                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start sm:items-center justify-between gap-3">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
                        {project.title}
                      </h3>

                      {project.inProgress && (
                        <span className="shrink-0 px-2.5 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white bg-white/15 border border-white/20 rounded-full">
                          In Progress
                        </span>
                      )}
                    </div>

                    <div className="h-[2px] w-14 sm:w-20 bg-white/40" />

                    <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg font-medium">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2 sm:pt-4">
                      {project.tech.map((t, i) => (
                        <span
                          key={`${t}-${i}`}
                          className={[
                            "px-2.5 py-1.5 rounded-lg",
                            "text-xs sm:text-sm font-bold text-white",
                            "bg-black/20 border border-white/15",
                            "sm:backdrop-blur-sm",
                          ].join(" ")}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4 sm:pt-6">
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                        >
                          <FaGithub className="text-lg sm:text-xl" />
                          <span className="text-sm sm:text-base font-medium underline-offset-4 hover:underline">
                            GitHub
                          </span>
                        </a>
                      )}

                      {project.links?.website && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                        >
                          <FaExternalLinkAlt className="text-base sm:text-lg" />
                          <span className="text-sm sm:text-base font-medium underline-offset-4 hover:underline">
                            Website
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default Projects;
