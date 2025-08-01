import { motion } from 'framer-motion';
import { Heart, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold font-inter mb-2">Peyton Lambourne</h3>
              <p className="text-muted-foreground text-sm">
                Machine Learning Engineer
              </p>
            </div>

            {/* Made with love */}
            <div className="text-center">
              <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
                Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> and{' '}
                <Coffee className="w-4 h-4 text-amber-600" /> in Salt Lake City
              </p>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © 2025 Peyton Lambourne. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;