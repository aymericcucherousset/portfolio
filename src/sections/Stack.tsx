import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";

function Stack() {
  const stack = [
    "Symfony",
    "React",
    "TypeScript",
    "Docker",
    "PostgreSQL",
    "Linux",
    "CI/CD",
  ];

  return (
    <Reveal>
      <section id="stack" className="py-32 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <SectionTitle title="Stack technique" />

          <div className="flex flex-wrap gap-4">
            {stack.map((tech) => (
              <motion.div
                key={tech}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-blue-400 transition"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default Stack;
