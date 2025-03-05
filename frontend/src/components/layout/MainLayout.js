import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Container, IconButton } from '@mui/material';
import { FitnessCenter, Person, Assessment, Restaurant } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: '#1a237e' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            FitLife
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton color="inherit" component={RouterLink} to="/workouts">
              <FitnessCenter />
            </IconButton>
            <IconButton color="inherit" component={RouterLink} to="/assessment">
              <Assessment />
            </IconButton>
            <IconButton color="inherit" component={RouterLink} to="/nutrition">
              <Restaurant />
            </IconButton>
            <IconButton color="inherit" component={RouterLink} to="/profile">
              <Person />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
        {children}
      </Container>
      <Box component="footer" sx={{ py: 3, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary" align="center">
            © 2024 FitLife. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout; 