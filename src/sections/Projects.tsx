import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { FaArrowRight } from "react-icons/fa6";
import SectionTitle from "../components/ui/SectionTitle";

function Projects() {
  const projects = [
    {
      title: "Moteur de recherche radio-dentaire",
      stack: "PHP • Python • MariaDB",
      description:
        "Développement d’un moteur de recherche permettant l’indexation et la recherche optimisée de radios dentaires au sein d’un environnement médical.",
      link: false,
      url: "",
    },
    {
      title: "Sensibilisation Phishing",
      stack: "Symfony • PostgreSQL • Docker",
      description:
        "Application interne permettant la sensibilisation des collaborateurs aux risques de phishing.",
      link: false,
      url: "",
    },
  ];

  return (
    <Reveal>
      <section id="projects" className="py-32 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle title="Projets" />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-400 transition-colors duration-300"
              >
                <p className="text-blue-400 text-sm mb-3">{project.stack}</p>

                <h4 className="text-2xl font-semibold mb-4">{project.title}</h4>

                <p className="text-zinc-400 leading-7 mb-6">
                  {project.description}
                </p>

                {project.link && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-300 group-hover:text-blue-400 transition cursor-pointer"
                  >
                    Voir le projet
                    <FaArrowRight size={16} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default Projects;
