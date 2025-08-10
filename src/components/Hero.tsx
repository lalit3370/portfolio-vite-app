import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { copyEmailToClipboard } from "@/lib/utils";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, NAME, POST } from "@/lib/contants";

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 gradient-hero rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground font-medium">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient">{NAME}</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                {POST}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Crafting exceptional digital experiences with modern web
              technologies. Passionate about performance, accessibility, and
              user-centered design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleScrollToProjects}
                size="lg"
                className="gradient-primary hover-glow text-lg px-8 py-3 rounded-xl font-semibold"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border/50 hover:border-primary/50 text-lg px-8 py-3 rounded-xl font-semibold glass"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "./resume.pdf";
                  link.download =
                    "lalit-kumar-singh-senior-software-engineer.pdf";
                  link.click();
                }}
              >
                Download Resume
              </Button>
            </div>

            <div className="flex space-x-6">
              <a
                href={GITHUB_URL}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href={LINKEDIN_URL}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={() => copyEmailToClipboard(toast)}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto aspect-square glass rounded-3xl p-8 hover-glow">
                <div className="w-full h-full gradient-secondary rounded-2xl flex items-center justify-center">
                  {/* <div className="text-6xl text-gradient font-bold">AJ</div> */}
                  <img
                    src="./profile.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float"></div>
            <div
              className="absolute bottom-10 left-0 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default Hero;
