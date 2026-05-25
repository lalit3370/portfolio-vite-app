
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Brevo",
      location: "Noida, India",
      period: "Mar 2026 - Present",
      description: [
        "Developing AI-powered features behind feature flags for rapid experimentation — shipping fast, monitoring real user behaviour, and rolling back when needed.",
        "Building organisation-level Claude skills to optimise token usage and improve context quality; authored skills for semantic commit messages and automated PR reviews (design system compliance, performance, best practices, code smell detection).",
        "Expanding scope into QA automation scripting and backend development, broadening full-stack contribution."
      ]
    },
    {
      title: "Software Engineer",
      company: "Brevo",
      location: "Noida, India",
      period: "Feb 2023 - Mar 2026",
      description: [
        "Owned end-to-end delivery of Brevo's registration flow (tens of thousands of users) with DB failover handling, multi-language support, fraud prevention (reCAPTCHA v3, eHawk, Sift Science), and input sanitization; deployed a critical hotfix during a live DDoS attack, earning the Core Value Champion Award.",
        "Improved Lighthouse score from 40% to 90% by implementing code splitting, lazy loading, and image optimization; reduced bundle size by replacing Axios with a lightweight custom apiFetch utility.",
        "Built global reusable components (Banner, DatePicker, Toggle, Select), drove DS architecture decisions (props design, factory hooks, state patterns), and authored Storybook docs; led MFE migration via Webpack Module Federation, eliminating hard reloads and redundant fetches.",
        "Integrated FullStory, Elastic RUM, and GTM for session replay, performance monitoring, and A/B testing; owned production incident response and collaborated with the pricing team on feature-flagged rollouts.",
        "Championed React 18 upgrade and DS component revamps across the org; built shared utilities (apiFetch); mentored junior engineers and led PR reviews on performance, accessibility, and code quality."
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Brevo",
      location: "Noida, India",
      period: "Jun 2021 - Feb 2023",
      description: [
        "Grew test coverage from near-zero to 80%+ by introducing snapshot testing patterns, mock Redux store, and standardized Jest timezone across CI environments.",
        "Improved team DX by adding Husky/lint-staged pre-commit hooks, ESLint and Prettier enforcement, reducing review friction and maintaining consistent code quality.",
        "Identified and resolved security vulnerabilities including XSS risks via input sanitization and HTML injection prevention; contributed to frontend performance optimisation across legacy pages."
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
