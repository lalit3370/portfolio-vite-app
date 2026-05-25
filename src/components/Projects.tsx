import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
	const projects = [
		{
			title: "DatePicker — Org-wide Design System",
			description:
				"Accessible DatePicker (single & range) with keyboard/ARIA support, custom triggers, and localization. Proposed and implemented a factory hook pattern that cut repetitive setup by ~60%, adopted across all Brevo product teams.",
			technologies: [
				"React",
				"TypeScript",
				"Design System",
				"ARIA",
				"Factory Hooks",
				"Storybook",
			],
			image:
				"https://images.unsplash.com/photo-1606327054629-64c8b0fd6e4f?w=800&h=600&fit=crop",
			github: "",
			demo: "https://naos.brevo.design",
		},
		{
			title: "Optimize Translation Script",
			description:
				"JS script that detects and removes redundant or unused translation keys across all frontend repos, reducing bundle size and eliminating repetitive manual cleanup org-wide.",
			technologies: [
				"Node.js",
				"JavaScript",
				"AST",
				"i18n",
				"Bundle Optimization",
			],
			image:
				"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
			github: "",
			demo: "",
		},
		{
			title: "Cross-Repo Automated Upgrade CLI",
			description:
				"Shell-based CLI that auto-verifies, installs, and raises PRs across consuming repos — extended with GitHub Actions for release-triggered rollouts and auto-generated PR descriptions.",
			technologies: [
				"Shell",
				"Node.js",
				"GitHub Actions",
				"Automation",
				"Monorepo",
			],
			image:
				"https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
			github: "",
			demo: "",
		},
		{
			title: "Token Driven Design System",
			description:
				"A scalable design system focused on consistency and constraints. Built with a token-first approach, opinionated component APIs, and Storybook as the primary documentation layer. Prioritizes maintainability over visual experimentation.",
			technologies: [
				"React",
				"SCSS",
				"CSS Variables",
				"Design Tokens",
				"Storybook",
				"Vitest",
			],
			image:
				"https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
			github: "https://github.com/lalit3370/chaos-ds",
			demo: "https://projects.lalitkumar.dev/?path=/story/components-stepper--primary",
		},
	];

	return (
		<section id="projects" className="section-padding relative">
			{/* Background Elements */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute bottom-0 right-0 w-80 h-80 gradient-hero rounded-full blur-3xl"></div>
			</div>

			<div className="container-max relative z-10">
				<div className="text-center mb-16">
					<h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient animate-fade-in-up">
						Featured Projects
					</h2>
					<p
						className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
						style={{ animationDelay: "0.2s" }}
					>
						A showcase of my recent work and personal projects
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="group glass rounded-2xl overflow-hidden hover-glow transition-all duration-500 hover:scale-105 animate-fade-in-up"
							style={{ animationDelay: `${0.4 + index * 0.2}s` }}
						>
							<div className="relative overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</div>

							<div className="p-8">
								<h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
									{project.title}
								</h3>

								<p className="text-muted-foreground leading-relaxed mb-4">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-6">
									{project.technologies.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="px-3 py-1 text-sm bg-secondary/50 text-secondary-foreground rounded-lg"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex gap-4">
									{project.github && (
										<Button
											variant="outline"
											size="sm"
											className="flex items-center gap-2 glass border-border/50 hover:border-primary/50"
											onClick={() => window.open(project.github)}
										>
											<Github size={16} />
											Code
										</Button>
									)}
									{project.demo && (
										<Button
											size="sm"
											className="flex items-center gap-2 gradient-primary hover-glow"
											onClick={() => window.open(project.demo)}
										>
											<ExternalLink size={16} />
											Demo
										</Button>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
