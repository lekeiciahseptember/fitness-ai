import React, { useState } from 'react';
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
} from '@mui/material';
import {
  FitnessCenter,
  Restaurant,
  CheckCircle,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import MealPlanGuide from '../nutrition/MealPlanGuide';

const healthConditions = [
  {
    id: 'pregnancy',
    label: 'Pregnancy',
    recommendations: {
      exercise: [
        'Low-impact cardio like walking or swimming',
        'Prenatal yoga',
        'Pelvic floor exercises',
        'Modified strength training with lighter weights'
      ],
      nutrition: [
        'Increase folic acid intake',
        'Consume more iron-rich foods',
        'Stay hydrated',
        'Eat small, frequent meals'
      ]
    }
  },
  {
    id: 'pcos',
    label: 'PCOS',
    recommendations: {
      exercise: [
        'Regular moderate cardio',
        'Strength training',
        'HIIT workouts',
        'Yoga for stress management'
      ],
      nutrition: [
        'Low glycemic index foods',
        'Anti-inflammatory foods',
        'Limit processed sugars',
        'Include lean proteins'
      ]
    }
  },
  {
    id: 'thyroid',
    label: 'Thyroid Conditions',
    recommendations: {
      exercise: [
        'Low to moderate intensity cardio',
        'Light strength training',
        'Yoga and stretching',
        'Walking'
      ],
      nutrition: [
        'Iodine-rich foods',
        'Selenium-rich foods',
        'Avoid processed foods',
        'Regular meal timing'
      ]
    }
  },
  {
    id: 'arthritis',
    label: 'Arthritis',
    recommendations: {
      exercise: [
        'Water aerobics',
        'Gentle yoga',
        'Low-impact exercises',
        'Range of motion exercises'
      ],
      nutrition: [
        'Anti-inflammatory foods',
        'Omega-3 rich foods',
        'Calcium and vitamin D',
        'Avoid processed foods'
      ]
    }
  },
  {
    id: 'endometriosis',
    label: 'Endometriosis',
    recommendations: {
      exercise: [
        'Low-impact exercises',
        'Pelvic floor exercises',
        'Gentle stretching',
        'Walking and swimming'
      ],
      nutrition: [
        'Anti-inflammatory diet',
        'Avoid caffeine and alcohol',
        'Rich in omega-3 fatty acids',
        'High-fiber foods'
      ]
    }
  },
  {
    id: 'menopause',
    label: 'Menopause',
    recommendations: {
      exercise: [
        'Weight-bearing exercises',
        'Resistance training',
        'Balance exercises',
        'Yoga for stress relief'
      ],
      nutrition: [
        'Foods rich in calcium and vitamin D',
        'Phytoestrogen-rich foods',
        'Reduce caffeine and spicy foods',
        'Increase protein intake'
      ]
    }
  },
  {
    id: 'osteoporosis',
    label: 'Osteoporosis',
    recommendations: {
      exercise: [
        'Weight-bearing exercises',
        'Balance training',
        'Low-impact activities',
        'Resistance exercises with guidance'
      ],
      nutrition: [
        'High calcium foods',
        'Vitamin D rich foods',
        'Protein-rich diet',
        'Limit sodium intake'
      ]
    }
  },
  {
    id: 'diabetes',
    label: 'Diabetes',
    recommendations: {
      exercise: [
        'Regular aerobic exercise',
        'Strength training',
        'Flexibility exercises',
        'Monitor blood sugar during workouts'
      ],
      nutrition: [
        'Low glycemic index foods',
        'Control carbohydrate portions',
        'Regular meal timing',
        'High-fiber foods'
      ]
    }
  }
];

const HealthAssessment = () => {
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleConditionChange = (conditionId) => {
    setSelectedConditions(prev => {
      if (prev.includes(conditionId)) {
        return prev.filter(id => id !== conditionId);
      }
      return [...prev, conditionId];
    });
    setShowRecommendations(false);
  };

  const getRecommendations = () => {
    const recommendations = {
      exercise: new Set(),
      nutrition: new Set()
    };

    selectedConditions.forEach(conditionId => {
      const condition = healthConditions.find(c => c.id === conditionId);
      if (condition) {
        condition.recommendations.exercise.forEach(rec => recommendations.exercise.add(rec));
        condition.recommendations.nutrition.forEach(rec => recommendations.nutrition.add(rec));
      }
    });

    return {
      exercise: Array.from(recommendations.exercise),
      nutrition: Array.from(recommendations.nutrition)
    };
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h1" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
            Health Assessment
          </Typography>
          <Typography variant="h5" color="text.secondary" align="center" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
            Tell us about your health conditions so we can provide personalized recommendations for your wellness journey.
          </Typography>
        </motion.div>
        
        <Card 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          sx={{ 
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom color="primary" sx={{ mb: 3 }}>
              Select any health conditions that apply to you:
            </Typography>
            
            <Grid container spacing={2}>
              {healthConditions.map((condition) => (
                <Grid item xs={12} sm={6} key={condition.id}>
                  <Card 
                    variant="outlined" 
                    sx={{ 
                      borderColor: selectedConditions.includes(condition.id) ? 'primary.main' : 'divider',
                      backgroundColor: selectedConditions.includes(condition.id) ? 'primary.light' : 'transparent',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedConditions.includes(condition.id)}
                            onChange={() => handleConditionChange(condition.id)}
                            color="primary"
                          />
                        }
                        label={
                          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                            {condition.label}
                          </Typography>
                        }
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 4 }}
              onClick={() => setShowRecommendations(true)}
              disabled={selectedConditions.length === 0}
            >
              Get Personalized Recommendations
            </Button>
          </CardContent>
        </Card>

        {showRecommendations && selectedConditions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box sx={{ mt: 6 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <IconButton
                          sx={{
                            backgroundColor: 'primary.light',
                            mr: 2,
                            '&:hover': { backgroundColor: 'primary.light' },
                          }}
                        >
                          <FitnessCenter />
                        </IconButton>
                        <Typography variant="h6" color="primary">
                          Exercise Recommendations
                        </Typography>
                      </Box>
                      <Divider sx={{ mb: 3 }} />
                      {getRecommendations().exercise.map((rec, index) => (
                        <Alert 
                          icon={<CheckCircle fontSize="inherit" />}
                          severity="info" 
                          sx={{ mt: 1 }} 
                          key={index}
                        >
                          {rec}
                        </Alert>
                      ))}
                    </CardContent>
                  </Card>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <IconButton
                          sx={{
                            backgroundColor: 'secondary.light',
                            mr: 2,
                            '&:hover': { backgroundColor: 'secondary.light' },
                          }}
                        >
                          <Restaurant />
                        </IconButton>
                        <Typography variant="h6" color="primary">
                          Nutrition Recommendations
                        </Typography>
                      </Box>
                      <Divider sx={{ mb: 3 }} />
                      {getRecommendations().nutrition.map((rec, index) => (
                        <Alert 
                          icon={<CheckCircle fontSize="inherit" />}
                          severity="success" 
                          sx={{ mt: 1 }} 
                          key={index}
                        >
                          {rec}
                        </Alert>
                      ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>

            <MealPlanGuide selectedConditions={selectedConditions} />
          </motion.div>
        )}
      </Box>
    </Container>
  );
};

export default HealthAssessment; 