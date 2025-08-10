
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { NAME, POST } from "@/lib/contants";

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "#", label: "Email" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 border-t border-border/20">
      <div className="container-max py-12">
        <div className="text-center space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-2">
              {NAME}
            </h3>
            <p className="text-muted-foreground">
              {POST}
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="p-3 glass rounded-xl text-muted-foreground hover:text-primary transition-all duration-300 hover-glow hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-border/20">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-primary" /> © {currentYear} {NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
