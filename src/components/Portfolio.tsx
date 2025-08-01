import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const projects = [
    {
      title: "CourseTutor",
      description: "RAG-based Streamlit tutor",
      image: "/course-tutor.jpeg",
      tags: ["RAG", "Streamlit", "Python", "AI"],
      demoUrl: "/course-tutor",
      githubUrl: "https://github.com/anshimathur/group-4-project-3",
      featured: true
    },
    {
      title: "BTRFLY Bot",
      description: "Transform your Discord server into a competitive gaming hub with automated queue management, match tracking, and detailed leaderboards. Built for the modern gaming community.",
      image: "/BTR2.png",
      tags: ["Discord", "Bot", "Python", "Gaming"],
      demoUrl: "https://btrflykoth.netlify.app",
      githubUrl: "/btrfly-bot",
      featured: true
    },
    {
      title: "Accudent Dental Lab Website",
      description: "Professional website for a dental laboratory showcasing services and case studies.",
      image: "/accudentcover.png",
      tags: ["Web Design", "React", "Business"],
      demoUrl: "https://accudentdentallab.net",
      githubUrl: "#",
      featured: false
    },
    {
      title: "High Point Coffee Website",
      description: "Modern website for a local coffee shop featuring menu, location, and online ordering.",
      image: "/highpointcover.png",
      tags: ["Web Design", "React", "E-commerce"],
      demoUrl: "https://highpointcoffee.netlify.app",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Life Expectancy Classification",
      description: "Predicting life expectancy classes using machine learning with a custom Delta model.",
      image: "/lifeexpectancy.png",
      tags: ["Machine Learning", "Classification", "Python", "Data Analysis"],
      demoUrl: "#",
      githubUrl: "https://github.com/anshimathur/group-4-project-2",
      featured: false
    },
    {
      title: "Tiktionary",
      description: "RAG based insights and question answering using TikTok Saved Videos (WIP)",
      image: "/tiktionary.png",
      tags: ["RAG", "TikTok", "NLP", "Question Answering"],
      demoUrl: "https://lambourne2.github.io/tiktionary.github.io/index.html",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <Badge variant="outline" className="mb-4 px-3 py-1">
              Portfolio
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-inter mb-6">
              Featured{' '}
              <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A selection of my recent work showcasing expertise in machine learning,
              AI systems, and scalable software architecture.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card className="glass hover-lift overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <CardContent className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <Badge variant="secondary" className="w-fit mb-4 bg-accent/20 text-accent">
                        Featured Project
                      </Badge>
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button 
                          size="sm" 
                          className="hover-lift"
                          onClick={() => {
                            if (project.title === 'BTRFLY Bot') {
                              window.open(project.demoUrl, '_blank');
                            } else if (project.demoUrl && project.demoUrl !== '#') {
                              if (project.demoUrl.startsWith('http')) {
                                window.open(project.demoUrl, '_blank');
                              } else {
                                window.location.href = project.demoUrl;
                              }
                            }
                          }}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="hover-lift"
                          onClick={() => {
                            if (project.title === 'BTRFLY Bot') {
                              window.location.href = project.githubUrl;
                            } else if (project.githubUrl && project.githubUrl !== '#') {
                              window.open(project.githubUrl, '_blank');
                            }
                          }}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center">More Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <motion.div key={project.title} variants={itemVariants}>
                  <Card className="glass hover-lift overflow-hidden h-full">
                    <div className="relative">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <h4 className="text-lg font-semibold mb-3">{project.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="p-2 flex-1"
                          onClick={() => {
                            if (project.title === 'BTRFLY Bot') {
                              window.open(project.demoUrl, '_blank');
                            } else if (project.demoUrl && project.demoUrl !== '#') {
                              if (project.demoUrl.startsWith('http')) {
                                window.open(project.demoUrl, '_blank');
                              } else {
                                window.location.href = project.demoUrl;
                              }
                            }
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="p-2 flex-1"
                          onClick={() => {
                            if (project.title === 'BTRFLY Bot') {
                              window.location.href = project.githubUrl;
                            } else if (project.githubUrl && project.githubUrl !== '#') {
                              window.open(project.githubUrl, '_blank');
                            }
                          }}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
