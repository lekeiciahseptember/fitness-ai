import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Snackbar,
  Alert,
  Stack,
  Paper,
} from '@mui/material';
import {
  Email,
  Phone,
  Business,
  Send,
  Handshake,
  MonetizationOn,
  GroupAdd,
  LocationOn,
  AccessTime,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mrbpzwkg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Thank you for your interest! We will contact you soon.',
          severity: 'success',
        });
        
        // Clear form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Message send failed:', error);
      setSnackbar({
        open: true,
        message: 'There was an error sending your message. Please try again.',
        severity: 'error',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" align="center" gutterBottom color="primary">
            Contact Us
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ mb: 8 }}>
            Join us in empowering women's wellness journey
          </Typography>

          <Grid container spacing={6}>
            {/* Contact Information */}
            <Grid item xs={12} md={5}>
              <Stack spacing={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom color="primary">
                      Get in Touch
                    </Typography>
                    <Stack spacing={3} sx={{ mt: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Email color="primary" sx={{ mr: 2 }} />
                        <Typography>
                          support@fitwellwomen.com
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Phone color="primary" sx={{ mr: 2 }} />
                        <Typography>
                          068 198 6606
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocationOn color="primary" sx={{ mr: 2 }} />
                        <Typography>
                          Cape Town, South Africa
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTime color="primary" sx={{ mr: 2 }} />
                        <Typography>
                          Available: Mon-Fri, 9:00 AM - 5:00 PM SAST
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom color="primary">
                      Why Become a Sponsor?
                    </Typography>
                    <Stack spacing={2} sx={{ mt: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <MonetizationOn color="secondary" sx={{ mr: 2, mt: 0.5 }} />
                        <Typography>
                          Access to a growing community of health-conscious women across South Africa
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <GroupAdd color="secondary" sx={{ mr: 2, mt: 0.5 }} />
                        <Typography>
                          Partnership opportunities in wellness events, workshops, and programs
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Handshake color="secondary" sx={{ mr: 2, mt: 0.5 }} />
                        <Typography>
                          Collaborate on creating positive impact in women's health and wellness initiatives
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom color="primary">
                      Our Mission
                    </Typography>
                    <Typography paragraph sx={{ mt: 2 }}>
                      At FitWell Women, we're dedicated to revolutionizing women's wellness through personalized, 
                      science-backed approaches. Founded by two passionate young tech entrepreneurs - Racheline Mouyana (23) 
                      and Lekeiciah September (21), we combine cutting-edge technology with wellness solutions.
                    </Typography>
                    <Typography paragraph>
                      Racheline, with her expertise in AI, Automation, and Software Engineering, leads our technical 
                      innovation. While Lekeiciah brings her knowledge of Software Engineering, Cloud Computing, and AI 
                      to create scalable, intelligent wellness solutions for women.
                    </Typography>
                    <Typography>
                      Together, we're building a future where technology and wellness intersect to provide 
                      accessible, personalized health solutions for all women.
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            {/* Sponsorship Form */}
            <Grid item xs={12} md={7}>
              <Paper 
                elevation={3}
                sx={{ 
                  p: 4,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography variant="h4" gutterBottom color="primary">
                  Reach out to us!
                </Typography>
                <Typography color="text.secondary" paragraph>
                  Fill out the form below to explore sponsorship opportunities with FitWell Women
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Company Name"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        startIcon={<Send />}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            variant="filled"
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default ContactPage; 