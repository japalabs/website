import { Github, Instagram, X, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
      <div className="flex items-center space-x-8">
        <a
          href="#"
          className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
          aria-label="Follow us on X"
        >
          <X className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
          aria-label="Follow us on GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
          aria-label="Follow us on Instagram"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
          aria-label="Follow us on LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
