import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Paper,
  Grid,
  Card,
  CardContent,
  IconButton,
  Avatar,
  Stack,
} from '@mui/material';
import {
  FitnessCenter,
  Restaurant,
  Favorite,
  SelfImprovement,
  Star,
  EmojiEvents,
  Group,
  Spa,
} from '@mui/icons-material';
import theme from './theme';
import HealthAssessment from './components/assessment/HealthAssessment';
import NutritionGuide from './components/nutrition/NutritionGuide';
import ContactPage from './components/contact/ContactPage';
import AboutPage from './components/about/AboutPage';
import Footer from './components/layout/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh',
          background: theme.palette.background.gradient,
        }}>
          <AppBar position="fixed" color="transparent" elevation={0}>
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ 
                  flexGrow: 1, 
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #FF6B98 30%, #9C89B8 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                FitWell Women
              </Typography>
              <Button color="primary" href="/" sx={{ mx: 1 }}>Home</Button>
              <Button color="primary" href="/about" sx={{ mx: 1 }}>About</Button>
              <Button color="primary" href="/health-assessment" sx={{ mx: 1 }}>Health Assessment</Button>
              <Button color="primary" href="/nutrition" sx={{ mx: 1 }}>Nutrition Guide</Button>
              <Button color="primary" href="/contact" sx={{ mx: 1 }}>Contact</Button>
            </Toolbar>
          </AppBar>
          <Toolbar /> {/* Spacer for fixed AppBar */}

          <Container maxWidth="lg" sx={{ mt: 4, flex: 1 }}>
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Box sx={{ 
                      textAlign: 'center', 
                      py: 8,
                      position: 'relative',
                    }}>
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <Typography
                          variant="h1"
                          component="h1"
                          gutterBottom
                          sx={{ mb: 3 }}
                        >
                          Your Journey to Wellness
                        </Typography>
                      </motion.div>
                      <Typography 
                        variant="h5" 
                        color="text.secondary" 
                        paragraph
                        sx={{ 
                          maxWidth: '800px', 
                          mx: 'auto', 
                          mb: 6,
                          lineHeight: 1.8 
                        }}
                      >
                        Discover personalized fitness and nutrition guidance designed specifically
                        for your unique needs as a woman. Start your journey to a healthier,
                        stronger you today.
                      </Typography>

                      <Box sx={{ mb: 8 }}>
                        <Button
                          variant="contained"
                          size="large"
                          href="/health-assessment"
                          sx={{ mr: 2 }}
                        >
                          Start Your Journey
                        </Button>
                        <Button
                          variant="outlined"
                          size="large"
                          href="/nutrition"
                        >
                          Explore Nutrition Guide
                        </Button>
                      </Box>

                      <Grid container spacing={4} sx={{ mt: 4 }}>
                        <Grid item xs={12} md={3}>
                          <Card 
                            component={motion.div}
                            whileHover={{ 
                              translateY: -8,
                              boxShadow: '0px 12px 28px rgba(0,0,0,0.12)'
                            }}
                            sx={{ height: '100%' }}
                          >
                            <CardContent sx={{ textAlign: 'center', py: 4 }}>
                              <IconButton
                                sx={{
                                  backgroundColor: 'primary.light',
                                  mb: 2,
                                  '&:hover': { backgroundColor: 'primary.light' },
                                }}
                                size="large"
                              >
                                <SelfImprovement />
                              </IconButton>
                              <Typography variant="h6" gutterBottom color="primary">
                                Personalized Approach
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Get recommendations tailored to your specific health conditions and wellness goals
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <Card 
                            component={motion.div}
                            whileHover={{ 
                              translateY: -8,
                              boxShadow: '0px 12px 28px rgba(0,0,0,0.12)'
                            }}
                            sx={{ height: '100%' }}
                          >
                            <CardContent sx={{ textAlign: 'center', py: 4 }}>
                              <IconButton
                                sx={{
                                  backgroundColor: 'secondary.light',
                                  mb: 2,
                                  '&:hover': { backgroundColor: 'secondary.light' },
                                }}
                                size="large"
                              >
                                <Restaurant />
                              </IconButton>
                              <Typography variant="h6" gutterBottom color="primary">
                                Nutrition Guidance
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Access meal plans and nutrition advice designed for women's unique needs
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <Card 
                            component={motion.div}
                            whileHover={{ 
                              translateY: -8,
                              boxShadow: '0px 12px 28px rgba(0,0,0,0.12)'
                            }}
                            sx={{ height: '100%' }}
                          >
                            <CardContent sx={{ textAlign: 'center', py: 4 }}>
                              <IconButton
                                sx={{
                                  backgroundColor: 'accent.light',
                                  mb: 2,
                                  '&:hover': { backgroundColor: 'accent.light' },
                                }}
                                size="large"
                              >
                                <FitnessCenter />
                              </IconButton>
                              <Typography variant="h6" gutterBottom color="primary">
                                Safe Workouts
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Exercise routines adapted to your health conditions and fitness level
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <Card 
                            component={motion.div}
                            whileHover={{ 
                              translateY: -8,
                              boxShadow: '0px 12px 28px rgba(0,0,0,0.12)'
                            }}
                            sx={{ height: '100%' }}
                          >
                            <CardContent sx={{ textAlign: 'center', py: 4 }}>
                              <IconButton
                                sx={{
                                  backgroundColor: 'primary.light',
                                  mb: 2,
                                  '&:hover': { backgroundColor: 'primary.light' },
                                }}
                                size="large"
                              >
                                <Favorite />
                              </IconButton>
                              <Typography variant="h6" gutterBottom color="primary">
                                Supportive Community
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Connect with women who share your wellness journey and goals
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      </Grid>

                      {/* New Success Stories Section */}
                      <Box sx={{ mt: 12, mb: 8 }}>
                        <Typography variant="h2" align="center" gutterBottom>
                          Transform Your Life
                        </Typography>
                        <Typography variant="h5" color="text.secondary" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
                          Join thousands of women who have discovered their path to wellness with FitWell Women
                        </Typography>

                        <Grid container spacing={4}>
                          <Grid item xs={12} md={4}>
                            <Card 
                              component={motion.div}
                              whileHover={{ scale: 1.02 }}
                              sx={{ height: '100%', background: 'linear-gradient(135deg, #FFE5ED 0%, #FFF9FB 100%)' }}
                            >
                              <CardContent sx={{ p: 4 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                  <Star sx={{ color: 'primary.main', mr: 1 }} />
                                  <Typography variant="h6" color="primary.main">
                                    Personalized Care
                                  </Typography>
                                </Box>
                                <Typography variant="body1" paragraph>
                                  Our approach considers your unique health conditions, goals, and lifestyle to create a wellness plan that works for you.
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Card 
                              component={motion.div}
                              whileHover={{ scale: 1.02 }}
                              sx={{ height: '100%', background: 'linear-gradient(135deg, #F0E6FF 0%, #FFF9FB 100%)' }}
                            >
                              <CardContent sx={{ p: 4 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                  <EmojiEvents sx={{ color: 'secondary.main', mr: 1 }} />
                                  <Typography variant="h6" color="secondary.main">
                                    Expert Guidance
                                  </Typography>
                                </Box>
                                <Typography variant="body1" paragraph>
                                  Benefit from scientifically-backed nutrition plans and exercise routines designed specifically for women's health needs.
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Card 
                              component={motion.div}
                              whileHover={{ scale: 1.02 }}
                              sx={{ height: '100%', background: 'linear-gradient(135deg, #FFC4DD 0%, #FFF9FB 100%)' }}
                            >
                              <CardContent sx={{ p: 4 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                  <Group sx={{ color: 'accent.main', mr: 1 }} />
                                  <Typography variant="h6" color="accent.main">
                                    Supportive Community
                                  </Typography>
                                </Box>
                                <Typography variant="body1" paragraph>
                                  Connect with like-minded women on similar wellness journeys and share experiences and motivation.
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        </Grid>
                      </Box>

                      {/* Founders Section */}
                      <Box sx={{ mt: 12, mb: 8 }}>
                        <Typography variant="h3" align="center" gutterBottom>
                          Meet Our Founders
                        </Typography>
                        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
                          Young tech entrepreneurs passionate about revolutionizing women's wellness through innovation
                        </Typography>
                        
                        <Grid container spacing={4} justifyContent="center">
                          <Grid item xs={12} md={6}>
                            <Card 
                              component={motion.div}
                              whileHover={{ translateY: -8 }}
                              sx={{ height: '100%' }}
                            >
                              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                <Avatar
                                  sx={{
                                    width: 120,
                                    height: 120,
                                    mx: 'auto',
                                    mb: 3,
                                    border: '4px solid',
                                    borderColor: 'primary.main',
                                  }}
                                >
                                  LS
                                </Avatar>
                                <Typography variant="h5" gutterBottom color="primary">
                                  Lekeiciah September, 21
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                  Co-Founder & Technology Lead
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 2 }}>
                                  Passionate about Software Engineering, Cloud Computing, and AI.
                                  Leading our platform's technical development and cloud infrastructure.
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <Card 
                              component={motion.div}
                              whileHover={{ translateY: -8 }}
                              sx={{ height: '100%' }}
                            >
                              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                <Avatar
                                  sx={{
                                    width: 120,
                                    height: 120,
                                    mx: 'auto',
                                    mb: 3,
                                    border: '4px solid',
                                    borderColor: 'secondary.main',
                                  }}
                                >
                                  RM
                                </Avatar>
                                <Typography variant="h5" gutterBottom color="secondary">
                                  Racheline Mouyana, 23
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                  Co-Founder & Innovation Lead
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 2 }}>
                                  Expert in AI, Automation, and Software Engineering.
                                  Driving our platform's innovative features and automated solutions.
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        </Grid>
                      </Box>

                      {/* Why Choose Us Section */}
                      <Box sx={{ mt: 12, mb: 8, textAlign: 'center' }}>
                        <Typography variant="h2" gutterBottom>
                          Why Choose FitWell Women
                        </Typography>
                        <Typography variant="h5" color="text.secondary" sx={{ mb: 8, maxWidth: 800, mx: 'auto' }}>
                          We understand that every woman's journey is unique, and we're here to support you every step of the way
                        </Typography>

                        <Grid container spacing={4}>
                          <Grid item xs={12} md={6} lg={3}>
                            <Box sx={{ p: 3 }}>
                              <motion.div whileHover={{ scale: 1.1 }}>
                                <IconButton
                                  sx={{
                                    width: 80,
                                    height: 80,
                                    backgroundColor: 'primary.light',
                                    mb: 2,
                                    '&:hover': { backgroundColor: 'primary.light' },
                                  }}
                                >
                                  <SelfImprovement sx={{ fontSize: 40 }} />
                                </IconButton>
                              </motion.div>
                              <Typography variant="h6" gutterBottom>
                                Holistic Approach
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                We consider your physical, mental, and emotional well-being
                              </Typography>
                            </Box>
                          </Grid>

                          <Grid item xs={12} md={6} lg={3}>
                            <Box sx={{ p: 3 }}>
                              <motion.div whileHover={{ scale: 1.1 }}>
                                <IconButton
                                  sx={{
                                    width: 80,
                                    height: 80,
                                    backgroundColor: 'secondary.light',
                                    mb: 2,
                                    '&:hover': { backgroundColor: 'secondary.light' },
                                  }}
                                >
                                  <Star sx={{ fontSize: 40 }} />
                                </IconButton>
                              </motion.div>
                              <Typography variant="h6" gutterBottom>
                                Expert Knowledge
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Research-backed recommendations tailored for women
                              </Typography>
                            </Box>
                          </Grid>

                          <Grid item xs={12} md={6} lg={3}>
                            <Box sx={{ p: 3 }}>
                              <motion.div whileHover={{ scale: 1.1 }}>
                                <IconButton
                                  sx={{
                                    width: 80,
                                    height: 80,
                                    backgroundColor: 'accent.light',
                                    mb: 2,
                                    '&:hover': { backgroundColor: 'accent.light' },
                                  }}
                                >
                                  <Group sx={{ fontSize: 40 }} />
                                </IconButton>
                              </motion.div>
                              <Typography variant="h6" gutterBottom>
                                Supportive Community
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Connect with women on similar wellness journeys
                              </Typography>
                            </Box>
                          </Grid>

                          <Grid item xs={12} md={6} lg={3}>
                            <Box sx={{ p: 3 }}>
                              <motion.div whileHover={{ scale: 1.1 }}>
                                <IconButton
                                  sx={{
                                    width: 80,
                                    height: 80,
                                    backgroundColor: 'primary.light',
                                    mb: 2,
                                    '&:hover': { backgroundColor: 'primary.light' },
                                  }}
                                >
                                  <Spa sx={{ fontSize: 40 }} />
                                </IconButton>
                              </motion.div>
                              <Typography variant="h6" gutterBottom>
                                Personalized Plans
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Custom recommendations based on your unique needs
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>

                      {/* Call to Action Section */}
                      <Box 
                        sx={{ 
                          mt: 12, 
                          mb: 8, 
                          py: 8,
                          px: 4,
                          borderRadius: 4,
                          background: 'linear-gradient(135deg, #FF6B98 0%, #9C89B8 100%)',
                          color: 'white',
                          textAlign: 'center',
                        }}
                      >
                        <Typography variant="h3" gutterBottom sx={{ color: 'white' }}>
                          Start Your Wellness Journey Today
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, color: 'rgba(255,255,255,0.9)' }}>
                          Join our community of women supporting each other in their wellness goals
                        </Typography>
                        <Button
                          variant="contained"
                          size="large"
                          sx={{
                            backgroundColor: 'white',
                            color: 'primary.main',
                            '&:hover': {
                              backgroundColor: 'rgba(255,255,255,0.9)',
                            },
                          }}
                          href="/health-assessment"
                        >
                          Get Started Now
                        </Button>
                      </Box>
                    </Box>
                  </motion.div>
                }
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/health-assessment" element={<HealthAssessment />} />
              <Route path="/nutrition" element={<NutritionGuide />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;