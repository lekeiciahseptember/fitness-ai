import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Alert,
  Container,
  Grid,
  IconButton,
  Divider,
  Stepper,
  Step,
  StepLabel,
  Paper,
  TextField,
  CircularProgress,
} from '@mui/material';
import {
  FitnessCenter,
  Restaurant,
  CheckCircle,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useHealth } from '../../context/HealthContext';
import { generateWeeklyMealPlan, generateShoppingList } from '../nutrition/mealPlanData';

const commonAllergies = [
  { id: 'dairy', label: 'Dairy', icon: '🥛' },
  { id: 'nuts', label: 'Tree Nuts', icon: '🥜' },
  { id: 'peanuts', label: 'Peanuts', icon: '🥜' },
  { id: 'eggs', label: 'Eggs', icon: '🥚' },
  { id: 'soy', label: 'Soy', icon: '🫘' },
  { id: 'wheat', label: 'Wheat/Gluten', icon: '🌾' },
  { id: 'fish', label: 'Fish', icon: '🐟' },
  { id: 'shellfish', label: 'Shellfish', icon: '🦐' },
];

const healthConditions = [
  { id: 'pregnancy', label: 'Pregnancy' },
  { id: 'pcos', label: 'PCOS' },
  { id: 'thyroid', label: 'Thyroid Conditions' },
  { id: 'arthritis', label: 'Arthritis' },
  { id: 'endometriosis', label: 'Endometriosis' },
  { id: 'menopause', label: 'Menopause' },
  { id: 'osteoporosis', label: 'Osteoporosis' },
  { id: 'diabetes', label: 'Diabetes' },
];

const fitnessGoals = [
  { id: 'weight_loss', label: 'Weight Loss' },
  { id: 'muscle_gain', label: 'Muscle Gain' },
  { id: 'maintenance', label: 'Maintenance' },
  { id: 'energy', label: 'Increased Energy' },
  { id: 'endurance', label: 'Improved Endurance' },
];

const steps = ['Health Conditions', 'Allergies & Restrictions', 'Fitness Goals', 'Review'];

const HealthAssessment = () => {
  const navigate = useNavigate();
  const { healthData, updateHealthData } = useHealth();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    healthConditions: [],
    allergies: [],
    fitnessGoals: [],
    additionalNotes: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setIsLoading(true);
      try {
        const mealPlan = generateWeeklyMealPlan({
          allergies: formData.allergies,
          healthConditions: formData.healthConditions,
          fitnessGoals: formData.fitnessGoals
        });
        
        const shoppingList = generateShoppingList(mealPlan);
        
        updateHealthData({
          allergies: formData.allergies,
          healthConditions: formData.healthConditions,
          fitnessGoals: formData.fitnessGoals,
          additionalNotes: formData.additionalNotes,
          currentMealPlan: mealPlan,
          shoppingList: shoppingList,
        });

        setSuccess(true);
        // Navigate after a short delay to show success message
        setTimeout(() => {
          navigate('/nutrition');
        }, 1500);
      } catch (error) {
        setError('Failed to generate meal plan. Please try again.');
      } finally {
        setIsLoading(false);
      }
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleChange = (section) => (event) => {
    const { name, checked, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [section]: section === 'additionalNotes' 
        ? value 
        : checked 
          ? [...prev[section], name]
          : prev[section].filter(item => item !== name),
    }));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Select any health conditions that apply:
            </Typography>
            <Grid container spacing={2}>
              {healthConditions.map((condition) => (
                <Grid item xs={12} sm={6} key={condition.id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.healthConditions.includes(condition.id)}
                        onChange={handleChange('healthConditions')}
                        name={condition.id}
                      />
                    }
                    label={condition.label}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        );

      case 1:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Select any allergies or dietary restrictions:
            </Typography>
            <Grid container spacing={2}>
              {commonAllergies.map((allergy) => (
                <Grid item xs={12} sm={6} md={3} key={allergy.id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.allergies.includes(allergy.id)}
                        onChange={handleChange('allergies')}
                        name={allergy.id}
                      />
                    }
                    label={`${allergy.icon} ${allergy.label}`}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        );

      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Select your fitness goals:
            </Typography>
            <Grid container spacing={2}>
              {fitnessGoals.map((goal) => (
                <Grid item xs={12} sm={6} key={goal.id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.fitnessGoals.includes(goal.id)}
                        onChange={handleChange('fitnessGoals')}
                        name={goal.id}
                      />
                    }
                    label={goal.label}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        );

      case 3:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Review Your Information
            </Typography>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Health Conditions:
              </Typography>
              <Typography color="text.secondary" paragraph>
                {formData.healthConditions.length > 0
                  ? formData.healthConditions.map(id => 
                      healthConditions.find(c => c.id === id)?.label
                    ).join(', ')
                  : 'None selected'}
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                Allergies & Restrictions:
              </Typography>
              <Typography color="text.secondary" paragraph>
                {formData.allergies.length > 0
                  ? formData.allergies.map(id => 
                      commonAllergies.find(a => a.id === id)?.label
                    ).join(', ')
                  : 'None selected'}
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                Fitness Goals:
              </Typography>
              <Typography color="text.secondary">
                {formData.fitnessGoals.length > 0
                  ? formData.fitnessGoals.map(id => 
                      fitnessGoals.find(g => g.id === id)?.label
                    ).join(', ')
                  : 'None selected'}
              </Typography>
            </Paper>

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Additional Notes"
              value={formData.additionalNotes}
              onChange={handleChange('additionalNotes')}
              variant="outlined"
            />
          </Box>
        );

      default:
        return null;
    }
  };

  // If success, show success message
  if (success) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ 
          py: 8, 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3 
        }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle 
              sx={{ 
                fontSize: 80, 
                color: 'success.main',
                mb: 2
              }} 
            />
          </motion.div>
          <Typography variant="h4" gutterBottom color="primary">
            Plan Generated Successfully!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Redirecting you to your personalized nutrition guide...
          </Typography>
          <CircularProgress sx={{ mt: 2 }} />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" align="center" gutterBottom color="primary">
            Health Assessment
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ mb: 8 }}>
            Let's create your personalized wellness plan
          </Typography>

          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Paper 
            elevation={0}
            sx={{ 
              p: 4, 
              borderRadius: 2,
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {renderStepContent(activeStep)}

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={isLoading}
                sx={{
                  background: 'linear-gradient(45deg, #FF6B98 30%, #9C89B8 90%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FF6B98 40%, #9C89B8 100%)',
                  },
                }}
              >
                {isLoading ? 'Generating...' : activeStep === steps.length - 1 ? 'Generate Plan' : 'Next'}
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default HealthAssessment; 