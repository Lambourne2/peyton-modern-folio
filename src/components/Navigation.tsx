import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong shadow-glow' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <motion.a
            href="#"
            className="text-xl font-bold font-inter text-gradient hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-5 h-5 inline mr-2 text-accent" />
            Peyton Lambourne
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors relative group font-medium"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="neon-border text-foreground hover:bg-gradient-primary hover:text-white transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            <div className="flex items-center space-x-2">
              {[
                { icon: Github, href: '#', color: 'hover:text-accent' },
                { icon: Linkedin, href: '#', color: 'hover:text-accent-secondary' },
                { icon: Mail, href: '#', color: 'hover:text-accent-tertiary' },
              ].map(({ icon: Icon, href, color }, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  size="sm" 
                  className={`p-3 glass-dark hover:shadow-glow transition-all duration-300 ${color}`}
                  asChild
                >
                  <a href={href}>
                    <Icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-3 glass-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </Button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-strong rounded-xl mt-4 p-6"
            >
              <div className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors py-2 font-medium"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="flex flex-col space-y-4 pt-4 border-t border-border/20">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full neon-border text-foreground hover:bg-gradient-primary hover:text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                  <div className="flex justify-center space-x-4">
                    {[Github, Linkedin, Mail].map((Icon, index) => (
                      <Button 
                        key={index}
                        variant="ghost" 
                        size="sm" 
                        className="p-3 glass-dark hover:shadow-glow"
                      >
                        <Icon className="w-4 h-4" />
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;