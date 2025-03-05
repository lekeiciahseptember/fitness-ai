import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Tabs,
  Tab,
  Chip,
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';
import { Timer, FitnessCenter, TrendingUp } from '@mui/icons-material';

const MotionCard = motion(Card);

const workoutCategories = [
  {
    id: 'beginner',
    label: 'Beginner',
    workouts: [
      {
        title: 'Full Body Starter',
        duration: '30 mins',
        difficulty: 'Beginner',
        exercises: 8,
        description: 'Perfect for those just starting their fitness journey. Focuses on basic movements and proper form.',
        tags: ['Full Body', 'No Equipment', 'Low Impact']
      },
      {
        title: 'Core Foundation',
        duration: '25 mins',
        difficulty: 'Beginner',
        exercises: 6,
        description: 'Build a strong foundation with core-focused exercises.',
        tags: ['Core', 'No Equipment', 'Low Impact']
      }
    ]
  },
  {
    id: 'intermediate',
    label: 'Intermediate',
    workouts: [
      {
        title: 'Strength Builder',
        duration: '45 mins',
        difficulty: 'Intermediate',
        exercises: 12,
        description: 'Increase your strength with this comprehensive workout.',
        tags: ['Strength', 'Equipment Needed', 'Medium Impact']
      },
      {
        title: 'HIIT Circuit',
        duration: '35 mins',
        difficulty: 'Intermediate',
        exercises: 10,
        description: 'High-intensity interval training for maximum calorie burn.',
        tags: ['HIIT', 'Cardio', 'High Impact']
      }
    ]
  }
];

const WorkoutPlans = () => {
  const [selectedCategory, setSelectedCategory] = useState('beginner');

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const currentWorkouts = workoutCategories.find(cat => cat.id === selectedCategory)?.workouts || [];

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Workout Plans
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          centered
          sx={{ mb: 2 }}
        >
          {workoutCategories.map((category) => (
            <Tab
              key={category.id}
              label={category.label}
              value={category.id}
            />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {currentWorkouts.map((workout, index) => (
          <Grid item xs={12} md={6} key={index}>
            <MotionCard
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              sx={{ height: '100%' }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {workout.title}
                </Typography>
                
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <Chip
                    icon={<Timer />}
                    label={workout.duration}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                  <Chip
                    icon={<FitnessCenter />}
                    label={`${workout.exercises} exercises`}
                    size="small"
                    color="secondary"
                    variant="outlined"
                  />
                  <Chip
                    icon={<TrendingUp />}
                    label={workout.difficulty}
                    size="small"
                    color="success"
                    variant="outlined"
                  />
                </Stack>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {workout.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                  {workout.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      label={tag}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Stack>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View Details
                </Button>
                <Button size="small" color="primary" variant="contained">
                  Start Workout
                </Button>
              </CardActions>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WorkoutPlans; 