import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { projects } from "./data/projects";

export default function App() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1025] via-[#050816] to-black" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.25),transparent_40%)]" />
      </div>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-semibold text-center mb-4"
        >
          ARSYNOX LABS
        </motion.h1>

        <p className="text-center text-white/60 mb-14">
          Experimental Web Infrastructure & Automation
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
