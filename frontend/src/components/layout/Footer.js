import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, rgba(255,107,152,0.05) 0%, rgba(156,137,184,0.05) 100%)',
        borderTop: '1px solid rgba(255,107,152,0.1)',
        py: 6,
        mt: 'auto',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, rgba(255,107,152,0.3), rgba(156,137,184,0.3))',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                background: 'linear-gradient(45deg, #FF6B98 30%, #9C89B8 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
              }}
            >
              FitWell Women
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Empowering women through personalized fitness and nutrition guidance.
              Join our community of strong, healthy women supporting each other on
              their wellness journey.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <IconButton 
                sx={{ 
                  mr: 1,
                  '&:hover': {
                    background: 'linear-gradient(45deg, rgba(255,107,152,0.1), rgba(156,137,184,0.1))',
                  }
                }}
              >
                <Facebook color="primary" />
              </IconButton>
              <IconButton 
                sx={{ 
                  mr: 1,
                  '&:hover': {
                    background: 'linear-gradient(45deg, rgba(255,107,152,0.1), rgba(156,137,184,0.1))',
                  }
                }}
              >
                <Twitter color="primary" />
              </IconButton>
              <IconButton 
                sx={{ 
                  mr: 1,
                  '&:hover': {
                    background: 'linear-gradient(45deg, rgba(255,107,152,0.1), rgba(156,137,184,0.1))',
                  }
                }}
              >
                <Instagram color="primary" />
              </IconButton>
              <IconButton 
                sx={{ 
                  '&:hover': {
                    background: 'linear-gradient(45deg, rgba(255,107,152,0.1), rgba(156,137,184,0.1))',
                  }
                }}
              >
                <LinkedIn color="primary" />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                background: 'linear-gradient(45deg, #FF6B98 30%, #9C89B8 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
              }}
            >
              Quick Links
            </Typography>
            <Link 
              href="/" 
              sx={{ 
                display: 'block', 
                mb: 1,
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              Home
            </Link>
            <Link 
              href="/health-assessment" 
              sx={{ 
                display: 'block', 
                mb: 1,
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              Health Assessment
            </Link>
            <Link 
              href="/nutrition" 
              sx={{ 
                display: 'block', 
                mb: 1,
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              Nutrition Guide
            </Link>
            <Link 
              href="/about" 
              sx={{ 
                display: 'block', 
                mb: 1,
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              sx={{ 
                display: 'block',
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              Contact
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                background: 'linear-gradient(45deg, #FF6B98 30%, #9C89B8 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
              }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
              Have questions? We're here to help!
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email sx={{ mr: 1, color: 'primary.main' }} />
              <Link 
                href="mailto:support@fitwellwomen.com" 
                sx={{ 
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'primary.main',
                  }
                }}
              >
                support@fitwellwomen.com
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, opacity: 0.1 }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            © {new Date().getFullYear()} FitWell Women. All rights reserved.
          </Typography>
          <Box>
            <Link 
              href="/privacy" 
              sx={{ 
                mx: 1,
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              Privacy Policy
            </Link>
            <Typography component="span" color="text.secondary">|</Typography>
            <Link 
              href="/terms" 
              sx={{ 
                mx: 1,
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 