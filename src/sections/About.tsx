import Reveal from "../components/Reveal";

function About() {
  return (
    <Reveal>
      <section id="about" className="py-32 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-4xl font-bold mb-10">À propos</h3>

          <p className="text-zinc-400 text-lg leading-8 max-w-3xl">
            Développeur fullstack avec une expérience dans la conception
            d’applications métier, d’outils internes et de plateformes web
            modernes. J’aime concevoir des solutions propres, performantes et
            maintenables.
          </p>
        </div>
      </section>
    </Reveal>
  );
}

export default About;
