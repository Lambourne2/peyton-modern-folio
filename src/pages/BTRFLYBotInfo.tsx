import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BTRFLYBotInfo = () => {
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
                <h1 className="text-3xl md:text-4xl font-bold font-inter mb-4">BTRFLY Bot</h1>
                <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-foreground mb-8">
                <p className="mb-6 text-lg">
                  BTRFLY Bot is a commercial product designed to transform Discord servers into 
                  competitive gaming hubs with automated queue management, match tracking, and 
                  detailed leaderboards.
                </p>
                
                <p className="mb-6 text-lg">
                  As a commercial product, the source code is proprietary and not available for 
                  public viewing. The implementation details and intellectual property are 
                  protected to maintain the competitive advantage of the product.
                </p>
                
                <div className="bg-muted/50 rounded-xl p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Live Product
                  </h2>
                  <p className="text-center mb-4">
                    Experience the BTRFLY Bot in action on our live platform
                  </p>
                  <div className="flex justify-center">
                    <Button 
                      onClick={() => window.open('https://btrflykoth.netlify.app', '_blank')}
                      className="bg-gradient-primary hover:shadow-glow"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </Button>
                  </div>
                </div>
                
                <div className="text-center text-muted-foreground mt-8">
                  <p>
                    This is a commercial product with proprietary source code.
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

export default BTRFLYBotInfo;
