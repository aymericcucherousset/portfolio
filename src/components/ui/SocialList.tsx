import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

function SocialList() {
  const socialItems = [
    {
      href: "https://github.com/aymericcucherousset",
      icon: FaGithub,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/aymeric-cucherousset-8b0300220/",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:contact@aymeric-cucherousset.fr",
      icon: HiOutlineMail,
      label: "Email",
    },
  ];

  return (
    <div className="flex gap-5 mt-10 text-zinc-400">
      {socialItems.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={22} className="hover:text-white transition" />
          </a>
        );
      })}
    </div>
  );
}

export default SocialList;
