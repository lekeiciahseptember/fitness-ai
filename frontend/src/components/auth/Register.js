import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  Stepper,
  Step,
  StepLabel,
  useTheme,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Google,
  Facebook,
  Apple,
  Email,
  Lock,
  Person,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

const steps = ['Account Details', 'Personal Information', 'Preferences'];

const Register = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    fitnessGoals: [],
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateStep = () => {
    const newErrors = {};
    
    switch (activeStep) {
      case 0:
        if (!formData.email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Invalid email address';
        }
        if (!formData.password) {
          newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
          newErrors.password = 'Password must be at least 6 characters';
        }
        if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match';
        }
        break;
      case 1:
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.age) newErrors.age = 'Age is required';
        break;
      case 2:
        if (!formData.termsAccepted) {
          newErrors.termsAccepted = 'You must accept the terms and conditions';
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      // Add your registration logic here
      console.log('Form submitted:', formData);
    }
  };

  const handleSocialSignup = (provider) => {
    // Add social signup logic here
    console.log('Social signup with:', provider);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        );
      case 1:
        return (
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              error={!!errors.age}
              helperText={errors.age}
            />
          </Stack>
        );
      case 2:
        return (
          <Stack spacing={3}>
            <FormControlLabel
              control={
                <Checkbox
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="I accept the terms and conditions"
            />
            {errors.termsAccepted && (
              <Typography color="error" variant="caption">
                {errors.termsAccepted}
              </Typography>
            )}
          </Stack>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        background: (theme) => theme.palette.background.gradient,
        py: 8,
      }}
    >
      <Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center' }}>
        <MotionPaper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          elevation={3}
          sx={{
            p: 4,
            width: '100%',
            bgcolor: 'background.paper',
          }}
        >
          <MotionBox
            component="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              align="center"
              sx={{ 
                fontWeight: 800,
                background: (theme) => theme.palette.background.gradient,
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 4,
              }}
            >
              Create Account
            </Typography>

            {activeStep === 0 && (
              <>
                <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Google />}
                    onClick={() => handleSocialSignup('google')}
                    sx={{
                      py: 1.2,
                      borderColor: '#DB4437',
                      color: '#DB4437',
                      '&:hover': {
                        borderColor: '#DB4437',
                        bgcolor: 'rgba(219, 68, 55, 0.04)',
                      },
                    }}
                  >
                    Google
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Facebook />}
                    onClick={() => handleSocialSignup('facebook')}
                    sx={{
                      py: 1.2,
                      borderColor: '#4267B2',
                      color: '#4267B2',
                      '&:hover': {
                        borderColor: '#4267B2',
                        bgcolor: 'rgba(66, 103, 178, 0.04)',
                      },
                    }}
                  >
                    Facebook
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Apple />}
                    onClick={() => handleSocialSignup('apple')}
                    sx={{
                      py: 1.2,
                      borderColor: '#000000',
                      color: '#000000',
                      '&:hover': {
                        borderColor: '#000000',
                        bgcolor: 'rgba(0, 0, 0, 0.04)',
                      },
                    }}
                  >
                    Apple
                  </Button>
                </Stack>

                <Divider sx={{ my: 3 }}>
                  <Typography color="text.secondary" variant="body2">
                    OR
                  </Typography>
                </Divider>
              </>
            )}

            <Stepper 
              activeStep={activeStep} 
              sx={{ 
                mb: 4,
                '& .MuiStepLabel-root .Mui-completed': {
                  color: 'success.main',
                },
                '& .MuiStepLabel-root .Mui-active': {
                  color: 'primary.main',
                },
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {getStepContent(activeStep)}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
                sx={{ px: 4 }}
              >
                Back
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    px: 4,
                    background: (theme) => theme.palette.background.gradient,
                    '&:hover': {
                      opacity: 0.9,
                      transform: 'scale(1.02)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Create Account
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{
                    px: 4,
                    background: (theme) => theme.palette.background.gradient,
                    '&:hover': {
                      opacity: 0.9,
                      transform: 'scale(1.02)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Next
                </Button>
              )}
            </Box>

            {activeStep === 0 && (
              <Typography
                align="center"
                variant="body2"
                color="text.secondary"
                sx={{ mt: 3 }}
              >
                Already have an account?{' '}
                <Link
                  component={RouterLink}
                  to="/login"
                  sx={{
                    color: 'primary.main',
                    textDecoration: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Login
                </Link>
              </Typography>
            )}
          </MotionBox>
        </MotionPaper>
      </Container>
    </Box>
  );
};

export default Register; 