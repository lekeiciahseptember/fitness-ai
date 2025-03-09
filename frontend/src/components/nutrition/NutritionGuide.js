import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import {
  Restaurant,
  WaterDrop,
  FitnessCenter,
  Spa,
  LocalHospital,
  Opacity,
  EggAlt,
  GrassOutlined,
  SetMeal,
  Apple,
  EmojiFoodBeverage,
  BakeryDining,
  Print,
  Download,
  Share,
  BloodtypeOutlined,
  FitnessCenterOutlined,
  PregnantWomanOutlined,
  WbSunnyOutlined,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { generateWeeklyMealPlan, generateShoppingList } from './mealPlanData';
import { useHealth } from '../../context/HealthContext';

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

const essentialNutrients = [
  {
    name: "Iron",
    importance: "Critical for preventing anemia, supporting energy levels, and oxygen transport",
    sources: ["Lean red meat", "Spinach", "Lentils", "Fortified cereals", "Quinoa"],
    rda: "18mg daily (27mg during pregnancy)",
    icon: <BloodtypeOutlined />,
    tips: "Pair with vitamin C-rich foods to enhance absorption"
  },
  {
    name: "Calcium",
    importance: "Essential for bone health, muscle function, and hormone signaling",
    sources: ["Greek yogurt", "Almonds", "Leafy greens", "Fortified plant milk", "Sardines"],
    rda: "1000-1200mg daily",
    icon: <FitnessCenterOutlined />,
    tips: "Take with vitamin D for optimal absorption"
  },
  {
    name: "Folate",
    importance: "Crucial for cell growth, DNA synthesis, and preventing birth defects",
    sources: ["Dark leafy greens", "Legumes", "Citrus fruits", "Eggs", "Fortified grains"],
    rda: "400mcg daily (600mcg during pregnancy)",
    icon: <PregnantWomanOutlined />,
    tips: "Essential before and during pregnancy"
  },
  {
    name: "Vitamin D",
    importance: "Supports bone health, immune function, and mood regulation",
    sources: ["Sunlight exposure", "Fatty fish", "Egg yolks", "Fortified dairy", "Mushrooms"],
    rda: "600-800 IU daily",
    icon: <WbSunnyOutlined />,
    tips: "Consider supplements if limited sun exposure"
  },
  {
    name: "Magnesium",
    importance: "Supports muscle and nerve function, energy production, and bone health",
    sources: ["Nuts", "Seeds", "Whole grains", "Dark chocolate", "Avocados"],
    rda: "310-320mg daily",
    icon: <Spa />,
    tips: "Helps with stress relief and sleep quality"
  },
  {
    name: "Omega-3 Fatty Acids",
    importance: "Support heart, brain, and joint health; reduce inflammation",
    sources: ["Fatty fish", "Chia seeds", "Flaxseeds", "Walnuts", "Algae oil"],
    rda: "1.1g daily",
    icon: <SetMeal />,
    tips: "Essential for hormonal balance"
  }
];

const NutritionGuide = () => {
  const { healthData } = useHealth();
  const { currentMealPlan, shoppingList } = healthData;

  const nutrients = [
    {
      category: "Proteins",
      icon: <EggAlt />,
      description: "Essential for muscle maintenance and repair",
      sources: [
        "Lean meats and poultry",
        "Fish and seafood",
        "Eggs",
        "Legumes and beans",
        "Greek yogurt",
        "Quinoa"
      ],
      benefits: "Crucial for hormone production, immune function, and tissue repair. Women need about 0.8-1g per kg of body weight daily."
    },
    {
      category: "Healthy Fats",
      icon: <Restaurant />,
      description: "Important for hormone balance and nutrient absorption",
      sources: [
        "Avocados",
        "Olive oil",
        "Nuts and seeds",
        "Fatty fish (salmon, mackerel)",
        "Chia seeds",
        "Flaxseeds"
      ],
      benefits: "Support brain health, reduce inflammation, and help maintain healthy skin. Essential for vitamin absorption."
    },
    {
      category: "Complex Carbohydrates",
      icon: <BakeryDining />,
      description: "Provide sustained energy and fiber",
      sources: [
        "Whole grains",
        "Sweet potatoes",
        "Quinoa",
        "Brown rice",
        "Oats",
        "Legumes"
      ],
      benefits: "Provide steady energy, support gut health, and help maintain stable blood sugar levels."
    },
    {
      category: "Vitamins & Minerals",
      icon: <LocalHospital />,
      description: "Essential micronutrients for overall health",
      sources: [
        "Iron: leafy greens, red meat",
        "Calcium: dairy, leafy greens",
        "Vitamin D: sunlight, fatty fish",
        "B12: animal products, fortified foods",
        "Folate: leafy greens, legumes",
        "Magnesium: nuts, seeds, whole grains"
      ],
      benefits: "Critical for bone health, energy production, and preventing anemia - especially important for women."
    },
    {
      category: "Antioxidants",
      icon: <GrassOutlined />,
      description: "Protect cells from damage",
      sources: [
        "Berries",
        "Dark leafy greens",
        "Dark chocolate",
        "Green tea",
        "Pomegranates",
        "Colorful vegetables"
      ],
      benefits: "Help fight aging, support immune system, and protect against various diseases."
    },
    {
      category: "Hydration",
      icon: <WaterDrop />,
      description: "Essential for all bodily functions",
      sources: [
        "Water",
        "Herbal teas",
        "Coconut water",
        "Fruits with high water content",
        "Vegetables with high water content",
        "Clear broths"
      ],
      benefits: "Aids digestion, supports skin health, regulates body temperature. Aim for 2-3 liters daily."
    }
  ];

  const [selectedAllergies, setSelectedAllergies] = useState([]);

  // Update the Weekly Meal Plan section to use the meal plan from context
  const renderMealPlan = () => (
    <Paper 
      elevation={0}
      sx={{ 
        p: 4, 
        mb: 4, 
        borderRadius: 2,
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" color="primary">
          Your Weekly Meal Plan
        </Typography>
        <Box>
          <IconButton color="primary" title="Print">
            <Print />
          </IconButton>
          <IconButton color="primary" title="Download">
            <Download />
          </IconButton>
          <IconButton color="primary" title="Share">
            <Share />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={3}>
        {currentMealPlan?.map((dayPlan) => (
          <Grid item xs={12} md={6} lg={4} key={dayPlan.day}>
            <Paper 
              elevation={2}
              sx={{ 
                p: 2,
                height: '100%',
                background: 'white',
              }}
            >
              <Typography variant="h6" gutterBottom color="primary">
                {dayPlan.day}
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText 
                    primary="Breakfast"
                    secondary={dayPlan.meals.breakfast?.name || 'Alternative meal needed'}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText 
                    primary="Lunch"
                    secondary={dayPlan.meals.lunch?.name || 'Alternative meal needed'}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText 
                    primary="Dinner"
                    secondary={dayPlan.meals.dinner?.name || 'Alternative meal needed'}
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );

  // Update the Shopping List section to use the shopping list from context
  const renderShoppingList = () => (
    <Paper 
      elevation={0}
      sx={{ 
        p: 4, 
        borderRadius: 2,
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" color="primary">
          Weekly Shopping List
        </Typography>
        <Box>
          <IconButton color="primary" title="Print">
            <Print />
          </IconButton>
          <IconButton color="primary" title="Download">
            <Download />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Produce
          </Typography>
          <List dense>
            {shoppingList?.produce?.map((item) => (
              <ListItem key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Proteins & Dairy
          </Typography>
          <List dense>
            {shoppingList?.proteins?.map((item) => (
              <ListItem key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Pantry Items
          </Typography>
          <List dense>
            {shoppingList?.pantry?.map((item) => (
              <ListItem key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Seasonings & Spices
          </Typography>
          <List dense>
            {shoppingList?.seasonings?.map((item) => (
              <ListItem key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Paper>
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" align="center" gutterBottom color="primary">
            Women's Essential Nutrition Guide
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ mb: 8 }}>
            Understanding the key nutrients your body needs for optimal health and wellness
          </Typography>

          {/* Essential Nutrients Section - Always visible */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" align="center" gutterBottom>
              Essential Nutrients for Women
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
              These key nutrients are particularly important for women's health at different life stages
            </Typography>

            <Grid container spacing={4}>
              {essentialNutrients.map((nutrient, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Card
                    component={motion.div}
                    whileHover={{
                      translateY: -8,
                      boxShadow: '0px 12px 28px rgba(0,0,0,0.12)'
                    }}
                    sx={{ height: '100%' }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <IconButton
                          sx={{
                            backgroundColor: 'primary.light',
                            mr: 2,
                            '&:hover': { backgroundColor: 'primary.light' },
                          }}
                        >
                          {nutrient.icon}
                        </IconButton>
                        <Typography variant="h5" color="primary">
                          {nutrient.name}
                        </Typography>
                      </Box>

                      <Typography variant="body1" paragraph>
                        {nutrient.importance}
                      </Typography>

                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        Recommended Daily Allowance:
                      </Typography>
                      <Typography variant="body2" paragraph>
                        {nutrient.rda}
                      </Typography>

                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        Best Food Sources:
                      </Typography>
                      <List dense>
                        {nutrient.sources.map((source, idx) => (
                          <ListItem key={idx}>
                            <ListItemIcon>
                              <Spa color="secondary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={source} />
                          </ListItem>
                        ))}
                      </List>

                      <Box sx={{ mt: 2, p: 2, bgcolor: 'primary.light', borderRadius: 1 }}>
                        <Typography variant="body2" color="primary.dark">
                          <strong>Pro Tip:</strong> {nutrient.tips}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Meal Plan and Shopping List - Only show if available */}
          {currentMealPlan && (
            <>
              {renderMealPlan()}
              {renderShoppingList()}
            </>
          )}

          {/* Show CTA if no meal plan */}
          {!currentMealPlan && (
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Typography variant="h4" gutterBottom color="primary">
                Want a Personalized Meal Plan?
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                Take our health assessment to receive a customized weekly meal plan and shopping list.
              </Typography>
              <Button
                variant="contained"
                href="/health-assessment"
                sx={{
                  background: 'linear-gradient(45deg, #FF6B98 30%, #9C89B8 90%)',
                  color: 'white',
                  mt: 2
                }}
              >
                Take Health Assessment
              </Button>
            </Box>
          )}
        </motion.div>
      </Box>
    </Container>
  );
};

export default NutritionGuide; 