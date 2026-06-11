import { motion } from "framer-motion";

function Navbar() {
  const navItems = [
    { href: "#about", label: "À propos" },
    { href: "#stack", label: "Stack" },
    { href: "#projects", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero">
          <h1 className="text-xl font-bold">
            Aymeric<span className="text-blue-400">.</span>
          </h1>
        </a>

        <nav className="hidden md:flex gap-8 text-sm text-zinc-400">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white transition"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;
