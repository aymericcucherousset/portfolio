import { motion } from "framer-motion";

function CodePreview() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl"
      >
        <div className="flex gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>

        <pre className="text-sm text-zinc-300 overflow-auto leading-8">
          {`const developer = {
  name: "Aymeric",
  stack: [
    "Symfony",
    "React",
    "TypeScript",
    "Docker"
  ],
  passion: "Créer des outils utiles"
}`}
        </pre>
      </motion.div>
    </div>
  );
}

export default CodePreview;
