import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isSubmitted) return;
    
    setIsSubmitting(true);
    
    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Message sent successfully!", {
          description: "I'll get back to you soon.",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lambourne.dev@gmail.com",
      link: "mailto:lambourne.dev@gmail.com",
      color: "text-accent"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(801)-231-7176",
      link: "tel:+18012317176",
      color: "text-primary-glow"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Salt Lake City, UT",
      link: "#",
      color: "text-success"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/Lambourne2",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/peyton-lambourne",
      color: "hover:text-blue-500"
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://x.com/Lambournnne",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20">
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
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-inter mb-6">
              Let's{' '}
              <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
                Work Together
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm always interested in discussing new opportunities, innovative projects,
              and ways we can leverage AI to solve complex challenges.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 rounded-lg glass hover-lift transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <div className={`${info.color} bg-current/10 p-3 rounded-lg`}>
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`glass p-3 rounded-lg text-muted-foreground transition-colors ${social.color} hover-lift`}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <Card className="glass">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="text-2xl mb-4">🎉</div>
                      <h4 className="text-lg font-semibold mb-2">Message Sent!</h4>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. I'll get back to you soon!
                      </p>
                    </div>
                  ) : (
                    <form 
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <div hidden>
                        <label>
                          Don't fill this out if you're human: 
                          <input name="bot-field" />
                        </label>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            className="glass-dark"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            className="glass-dark"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="What's this about?"
                          className="glass-dark"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project..."
                          rows={6}
                          className="glass-dark resize-none"
                          required
                        />
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-accent hover:bg-accent/90 text-white hover-lift shadow-glow"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;