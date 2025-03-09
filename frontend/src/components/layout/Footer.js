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
        bgcolor: 'secondary.light',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              FitWell Women
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Empowering women through personalized fitness and nutrition guidance.
              Join our community of strong, healthy women supporting each other on
              their wellness journey.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="primary" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="primary" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="primary" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" display="block" sx={{ mb: 1 }}>
              Home
            </Link>
            <Link href="/health-assessment" color="inherit" display="block" sx={{ mb: 1 }}>
              Health Assessment
            </Link>
            <Link href="/nutrition" color="inherit" display="block" sx={{ mb: 1 }}>
              Nutrition Guide
            </Link>
            <Link href="/about" color="inherit" display="block" sx={{ mb: 1 }}>
              About Us
            </Link>
            <Link href="/contact" color="inherit" display="block">
              Contact
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Have questions? We're here to help!
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email color="primary" sx={{ mr: 1 }} />
              <Link href="mailto:support@fitwellwomen.com" color="inherit">
                support@fitwellwomen.com
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} FitWell Women. All rights reserved.
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Link href="/privacy" color="inherit" sx={{ mx: 1 }}>
              Privacy Policy
            </Link>
            |
            <Link href="/terms" color="inherit" sx={{ mx: 1 }}>
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 