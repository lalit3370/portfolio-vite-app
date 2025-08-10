
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Brevo",
      location: "Noida, India",
      period: "2023 - Present",
      description: [
        "Contributed to the development and enhancement of the internal UI component library.",
        "Collaborated with designers to implement pixel-perfect user interfaces.",
        "Built and maintained CI/CD pipelines to automate testing and deployment processes.",
        "Designed scalable, maintainable component architectures for long-term sustainability.",
        "Focused on accessibility and mobile-first development approaches.",
        "Integrated security tools such as Google reCAPTCHA, Ehawk Talon, and SiftScience to mitigate DDoS attacks and enhance platform security."
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Brevo",
      location: "Noida, India",
      period: "2021 - 2023",
      description: [
        "Developed and enhanced the user registration flow to improve onboarding experience.",
        "Integrated third-party analytics solutions, including ElasticSearch, for enhanced data insights.",
        "Maintained and optimized existing features while resolving reported bugs.",
        "Improved application performance through targeted optimizations and code refactoring.",
        "Built proficiency in modern JavaScript frameworks and advanced build tools."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 gradient-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient animate-fade-in-up">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            My professional journey building exceptional web experiences
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in-up`}
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass rounded-2xl p-8 hover-glow transition-all duration-300">
                    <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                      <Calendar size={16} />
                      {experience.period}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {experience.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <span className="font-semibold">{experience.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {experience.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground leading-relaxed">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
