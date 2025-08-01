import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseTutorInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          
          <Card className="glass">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold font-inter mb-4">CourseTutor</h1>
                <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-foreground mb-8">
                <p className="mb-6 text-lg">
                  CourseTutor was developed as a school project during my machine learning studies. 
                  The project demonstrates the application of Retrieval-Augmented Generation (RAG) 
                  techniques in creating an educational tutoring system.
                </p>
                
                <p className="mb-6 text-lg">
                  As an academic project, the source code is available on GitHub for educational 
                  purposes and to showcase my work in machine learning and natural language processing.
                </p>
                
                <div className="bg-muted/50 rounded-xl p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center justify-center">
                    <Github className="w-5 h-5 mr-2" />
                    View Source Code
                  </h2>
                  <p className="text-center mb-4">
                    Access the GitHub repository to explore the implementation details
                  </p>
                  <div className="flex justify-center">
                    <Button 
                      onClick={() => window.open('https://github.com/anshimathur/group-4-project-3', '_blank')}
                      className="bg-gradient-primary hover:shadow-glow"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  </div>
                </div>
                
                <div className="text-center text-muted-foreground mt-8">
                  <p>
                    This project represents my academic work and is shared for educational purposes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseTutorInfo;
