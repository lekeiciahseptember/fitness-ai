import React, { useState } from 'react';
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
  Stack,
  Tabs,
  Tab
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Restaurant,
  LocalDining,
  RestaurantMenu,
  FoodBank,
  CheckCircle,
  Timer,
  FitnessCenter,
  Favorite,
  LocalHospital,
  EmojiObjects
} from '@mui/icons-material';

const MotionCard = motion(Card);

const nutritionCategories = {
  essentials: {
    title: "Women's Essential Nutrients",
    items: [
      {
        nutrient: 'Iron',
        description: 'Essential for preventing anemia and maintaining energy levels',
        sources: ['Lean red meat', 'Spinach', 'Lentils', 'Fortified cereals'],
        icon: <LocalHospital color="error" />
      },
      {
        nutrient: 'Calcium',
        description: 'Crucial for bone health and preventing osteoporosis',
        sources: ['Greek yogurt', 'Almonds', 'Leafy greens', 'Fortified milk'],
        icon: <FitnessCenter color="primary" />
      },
      {
        nutrient: 'Folate',
        description: 'Important for cell growth and DNA synthesis',
        sources: ['Dark leafy greens', 'Citrus fruits', 'Beans', 'Whole grains'],
        icon: <Favorite color="secondary" />
      },
      {
        nutrient: 'Vitamin D',
        description: 'Supports bone health and immune system',
        sources: ['Fatty fish', 'Egg yolks', 'Mushrooms', 'Fortified foods'],
        icon: <EmojiObjects color="warning" />
      }
    ]
  },
  mealPlans: {
    title: 'Balanced Meal Plans',
    plans: [
      {
        title: 'Energy-Boosting Breakfast',
        meals: [
          'Greek yogurt parfait with berries and honey',
          'Spinach and mushroom omelet with whole-grain toast',
          'Overnight oats with chia seeds and almond milk',
          'Smoothie bowl with mixed fruits and granola'
        ]
      },
      {
        title: 'Nutrient-Rich Lunch',
        meals: [
          'Quinoa bowl with grilled chicken and vegetables',
          'Mediterranean salad with chickpeas and olive oil',
          'Turkey and avocado wrap with mixed greens',
          'Lentil soup with whole-grain bread'
        ]
      },
      {
        title: 'Balanced Dinner',
        meals: [
          'Baked salmon with roasted vegetables',
          'Stir-fried tofu with brown rice and broccoli',
          'Lean beef stir-fry with mixed vegetables',
          'Grilled chicken with sweet potato and asparagus'
        ]
      }
    ]
  }
};

const NutritionGuide = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          sx={{ color: 'primary.main', mb: 4 }}
        >
          Women's Nutrition Guide
        </Typography>

        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          sx={{ mb: 4 }}
        >
          <Tab label="Essential Nutrients" icon={<LocalHospital />} />
          <Tab label="Meal Plans" icon={<Restaurant />} />
        </Tabs>

        {activeTab === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={3}>
              {nutritionCategories.essentials.items.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        {item.icon}
                        <Typography variant="h6" sx={{ ml: 1 }}>
                          {item.nutrient}
                        </Typography>
                      </Box>
                      <Typography color="text.secondary" paragraph>
                        {item.description}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        {item.sources.map((source, idx) => (
                          <Chip
                            key={idx}
                            label={source}
                            sx={{ m: 0.5 }}
                            color="secondary"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        )}

        {activeTab === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={3}>
              {nutritionCategories.mealPlans.plans.map((plan, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom color="primary">
                        {plan.title}
                      </Typography>
                      <List>
                        {plan.meals.map((meal, idx) => (
                          <ListItem key={idx}>
                            <ListItemIcon>
                              <Restaurant color="secondary" />
                            </ListItemIcon>
                            <ListItemText primary={meal} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        )}
      </Box>
    </Container>
  );
};

export default NutritionGuide; 