import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  FitnessCenter,
  Assessment,
  Restaurant,
  Timeline,
  ArrowForward
} from '@mui/icons-material';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const features = [
  {
    icon: <FitnessCenter sx={{ fontSize: 40, color: '#2196f3' }} />,
    title: 'Personalized Workouts',
    description: 'Get customized workout plans based on your fitness level and goals.',
    link: '/workouts',
    color: '#2196f3'
  },
  {
    icon: <Assessment sx={{ fontSize: 40, color: '#4caf50' }} />,
    title: 'Fitness Assessment',
    description: 'Take our assessment to determine your current fitness level and track progress.',
    link: '/assessment',
    color: '#4caf50'
  },
  {
    icon: <Restaurant sx={{ fontSize: 40, color: '#ff9800' }} />,
    title: 'Nutrition Guide',
    description: 'Learn about proper nutrition and get meal planning tips.',
    link: '/nutrition',
    color: '#ff9800'
  },
  {
    icon: <Timeline sx={{ fontSize: 40, color: '#9c27b0' }} />,
    title: 'Progress Tracking',
    description: 'Monitor your fitness journey with detailed progress tracking.',
    link: '/profile',
    color: '#9c27b0'
  }
];

const HomePage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(45deg, #1a237e 30%, #2196f3 90%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          mb: 6,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' }
                  }}
                >
                  Your Fitness Journey Starts Here
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mb: 4, opacity: 0.9 }}
                >
                  Get personalized fitness recommendations and track your progress with our AI-powered platform.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/assessment')}
                  sx={{
                    backgroundColor: 'white',
                    color: '#1a237e',
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                      transform: 'scale(1.05)',
                    },
                    transition: 'all 0.3s ease',
                    px: 4,
                    py: 1.5,
                  }}
                >
                  GET STARTED
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Add hero image or animation here if needed */}
              </Grid>
            </Grid>
          </Container>
        </MotionBox>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Why Choose FitLife?
        </Typography>

        <MotionBox
          component={Grid}
          container
          spacing={4}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MotionCard
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: theme.shadows[4],
                }}
                transition={{ duration: 0.3 }}
                sx={{ height: '100%', cursor: 'pointer' }}
                onClick={() => navigate(feature.link)}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    align="center"
                    sx={{ fontWeight: 600 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button
                    size="small"
                    color="primary"
                    endIcon={<ArrowForward />}
                    onClick={() => navigate(feature.link)}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </MotionCard>
            </Grid>
          ))}
        </MotionBox>
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          backgroundColor: 'grey.100',
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Ready to Transform Your Fitness Journey?
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              Join thousands of others who have already started their transformation with FitLife.
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => navigate('/register')}
                sx={{
                  mr: 2,
                  px: 4,
                  py: 1.5,
                }}
              >
                Sign Up Now
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => navigate('/login')}
                sx={{
                  px: 4,
                  py: 1.5,
                }}
              >
                Login
              </Button>
            </Box>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage; 