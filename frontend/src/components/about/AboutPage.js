import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Spa,
  FitnessCenter,
  Restaurant,
  Favorite,
  Psychology,
  School,
  Timeline,
  EmojiObjects,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" align="center" gutterBottom color="primary">
            About FitWell Women
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ mb: 8, maxWidth: 800, mx: 'auto' }}>
            Empowering women through personalized wellness solutions and expert guidance
          </Typography>

          {/* Our Story Section */}
          <Box sx={{ mb: 12 }}>
            <Typography variant="h3" align="center" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" paragraph align="center" sx={{ maxWidth: 800, mx: 'auto' }}>
              Founded in 2024 by two passionate young entrepreneurs, FitWell Women was born from a vision 
              to revolutionize women's wellness. We recognized the need for personalized health solutions 
              that consider the unique challenges and conditions women face throughout their lives.
            </Typography>
          </Box>

          {/* Founders Section */}
          <Box sx={{ mb: 12 }}>
            <Typography variant="h3" align="center" gutterBottom>
              Meet Our Founders
            </Typography>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Card 
                  component={motion.div}
                  whileHover={{ translateY: -8 }}
                  sx={{ 
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        width: 150,
                        height: 150,
                        mx: 'auto',
                        mb: 3,
                        border: '4px solid',
                        borderColor: 'primary.main',
                      }}
                    >
                      LS
                    </Avatar>
                    <Typography variant="h4" gutterBottom color="primary">
                      Lekeiciah September
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      Co-Founder & Wellness Director
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ mt: 2 }}>
                      At 21, Lekeiciah brings her expertise in Software Engineering, Cloud Computing, and AI
                      to create scalable, intelligent wellness solutions. Her innovative approach combines
                      cutting-edge technology with accessible health solutions for women.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      "I believe in leveraging modern technology to create impactful wellness solutions. 
                      Through cloud computing and AI, we're building a platform that adapts and grows 
                      with our community's needs."
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
                      <IconButton color="primary">
                        <Spa />
                      </IconButton>
                      <IconButton color="primary">
                        <FitnessCenter />
                      </IconButton>
                      <IconButton color="primary">
                        <Psychology />
                      </IconButton>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card 
                  component={motion.div}
                  whileHover={{ translateY: -8 }}
                  sx={{ 
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        width: 150,
                        height: 150,
                        mx: 'auto',
                        mb: 3,
                        border: '4px solid',
                        borderColor: 'secondary.main',
                      }}
                    >
                      RM
                    </Avatar>
                    <Typography variant="h4" gutterBottom color="secondary">
                      Racheline Mouyana
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      Co-Founder & Health Technology Lead
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ mt: 2 }}>
                      At 23, Racheline leads our technical innovation with her expertise in AI, Automation,
                      and Software Engineering. Her passion for combining technology with wellness solutions
                      drives our platform's innovative features and user experience.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      "By harnessing the power of AI and automation, we're creating a wellness platform 
                      that provides truly personalized experiences for every woman in our community."
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
                      <IconButton color="secondary">
                        <Restaurant />
                      </IconButton>
                      <IconButton color="secondary">
                        <School />
                      </IconButton>
                      <IconButton color="secondary">
                        <EmojiObjects />
                      </IconButton>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Our Values Section */}
          <Box sx={{ mb: 12 }}>
            <Typography variant="h3" align="center" gutterBottom>
              Our Values
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              <Grid item xs={12} md={4}>
                <Card 
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  sx={{ height: '100%' }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" gutterBottom color="primary">
                      Personalization
                    </Typography>
                    <Typography variant="body1">
                      We believe in tailored solutions that consider each woman's unique health conditions,
                      lifestyle, and wellness goals.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card 
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  sx={{ height: '100%' }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" gutterBottom color="primary">
                      Innovation
                    </Typography>
                    <Typography variant="body1">
                      Combining cutting-edge technology with evidence-based wellness practices to deliver
                      the best possible solutions.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card 
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  sx={{ height: '100%' }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" gutterBottom color="primary">
                      Community
                    </Typography>
                    <Typography variant="body1">
                      Creating a supportive environment where women can share experiences and inspire
                      each other on their wellness journeys.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Location Section */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" align="center" gutterBottom>
              Our Location
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary">
              Based in Cape Town, South Africa
            </Typography>
            <Typography variant="body1" align="center" sx={{ mt: 2 }}>
              While our physical presence is in Cape Town, our digital platform allows us to serve
              women across South Africa and beyond.
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default AboutPage; 