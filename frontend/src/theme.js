import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B98', // Soft rose pink
      light: '#FFB5C9',
      dark: '#D84C77',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#9C89B8', // Lavender purple
      light: '#F0E6FF',
      dark: '#786A94',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#F0A6CA', // Soft coral
      light: '#FFC4DD',
      dark: '#C87FA0',
    },
    background: {
      default: '#FFF9FB',
      paper: '#FFFFFF',
      gradient: 'linear-gradient(135deg, #FFE5ED 0%, #FFF9FB 100%)',
    },
    text: {
      primary: '#2C1810',
      secondary: '#6B5E59',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      background: 'linear-gradient(45deg, #FF6B98 30%, #9C89B8 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.00938em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0px 2px 8px rgba(0,0,0,0.04)',
    '0px 4px 16px rgba(0,0,0,0.06)',
    '0px 6px 24px rgba(0,0,0,0.08)',
    // ... rest of the shadows remain default
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '12px 28px',
          fontSize: '1rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(0,0,0,0.12)',
            transform: 'translateY(-1px)',
          },
          transition: 'all 0.3s ease',
        },
        contained: {
          background: 'linear-gradient(45deg, #FF6B98 30%, #F0A6CA 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #FF6B98 40%, #F0A6CA 100%)',
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
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 8px 24px rgba(0,0,0,0.08)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: '16px 0',
          },
          boxShadow: '0px 2px 8px rgba(0,0,0,0.04)',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderRadius: '16px 16px 0 0',
          '&.Mui-expanded': {
            background: 'rgba(240, 166, 202, 0.08)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          '&.MuiChip-outlined': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid',
        },
        standardSuccess: {
          backgroundColor: 'rgba(240, 166, 202, 0.12)',
          borderColor: 'rgba(240, 166, 202, 0.3)',
          color: '#C87FA0',
        },
        standardInfo: {
          backgroundColor: 'rgba(156, 137, 184, 0.12)',
          borderColor: 'rgba(156, 137, 184, 0.3)',
          color: '#786A94',
        },
      },
    },
  },
});

export default theme; 