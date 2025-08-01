import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';
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
    <section id="about" className="py-20 bg-gradient-subtle">
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
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-inter mb-6">
              Passionate about{' '}
              <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
                AI Innovation
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With over 5 years of experience in machine learning and software engineering,
              I specialize in transforming complex data challenges into scalable AI solutions
              that drive business value.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main Content */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a Machine Learning Engineer with a passion for building intelligent systems
                  that solve real-world problems. My expertise spans from deep learning research
                  to production-scale ML infrastructure.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently focused on computer vision, natural language processing, and
                  MLOps practices. I enjoy collaborating with cross-functional teams to
                  deliver AI-powered products that make a meaningful impact.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Info Cards */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <Card className="glass hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Briefcase className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Current Role</h3>
                      <p className="text-muted-foreground text-sm">
                        Senior ML Engineer at Tech Innovation Inc.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-glow/10 p-3 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary-glow" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Education</h3>
                      <p className="text-muted-foreground text-sm">
                        M.S. Computer Science, Stanford University
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-success/10 p-3 rounded-lg">
                      <Award className="w-6 h-6 text-success" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Certifications</h3>
                      <p className="text-muted-foreground text-sm">
                        AWS ML Specialty, Google Cloud Professional ML Engineer
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-warning/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-warning" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground text-sm">
                        San Francisco, CA (Open to Remote)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;