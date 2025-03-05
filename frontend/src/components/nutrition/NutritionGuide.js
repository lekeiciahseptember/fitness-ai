import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Restaurant,
  LocalDining,
  RestaurantMenu,
  FoodBank,
  CheckCircle,
  Timer
} from '@mui/icons-material';

const MotionCard = motion(Card);

const mealPlans = [
  {
    title: 'Breakfast',
    time: '7:00 AM',
    meals: [
      'Oatmeal with fruits and nuts',
      'Greek yogurt with honey',
      'Whole grain toast with avocado'
    ],
    calories: '400-500',
    image: 'https://source.unsplash.com/random/400x300/?breakfast'
  },
  {
    title: 'Lunch',
    time: '12:30 PM',
    meals: [
      'Grilled chicken salad',
      'Quinoa bowl with vegetables',
      'Whole grain wrap with lean protein'
    ],
    calories: '500-600',
    image: 'https://source.unsplash.com/random/400x300/?lunch'
  },
  {
    title: 'Dinner',
    time: '7:00 PM',
    meals: [
      'Baked salmon with vegetables',
      'Turkey stir-fry with brown rice',
      'Vegetable soup with whole grain bread'
    ],
    calories: '500-600',
    image: 'https://source.unsplash.com/random/400x300/?dinner'
  }
];

const nutritionTips = [
  'Stay hydrated by drinking 8-10 glasses of water daily',
  'Include a variety of colorful vegetables in your meals',
  'Choose whole grains over refined grains',
  'Limit processed foods and added sugars',
  'Eat lean proteins with every meal',
  'Include healthy fats like avocados and nuts',
  'Practice portion control',
  'Plan your meals ahead of time'
];

const NutritionGuide = () => {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Nutrition Guide
      </Typography>

      {/* Meal Planning Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Daily Meal Plan
        </Typography>
        <Grid container spacing={4}>
          {mealPlans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionCard
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                sx={{ height: '100%' }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={plan.image}
                  alt={plan.title}
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {plan.title}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip
                      icon={<Timer />}
                      label={plan.time}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                    <Chip
                      icon={<FoodBank />}
                      label={`${plan.calories} calories`}
                      size="small"
                      color="secondary"
                      variant="outlined"
                    />
                  </Stack>
                  <List>
                    {plan.meals.map((meal, mealIndex) => (
                      <ListItem key={mealIndex}>
                        <ListItemIcon>
                          <LocalDining color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={meal} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Nutrition Tips Section */}
      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
          Nutrition Tips
        </Typography>
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <List>
              {nutritionTips.map((tip, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle color="success" />
                    </ListItemIcon>
                    <ListItemText primary={tip} />
                  </ListItem>
                  {index < nutritionTips.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>

      {/* Additional Resources */}
      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
          Additional Resources
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <Restaurant sx={{ mr: 1 }} />
                  Meal Prep Guide
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Learn how to prepare healthy meals in advance to save time and stay on track with your nutrition goals.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <RestaurantMenu sx={{ mr: 1 }} />
                  Recipe Collection
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Access our collection of healthy and delicious recipes suitable for all fitness goals.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default NutritionGuide; 