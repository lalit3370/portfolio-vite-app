
import { Code2, Palette, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Redux', 'Webpack',
    'Module Federation', 'Jest', 'React Testing Library', 'Storybook',
    'HTML', 'CSS', 'GitHub Actions', 'Elastic RUM', 'FullStory', 'Claude Code'
  ];

  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Design Systems",
      description: "Built reusable components (DatePicker, Banner, Select) for Brevo's org-wide DS — props design, factory hooks, Storybook docs."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Lifted Lighthouse from 40% to 90% via code splitting, lazy loading, image optimization, and a lightweight apiFetch utility."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "AI & Tooling",
      description: "Building organisation-level Claude skills for semantic commits and automated PR reviews — DS compliance, performance, code smells."
    }
  ];

  return (
    <section id="about" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-64 h-64 gradient-hero rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient animate-fade-in-up">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Senior Software Engineer at Brevo with 5+ years building frontend at
            scale — owning Brevo's registration flow, driving the org-wide design
            system, championing performance and React upgrades, and now shipping
            AI-powered features and Claude tooling for the engineering org.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-8 hover-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="text-primary mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="glass px-6 py-3 rounded-xl text-foreground font-medium hover-glow transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
