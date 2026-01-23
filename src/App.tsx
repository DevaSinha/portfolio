import { Routes, Route, Navigate } from "react-router-dom";

import Ribbons from "./components/common/Ribbons";
import Particles from "./components/Particles";
import Layout from "./components/Layout";

import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="relative min-h-screen text-white overflow-x-hidden scroll-smooth">
            <div className="fixed inset-0 z-[-2] bg-[#111111]" />

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

            <div className="fixed inset-0 z-0 hidden md:block pointer-events-none">
                <Ribbons
                    baseThickness={30}
                    baseFriction={0.9}
                    baseSpring={0.03}
                    speedMultiplier={0.8}
                />
            </div>

            <div className="relative z-10">
                <Layout>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Layout>
            </div>
        </div>
    );
}

export default App;
