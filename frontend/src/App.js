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
import { motion, AnimatePresence } from 'framer-motion';
import lekeiciahImage from './assets/images/lekeiciah.jpg';
import rachelineImage from './assets/images/racheline.jpg';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import { HealthProvider } from './context/HealthContext';

// Add this new component for animated background elements
const AnimatedBackground = () => {
  return (
    <>
      {/* Flowing lines */}
      <motion.svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.6,
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Curved line 1 */}
        <motion.path
          d="M0,50 Q25,30 50,50 T100,50"
          fill="none"
          stroke="rgba(255,107,152,0.4)"
          strokeWidth="0.3"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Curved line 2 */}
        <motion.path
          d="M0,60 Q35,40 70,60 T100,60"
          fill="none"
          stroke="rgba(156,137,184,0.4)"
          strokeWidth="0.3"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.svg>

      {/* Geometric patterns */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={`circle-${index}`}
          style={{
            position: 'absolute',
            width: 200 + index * 100,
            height: 200 + index * 100,
            border: '1.5px solid rgba(255,107,152,0.25)',
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + index * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Diagonal lines */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={`line-${index}`}
          style={{
            position: 'absolute',
            width: '1.5px',
            height: '100px',
            background: `linear-gradient(180deg, 
              rgba(255,107,152,${0.3 - index * 0.03}) 0%, 
              rgba(156,137,184,${0.3 - index * 0.03}) 100%)`,
            top: `${20 + index * 15}%`,
            left: `${10 + index * 20}%`,
            transform: 'rotate(45deg)',
            transformOrigin: 'top left',
            zIndex: 0,
          }}
          animate={{
            height: ['100px', '150px', '100px'],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 6 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        />
      ))}

      {/* Floating circles with trails */}
      {[...Array(4)].map((_, index) => (
        <React.Fragment key={`circle-trail-${index}`}>
          <motion.div
            style={{
              position: 'absolute',
              width: '6px',
              height: '6px',
              backgroundColor: index % 2 === 0 ? 'rgba(255,107,152,0.4)' : 'rgba(156,137,184,0.4)',
              borderRadius: '50%',
              left: `${20 + index * 20}%`,
              top: '40%',
              zIndex: 0,
            }}
            animate={{
              y: [-50, 50, -50],
              x: [0, 20, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            style={{
              position: 'absolute',
              width: '3px',
              height: '10px',
              background: index % 2 === 0 
                ? 'linear-gradient(180deg, rgba(255,107,152,0.3) 0%, transparent 100%)'
                : 'linear-gradient(180deg, rgba(156,137,184,0.3) 0%, transparent 100%)',
              left: `${20 + index * 20}%`,
              top: '40%',
              zIndex: 0,
            }}
            animate={{
              height: ['10px', '30px', '10px'],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </React.Fragment>
      ))}
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HealthProvider>
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
                <Box sx={{ ml: 2, display: 'flex', gap: 1 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      '&:hover': {
                        borderColor: 'primary.dark',
                        backgroundColor: 'rgba(255,107,152,0.08)',
                      },
                    }}
                    href="/login"
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(45deg, #FF6B98 30%, #9C89B8 90%)',
                      color: 'white',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #FF6B98 40%, #9C89B8 100%)',
                      },
                    }}
                    href="/register"
                  >
                    Register
                  </Button>
                </Box>
              </Toolbar>
            </AppBar>
            <Toolbar /> {/* Spacer for fixed AppBar */}
            
            {/* Add AnimatedBackground at the top level */}
            <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden' }}>
              <AnimatedBackground />
            </Box>

            <Container maxWidth="lg" sx={{ mt: 4, flex: 1, position: 'relative', zIndex: 1 }}>
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
                        overflow: 'hidden',
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
                            sx={{ 
                              mb: 3,
                              position: 'relative',
                              zIndex: 1,
                            }}
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
                            lineHeight: 1.8,
                            position: 'relative',
                            zIndex: 1,
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
                                    src={lekeiciahImage}
                                    sx={{
                                      width: 180,
                                      height: 180,
                                      mx: 'auto',
                                      mb: 3,
                                      border: '4px solid',
                                      borderColor: 'primary.main',
                                    }}
                                  />
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
                                    src={rachelineImage}
                                    sx={{
                                      width: 180,
                                      height: 180,
                                      mx: 'auto',
                                      mb: 3,
                                      border: '4px solid',
                                      borderColor: 'secondary.main',
                                    }}
                                  />
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
                              background: '#2A0F2B',
                              color: 'white',
                              fontWeight: 600,
                              px: 4,
                              py: 1.5,
                              fontSize: '1.1rem',
                              boxShadow: '0 4px 12px rgba(236, 109, 109, 0.2)',
                              '&:hover': {
                                background: '#3D1640',
                                boxShadow: '0 6px 16px rgba(215, 121, 121, 0.3)',
                                transform: 'translateY(-2px)',
                              },
                              transition: 'all 0.3s ease',
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
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </Container>
            <Footer />
          </Box>
        </Router>
      </HealthProvider>
    </ThemeProvider>
  );
}

export default App;