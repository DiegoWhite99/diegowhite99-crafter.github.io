import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { usePortfolioContent } from '@/hooks/use-portfolio-content';

type Project = ReturnType<typeof usePortfolioContent>['projects'][number];

function ProjectImage({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const showImage = project.image && !failed;

  return (
    <div className="relative h-48 overflow-hidden">
      {showImage ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onError={() => setFailed(true)}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        // Graceful fallback for projects without a preview image
        <div className="flex h-48 w-full items-center justify-center bg-gradient-primary transition-transform duration-500 group-hover:scale-105">
          <span className="text-5xl font-bold text-primary-foreground/90">
            {project.title.trim().charAt(0)}
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const { projects } = usePortfolioContent();

  const hasDemo = (demo?: string) => !!demo && demo !== '#';

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {t('projects.title')}
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                style={{ animationDelay: `${index * 0.08}s` }}
                className="group flex flex-col overflow-hidden border-border/50 animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-large hover:border-primary/40"
              >
                <ProjectImage project={project} />

                <CardContent className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold mb-3 transition-colors duration-200 group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full transition-colors duration-200 group-hover:bg-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 transition-colors duration-200 group-hover:border-primary/40"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        {t('projects.viewCode')}
                      </a>
                    </Button>
                    {hasDemo(project.demo) && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-accent hover:opacity-90"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {t('projects.liveDemo')}
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
