import { HiOutlineMail } from "react-icons/hi";
import Reveal from "../components/Reveal";

function Contact() {
  return (
    <Reveal>
      <section id="contact" className="py-32 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-bold mb-6">Travaillons ensemble</h3>

          <p className="text-zinc-400 text-lg mb-10">
            Disponible pour discuter de projets web et développement fullstack.
          </p>

          <a
            href="mailto:contact@aymeric-cucherousset.fr"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-medium hover:opacity-90 transition"
          >
            Me contacter
            <HiOutlineMail size={18} />
          </a>
        </div>
      </section>
    </Reveal>
  );
}

export default Contact;
