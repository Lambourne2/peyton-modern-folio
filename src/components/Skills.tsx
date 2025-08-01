import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Brain, 
  Database, 
  Code2, 
  Cloud, 
  Zap, 
  Cpu,
  BarChart3,
  GitBranch 
} from 'lucide-react';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: "Machine Learning",
      icon: Brain,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        "Deep Learning", "Computer Vision", "NLP", "MLOps", 
        "Model Deployment", "Feature Engineering", "A/B Testing"
      ]
    },
    {
      title: "Programming",
      icon: Code2,
      color: "text-primary-glow",
      bgColor: "bg-primary-glow/10",
      skills: [
        "Python", "PyTorch", "TensorFlow", "Scikit-learn",
        "Pandas", "NumPy", "FastAPI", "Docker"
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "text-success",
      bgColor: "bg-success/10",
      skills: [
        "AWS", "Google Cloud", "Kubernetes", "Terraform",
        "CI/CD", "Monitoring", "Microservices", "PostgreSQL"
      ]
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      color: "text-warning",
      bgColor: "bg-warning/10",
      skills: [
        "SQL", "Apache Spark", "Airflow", "Kafka",
        "Data Pipelines", "ETL", "Data Warehousing", "BI Tools"
      ]
    }
  ];

  const tools = [
    "Python", "PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy",
    "Docker", "Kubernetes", "AWS", "GCP", "PostgreSQL", "MongoDB",
    "Apache Spark", "Airflow", "Kafka", "Redis", "Git", "Linux"
  ];

  return (
    <section id="skills" className="py-20">
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
              Technical Skills
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-inter mb-6">
              Building with{' '}
              <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
                Cutting-Edge Tech
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit spanning machine learning frameworks, cloud platforms,
              and modern development practices for building scalable AI solutions.
            </p>
          </motion.div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div key={category.title} variants={itemVariants}>
                <Card className="glass hover-lift h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`${category.bgColor} p-3 rounded-lg mr-4`}>
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          className="bg-muted/50 rounded-lg px-3 py-2 text-sm font-medium text-center"
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants}>
            <Card className="glass">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Tech Stack & Tools</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.1, y: -3 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="hover-lift px-4 py-2 text-sm font-medium bg-muted/80 hover:bg-accent/20 transition-colors"
                      >
                        {tool}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;