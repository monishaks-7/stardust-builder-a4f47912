import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import scienceLabImage from '@/assets/project-science-lab.jpg';
import farmMarketplaceImage from '@/assets/project-farm-marketplace.jpg';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Interactive Science Learning Website',
      description: 'AI-enhanced virtual science lab with real-time simulations and intelligent quizzes. Developed using React.js, JavaScript, HTML5, and CSS3.',
      tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'AI Integration'],
      period: '2024-2025',
      role: 'Front-End Developer',
      highlights: [
        'Interactive experiments and quizzes',
        'AI for instant feedback',
        '24/7 accessible simulations',
        'Reduced dependency on physical labs',
      ],
      gradient: 'from-primary to-secondary',
      image: scienceLabImage,
    },
    {
      title: 'Fresh Farm Marketplace',
      description: 'Web-based marketplace to digitally empower farmers by enabling product listings and direct contact for orders.',
      tech: ['Web Development', 'HTML', 'CSS', 'JavaScript'],
      period: '2025',
      role: 'Intern - MAESTROMINDS',
      highlights: [
        'Direct farm-to-consumer connections',
        'Reduced role of middlemen',
        'Fair pricing for farmers',
        'Access to fresh, organic produce',
      ],
      gradient: 'from-secondary to-accent',
      image: farmMarketplaceImage,
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full card-glow hover:border-primary/50 transition-all duration-300 group relative overflow-hidden">
                {/* Gradient Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg -m-6 mb-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>

                <div className="space-y-6 p-8">
                  {/* Header */}
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {project.role}
                      </span>
                      <span>{project.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <motion.div
                        key={hIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + hIndex * 0.05 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-foreground/70">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-muted text-foreground/80 border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4">
                    <Button variant="outline" size="sm" className="group/btn">
                      <Github className="mr-2 h-4 w-4 group-hover/btn:text-primary transition-colors" />
                      View Code
                    </Button>
                    <Button size="sm" className="group/btn">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default ProjectsSection;
