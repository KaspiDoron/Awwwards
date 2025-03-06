import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const links = [
  { href: "https://x.com/KaspiDoron", icon: <FaXTwitter /> },
  { href: "https://www.instagram.com/doron.kaspi/", icon: <FaInstagram /> },
  {
    href: "https://www.linkedin.com/in/doron-kaspi-%E2%98%85-3041a9188/",
    icon: <FaLinkedin />,
  },
  {
    href: "https://github.com/KaspiDoron",
    icon: <FaGithub />,
  },
];

function Footer() {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left font-general">
          &copy;Kaspi 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link) => (
            <a
              key={link}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
