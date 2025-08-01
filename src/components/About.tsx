import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
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

  return (
    <section id="about" className="py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-accent-secondary/20 to-accent-tertiary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Enhanced Section Header */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <Badge variant="outline" className="mb-6 px-4 py-2 neon-border text-foreground">
              <Sparkles className="w-4 h-4 mr-2 text-accent" />
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-inter mb-8">
              Passionate about{' '}
              <span className="text-gradient text-shimmer">
                AI Innovation
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              With over 5 years of experience in machine learning and software engineering,
              I specialize in transforming complex data challenges into{' '}
              <span className="text-gradient font-semibold">scalable AI solutions</span>{' '}
              that drive business value.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Main Content */}
            <motion.div variants={itemVariants}>
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a machine learning engineer with end-to-end experience in Python, neural networks, and RAG pipelines. My passion lies in creating intelligent solutions that solve real-world problems through data-driven approaches.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I built CourseTutor, an AI study assistant using LangChain, FAISS, and Streamlit, to help students pull context-rich answers from their course materials. This project showcases my ability to combine various technologies to create practical applications that enhance learning experiences.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a strong foundation in machine learning algorithms, data preparation, and full-stack development, I'm constantly exploring new technologies and approaches to build more effective AI solutions.
                </p>

                {/* Enhanced Key Stats */}
                <div className="grid grid-cols-2 gap-8 pt-12">
                  <motion.div 
                    className="text-center glass-dark p-6 rounded-2xl hover-glow"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-4xl font-black text-gradient mb-3">10+</div>
                    <div className="text-sm text-muted-foreground font-medium">Years Design Experience</div>
                  </motion.div>
                  <motion.div 
                    className="text-center glass-dark p-6 rounded-2xl hover-glow"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-4xl font-black text-gradient mb-3">2+</div>
                    <div className="text-sm text-muted-foreground font-medium">Years ML Experience</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Info Cards */}
            <motion.div className="space-y-6" variants={itemVariants}>
              {[
                {
                  icon: Briefcase,
                  title: "Current Role",
                  description: "Machine Learning Engineer & Graphic Designer",
                  color: "from-accent to-accent-secondary",
                  bgColor: "bg-accent/10"
                },
                {
                  icon: GraduationCap,
                  title: "Education",
                  description: "University of Utah - Machine Learning Bootcamp (Professional Certificate) Nov 2024 – May 2025",
                  color: "from-accent-secondary to-accent-tertiary",
                  bgColor: "bg-accent-secondary/10"
                },
                {
                  icon: Award,
                  title: "Additional Education",
                  description: "Salt Lake Community College - General Education & Intro to CS (Associate's Coursework) Mar 2022 – Present",
                  color: "from-accent-tertiary to-accent",
                  bgColor: "bg-accent-tertiary/10"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  description: "Salt Lake City, UT",
                  color: "from-accent to-accent-tertiary",
                  bgColor: "bg-gradient-to-br from-accent/10 to-accent-tertiary/10"
                }
              ].map((item, index) => (
                <motion.div key={item.title} variants={itemVariants}>
                  <Card className="glass-strong hover-lift group">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <motion.div 
                          className={`${item.bgColor} p-4 rounded-xl bg-gradient-to-br ${item.color} shadow-glow`}
                        >
                          <item.icon className="w-6 h-6 text-white drop-shadow-lg" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;