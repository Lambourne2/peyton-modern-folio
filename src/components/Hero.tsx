import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Brain, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div className="mb-8" variants={itemVariants}>
            <div className="relative inline-block">
              <motion.img
                src={profileImage}
                alt="Peyton Lambourne"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-card border-4 border-background"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full shadow-glow"
                variants={iconVariants}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>

          {/* Status Badge */}
          <motion.div className="mb-6" variants={itemVariants}>
            <Badge
              variant="secondary"
              className="glass-dark px-4 py-2 text-sm font-medium animate-glow"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Available for new opportunities
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-inter mb-6 text-white"
            variants={itemVariants}
          >
            Machine Learning{' '}
            <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              Engineer
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Transforming complex data into intelligent solutions. Specializing in
            deep learning, computer vision, and scalable AI systems.
          </motion.p>

          {/* Skills Icons */}
          <motion.div
            className="flex justify-center space-x-8 mb-12"
            variants={itemVariants}
          >
            <motion.div
              className="glass-dark p-4 rounded-xl"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Brain className="w-8 h-8 text-accent" />
            </motion.div>
            <motion.div
              className="glass-dark p-4 rounded-xl"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Code2 className="w-8 h-8 text-primary-glow" />
            </motion.div>
            <motion.div
              className="glass-dark p-4 rounded-xl"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Sparkles className="w-8 h-8 text-accent" />
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg font-semibold hover-lift shadow-glow"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold hover-lift"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            variants={itemVariants}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ChevronDown className="w-6 h-6 text-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;