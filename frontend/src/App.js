import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import MainLayout from './components/layout/MainLayout';
import HomePage from './components/home/HomePage';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from './components/auth/ForgotPassword';
import WorkoutPlans from './components/workouts/WorkoutPlans';
import FitnessAssessment from './components/assessment/FitnessAssessment';
import NutritionGuide from './components/nutrition/NutritionGuide';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#2C3E50', // Deep blue-gray
      light: '#34495E',
      dark: '#1A252F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#3498DB', // Bright blue
      light: '#5DADE2',
      dark: '#2874A6',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#E74C3C', // Coral red
      light: '#EC7063',
      dark: '#CB4335',
    },
    success: {
      main: '#2ECC71', // Emerald green
      light: '#58D68D',
      dark: '#27AE60',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
      gradient: 'linear-gradient(135deg, #2C3E50 0%, #3498DB 100%)',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#7F8C8D',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 8px rgba(0,0,0,0.08)',
    '0px 8px 16px rgba(0,0,0,0.1)',
    // ... rest of the shadows remain default
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '1rem',
        },
        contained: {
          boxShadow: '0px 4px 12px rgba(0,0,0,0.15)',
          '&:hover': {
            boxShadow: '0px 6px 16px rgba(0,0,0,0.2)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          } />
          <Route path="/workouts" element={
            <MainLayout>
              <WorkoutPlans />
            </MainLayout>
          } />
          <Route path="/assessment" element={
            <MainLayout>
              <FitnessAssessment />
            </MainLayout>
          } />
          <Route path="/nutrition" element={
            <MainLayout>
              <NutritionGuide />
            </MainLayout>
          } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;