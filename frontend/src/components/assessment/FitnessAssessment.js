import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  Grid
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

const steps = [
  'Basic Information',
  'Fitness Goals',
  'Current Activity Level',
  'Health Information'
];

const FitnessAssessment = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    weight: '',
    height: '',
    goals: '',
    activityLevel: '',
    healthConditions: '',
    injuries: ''
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Weight (kg)"
                name="weight"
                type="number"
                value={formData.weight}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Height (cm)"
                name="height"
                type="number"
                value={formData.height}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <FormControl component="fieldset">
            <FormLabel>What are your primary fitness goals?</FormLabel>
            <RadioGroup
              name="goals"
              value={formData.goals}
              onChange={handleChange}
            >
              <FormControlLabel
                value="weightLoss"
                control={<Radio />}
                label="Weight Loss"
              />
              <FormControlLabel
                value="muscleGain"
                control={<Radio />}
                label="Muscle Gain"
              />
              <FormControlLabel
                value="endurance"
                control={<Radio />}
                label="Endurance"
              />
              <FormControlLabel
                value="flexibility"
                control={<Radio />}
                label="Flexibility"
              />
            </RadioGroup>
          </FormControl>
        );
      case 2:
        return (
          <FormControl component="fieldset">
            <FormLabel>How active are you currently?</FormLabel>
            <RadioGroup
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleChange}
            >
              <FormControlLabel
                value="sedentary"
                control={<Radio />}
                label="Sedentary (little or no exercise)"
              />
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Lightly active (light exercise 1-3 days/week)"
              />
              <FormControlLabel
                value="moderate"
                control={<Radio />}
                label="Moderately active (moderate exercise 3-5 days/week)"
              />
              <FormControlLabel
                value="very"
                control={<Radio />}
                label="Very active (hard exercise 6-7 days/week)"
              />
              <FormControlLabel
                value="extra"
                control={<Radio />}
                label="Extra active (very hard exercise & physical job)"
              />
            </RadioGroup>
          </FormControl>
        );
      case 3:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Any health conditions or concerns?"
                name="healthConditions"
                value={formData.healthConditions}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Any injuries or limitations?"
                name="injuries"
                value={formData.injuries}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Fitness Assessment
      </Typography>

      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <MotionPaper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ p: 4, mb: 4 }}
      >
        {getStepContent(activeStep)}
      </MotionPaper>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="outlined"
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default FitnessAssessment; 