import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Brain, Code2, Download, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };


  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Spectacular Animated Background */}
      <div className="absolute inset-0 bg-background">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent to-accent-secondary rounded-full blur-3xl opacity-20 animate-pulse-slow" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-accent-secondary to-accent-tertiary rounded-full blur-3xl opacity-15 animate-float" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-accent-tertiary to-accent rounded-full blur-3xl opacity-25 animate-pulse-slow" />
        </div>

        {/* Interactive Cursor Effect */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
          }}
          animate={{
            scale: [1, 1.2],
            opacity: [0.1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-80 h-80 bg-gradient-to-br from-accent/10 to-accent-secondary/10 rounded-full blur-2xl" />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, -40],
              opacity: [0.3, 0.8],
              scale: [1, 1.5],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image with Enhanced Effects */}
          <motion.div className="mb-8" variants={itemVariants}>
            <div className="relative inline-block">
              <motion.div
                className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.img
                src={profileImage}
                alt="Peyton Lambourne"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto border-4 border-card/50 shadow-glow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full shadow-glow"
                animate={{
                  y: [-20, 20, -20],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                }}
              >
                <Sparkles className="w-5 h-5 text-white m-1.5" />
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Status Badge */}
          <motion.div className="mb-8" variants={itemVariants}>
            <Badge
              variant="secondary"
              className="bg-gradient-primary text-white px-6 py-3 text-sm font-medium shadow-glow hover:shadow-glow-secondary transition-all duration-500 hover:scale-105"
            >
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Available for new opportunities
            </Badge>
          </motion.div>

          {/* Spectacular Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black font-inter mb-8 leading-tight"
            variants={itemVariants}
          >
            <span className="block text-foreground mb-2">Machine Learning</span>
            <span className="block text-gradient text-shimmer bg-gradient-primary animate-gradient">
              Engineer
            </span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Transforming complex data into{' '}
            <span className="text-gradient font-semibold">intelligent solutions</span>.
            Specializing in deep learning, computer vision, and scalable AI systems.
          </motion.p>

          {/* Enhanced Skills Icons */}
          <motion.div
            className="flex justify-center space-x-8 mb-16"
            variants={itemVariants}
          >
            {[
              { icon: Brain, color: 'from-accent to-accent-secondary', delay: 0 },
              { icon: Code2, color: 'from-accent-secondary to-accent-tertiary', delay: 0.2 },
              { icon: Sparkles, color: 'from-accent-tertiary to-accent', delay: 0.4 },
            ].map(({ icon: Icon, color, delay }, index) => (
              <motion.div
                key={index}
                className={`glass-strong p-6 rounded-2xl bg-gradient-to-br ${color} shadow-glow`}
                whileHover={{ 
                  scale: 1.2, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300,
                  delay: delay
                }}
                animate={{
                  y: [0, -10],
                }}
                style={{
                  animationDelay: `${delay}s`,
                  animationDuration: '4s',
                  animationIterationCount: 'infinite',
                }}
              >
                <Icon className="w-10 h-10 text-white drop-shadow-lg" />
              </motion.div>
            ))}
          </motion.div>

          {/* Spectacular CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-primary text-white px-12 py-4 text-xl font-bold hover:shadow-glow-secondary transition-all duration-500 border-0 shadow-glow"
              >
                <Play className="w-6 h-6 mr-3" />
                View My Work
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="neon-border text-foreground hover:bg-gradient-primary hover:text-white px-12 py-4 text-xl font-bold transition-all duration-500 bg-transparent"
              >
                <Download className="w-6 h-6 mr-3" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            variants={itemVariants}
            animate={{
              y: [0, 15],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="glass-dark p-4 rounded-full">
              <ChevronDown className="w-6 h-6 text-accent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;