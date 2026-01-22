import React from "react";
import Ribbons from "./components/common/Ribbons";
import Particles from "./components/Particles";
import Layout from "./components/Layout";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Creating a simple Section wrapper
const PageSection = ({ id, children }: { id: string, children: React.ReactNode }) => (
  <section id={id} className="min-h-screen w-full flex items-center justify-center pt-20">
    {children}
  </section>
);

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden scroll-smooth">
      {/* Solid Background Layer */}
      <div className="fixed inset-0 z-[-2] bg-[#111111]" />

      {/* Particles Layer */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={["#ffffff", "#22d3ee"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1}
          alphaParticles={true}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>

      {/* Animation Layer (Ribbons) - Hidden on mobile, pointer-events-none on desktop */}
      <div className="fixed inset-0 z-0 hidden md:block pointer-events-none">
        <Ribbons
          colors={['#22d3ee', '#64ffda', '#4cc9f0', '#0ea5e9']}
          baseThickness={30}
          baseFriction={0.9}
          baseSpring={0.03}
          speedMultiplier={0.8}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Layout>
          <PageSection id="about">
            <About />
          </PageSection>
          <PageSection id="experience">
            <Experience />
          </PageSection>
          <PageSection id="skills">
            <Skills />
          </PageSection>
          <PageSection id="projects">
            <Projects />
          </PageSection>
          <PageSection id="contact">
            <Contact />
          </PageSection>
        </Layout>
      </div>
    </div>
  );
}

export default App;
