import { motion } from "framer-motion";
import CodePreview from "../components/ui/CodePreview";
import SocialList from "../components/ui/SocialList";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center"
      id="hero"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p className="text-blue-400 mb-4">Développeur Fullstack</p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Je crée des applications web{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="bg-linear-to-r from-blue-400 via-violet-400 to-blue-400 bg-size-[200%_200%] bg-clip-text text-transparent"
            >
              modernes
            </motion.span>
          </h2>

          <p className="text-zinc-400 text-lg leading-8 mb-8 max-w-xl">
            Développeur spécialisé en Symfony, React et TypeScript, avec une
            attention particulière portée à la qualité du code, la
            maintenabilité et l’expérience utilisateur.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-400 transition px-6 py-3 rounded-xl font-medium cursor-pointer"
            >
              Voir mes projets
            </a>

            <a
              href="#contact"
              className="border border-zinc-700 hover:border-zinc-500 transition px-6 py-3 rounded-xl"
            >
              Contact
            </a>
          </div>

          <SocialList />
        </div>

        <CodePreview />
      </div>
    </motion.div>
  );
}

export default Hero;
