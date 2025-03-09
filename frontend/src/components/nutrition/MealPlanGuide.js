import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import {
  ExpandMore,
  Restaurant,
  FreeBreakfast,
  LunchDining,
  DinnerDining,
  LocalCafe,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const mealPlansByCondition = {
  pregnancy: {
    title: 'Pregnancy-Safe Meal Plan',
    description: 'Nutrient-rich meals supporting maternal and fetal health',
    days: [
      {
        day: 'Monday',
        meals: {
          breakfast: 'Oatmeal with berries, nuts, and prenatal vitamin',
          snack1: 'Apple slices with almond butter',
          lunch: 'Spinach salad with grilled chicken and avocado',
          snack2: 'Greek yogurt with honey',
          dinner: 'Baked salmon with quinoa and steamed vegetables'
        }
      },
      {
        day: 'Tuesday',
        meals: {
          breakfast: 'Whole grain toast with scrambled eggs and spinach',
          snack1: 'Mixed nuts and dried fruits',
          lunch: 'Turkey and cheese sandwich with vegetable soup',
          snack2: 'Hummus with carrot sticks',
          dinner: 'Lean beef stir-fry with brown rice'
        }
      },
      {
        day: 'Wednesday',
        meals: {
          breakfast: 'Smoothie with spinach, banana, and protein powder',
          snack1: 'Whole grain crackers with cheese',
          lunch: 'Quinoa bowl with chickpeas and roasted vegetables',
          snack2: 'Orange slices and almonds',
          dinner: 'Grilled chicken with sweet potato and broccoli'
        }
      },
      {
        day: 'Thursday',
        meals: {
          breakfast: 'Greek yogurt parfait with granola and berries',
          snack1: 'Trail mix with dried fruits',
          lunch: 'Tuna salad sandwich with leafy greens',
          snack2: 'Banana with peanut butter',
          dinner: 'Baked cod with rice and asparagus'
        }
      },
      {
        day: 'Friday',
        meals: {
          breakfast: 'Whole grain waffles with fruit compote',
          snack1: 'Cottage cheese with peaches',
          lunch: 'Lentil soup with whole grain bread',
          snack2: 'Mixed berries and nuts',
          dinner: 'Turkey meatballs with pasta and vegetables'
        }
      }
    ]
  },
  pcos: {
    title: 'PCOS Management Meal Plan',
    description: 'Low-glycemic meals to help manage PCOS symptoms',
    days: [
      {
        day: 'Monday',
        meals: {
          breakfast: 'Chia seed pudding with berries',
          snack1: 'Handful of almonds',
          lunch: 'Grilled chicken salad with olive oil dressing',
          snack2: 'Celery sticks with almond butter',
          dinner: 'Baked salmon with roasted vegetables'
        }
      },
      {
        day: 'Tuesday',
        meals: {
          breakfast: 'Greek yogurt with cinnamon and walnuts',
          snack1: 'Apple slices',
          lunch: 'Turkey and avocado lettuce wraps',
          snack2: 'Protein smoothie',
          dinner: 'Zucchini noodles with turkey meatballs'
        }
      },
      {
        day: 'Wednesday',
        meals: {
          breakfast: 'Scrambled eggs with spinach and mushrooms',
          snack1: 'Green tea and pistachios',
          lunch: 'Quinoa bowl with grilled tofu',
          snack2: 'Cucumber slices with hummus',
          dinner: 'Grilled chicken with cauliflower rice'
        }
      },
      {
        day: 'Thursday',
        meals: {
          breakfast: 'Protein smoothie bowl',
          snack1: 'Mixed berries',
          lunch: 'Tuna salad with mixed greens',
          snack2: 'Hard-boiled egg',
          dinner: 'Lean beef stir-fry with broccoli'
        }
      },
      {
        day: 'Friday',
        meals: {
          breakfast: 'Overnight oats with chia seeds',
          snack1: 'Carrot sticks',
          lunch: 'Chicken and vegetable soup',
          snack2: 'Handful of macadamia nuts',
          dinner: 'Baked cod with asparagus'
        }
      }
    ]
  },
  endometriosis: {
    title: 'Endometriosis Support Meal Plan',
    description: 'Anti-inflammatory foods to help manage endometriosis symptoms',
    days: [
      {
        day: 'Monday',
        meals: {
          breakfast: 'Anti-inflammatory smoothie (berries, turmeric, ginger)',
          snack1: 'Mixed nuts and green tea',
          lunch: 'Salmon and quinoa bowl with leafy greens',
          snack2: 'Sliced pear with almond butter',
          dinner: 'Grilled chicken with sweet potato and steamed broccoli'
        }
      },
      {
        day: 'Tuesday',
        meals: {
          breakfast: 'Overnight oats with flaxseeds and blueberries',
          snack1: 'Carrot sticks with hummus',
          lunch: 'Mediterranean chickpea salad',
          snack2: 'Green smoothie',
          dinner: 'Baked fish with roasted vegetables'
        }
      },
      {
        day: 'Wednesday',
        meals: {
          breakfast: 'Chia seed pudding with mango',
          snack1: 'Handful of walnuts',
          lunch: 'Lentil and vegetable soup',
          snack2: 'Apple slices with cinnamon',
          dinner: 'Turkey and avocado lettuce wraps'
        }
      },
      {
        day: 'Thursday',
        meals: {
          breakfast: 'Gluten-free toast with avocado and eggs',
          snack1: 'Mixed berries',
          lunch: 'Quinoa buddha bowl with tofu',
          snack2: 'Coconut yogurt with honey',
          dinner: 'Grilled salmon with asparagus'
        }
      },
      {
        day: 'Friday',
        meals: {
          breakfast: 'Green smoothie bowl',
          snack1: 'Rice crackers with almond butter',
          lunch: 'Grilled chicken and kale salad',
          snack2: 'Orange slices and pistachios',
          dinner: 'Baked cod with brown rice and vegetables'
        }
      }
    ]
  },
  menopause: {
    title: 'Menopause Support Meal Plan',
    description: 'Nutrient-rich meals to support hormonal balance and bone health',
    days: [
      {
        day: 'Monday',
        meals: {
          breakfast: 'Greek yogurt with flaxseeds and berries',
          snack1: 'Handful of almonds',
          lunch: 'Quinoa salad with chickpeas and vegetables',
          snack2: 'Apple with cheese',
          dinner: 'Grilled fish with roasted vegetables'
        }
      },
      {
        day: 'Tuesday',
        meals: {
          breakfast: 'Oatmeal with soy milk and walnuts',
          snack1: 'Edamame beans',
          lunch: 'Turkey and avocado wrap',
          snack2: 'Hummus with vegetables',
          dinner: 'Tofu stir-fry with brown rice'
        }
      },
      {
        day: 'Wednesday',
        meals: {
          breakfast: 'Smoothie with soy protein and berries',
          snack1: 'Mixed nuts and dried fruits',
          lunch: 'Lentil soup with whole grain bread',
          snack2: 'Greek yogurt with honey',
          dinner: 'Grilled chicken with quinoa'
        }
      },
      {
        day: 'Thursday',
        meals: {
          breakfast: 'Whole grain toast with sardines',
          snack1: 'Orange slices',
          lunch: 'Salmon and brown rice bowl',
          snack2: 'Trail mix',
          dinner: 'Bean and vegetable curry'
        }
      },
      {
        day: 'Friday',
        meals: {
          breakfast: 'Tofu scramble with vegetables',
          snack1: 'Pear with almond butter',
          lunch: 'Chickpea and spinach salad',
          snack2: 'Soy yogurt with berries',
          dinner: 'Baked fish with sweet potato'
        }
      }
    ]
  },
  osteoporosis: {
    title: 'Osteoporosis Prevention Meal Plan',
    description: 'Calcium and vitamin D rich meals for bone health',
    days: [
      {
        day: 'Monday',
        meals: {
          breakfast: 'Fortified oatmeal with almonds and milk',
          snack1: 'Greek yogurt with chia seeds',
          lunch: 'Sardine salad with leafy greens',
          snack2: 'Cheese and whole grain crackers',
          dinner: 'Calcium-fortified tofu stir-fry'
        }
      },
      {
        day: 'Tuesday',
        meals: {
          breakfast: 'Smoothie with kale and yogurt',
          snack1: 'Brazil nuts and dried figs',
          lunch: 'Quinoa bowl with salmon and broccoli',
          snack2: 'Cottage cheese with fruit',
          dinner: 'Turkey with collard greens'
        }
      },
      {
        day: 'Wednesday',
        meals: {
          breakfast: 'Eggs with calcium-fortified orange juice',
          snack1: 'Almonds and dried apricots',
          lunch: 'White bean and kale soup',
          snack2: 'Yogurt parfait',
          dinner: 'Fish with sesame seeds and bok choy'
        }
      },
      {
        day: 'Thursday',
        meals: {
          breakfast: 'Calcium-fortified cereal with milk',
          snack1: 'String cheese and fruit',
          lunch: 'Tuna and white bean salad',
          snack2: 'Smoothie with fortified milk',
          dinner: 'Chicken with calcium-rich vegetables'
        }
      },
      {
        day: 'Friday',
        meals: {
          breakfast: 'Yogurt bowl with granola and figs',
          snack1: 'Edamame with sea salt',
          lunch: 'Tofu and vegetable soup',
          snack2: 'Cheese with apple slices',
          dinner: 'Salmon with calcium-fortified pasta'
        }
      }
    ]
  },
  diabetes: {
    title: 'Diabetes Management Meal Plan',
    description: 'Low glycemic meals to help maintain stable blood sugar levels',
    days: [
      {
        day: 'Monday',
        meals: {
          breakfast: 'Steel-cut oats with cinnamon and nuts',
          snack1: 'Hard-boiled egg',
          lunch: 'Grilled chicken salad with olive oil',
          snack2: 'Celery with peanut butter',
          dinner: 'Baked fish with roasted vegetables'
        }
      },
      {
        day: 'Tuesday',
        meals: {
          breakfast: 'Greek yogurt with berries and seeds',
          snack1: 'Handful of almonds',
          lunch: 'Turkey and avocado lettuce wraps',
          snack2: 'Cheese stick with cucumber',
          dinner: 'Lentil and vegetable stew'
        }
      },
      {
        day: 'Wednesday',
        meals: {
          breakfast: 'Vegetable omelet with whole grain toast',
          snack1: 'Mixed nuts',
          lunch: 'Quinoa bowl with tofu and vegetables',
          snack2: 'Sugar-free protein shake',
          dinner: 'Grilled chicken with cauliflower rice'
        }
      },
      {
        day: 'Thursday',
        meals: {
          breakfast: 'Chia seed pudding with berries',
          snack1: 'Turkey roll-ups',
          lunch: 'Tuna salad with mixed greens',
          snack2: 'Cottage cheese with tomatoes',
          dinner: 'Beef stir-fry with brown rice'
        }
      },
      {
        day: 'Friday',
        meals: {
          breakfast: 'Protein smoothie with spinach',
          snack1: 'Guacamole with bell peppers',
          lunch: 'Chicken and vegetable soup',
          snack2: 'Hummus with carrots',
          dinner: 'Baked salmon with asparagus'
        }
      }
    ]
  }
};

const MealPlanGuide = ({ selectedConditions }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom color="primary" align="center">
        5-Day Meal Plans
      </Typography>
      
      {selectedConditions.map((condition) => {
        const mealPlan = mealPlansByCondition[condition];
        if (!mealPlan) return null;

        return (
          <motion.div
            key={condition}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom color="primary">
                  {mealPlan.title}
                </Typography>
                <Typography color="text.secondary" paragraph>
                  {mealPlan.description}
                </Typography>

                {mealPlan.days.map((day, index) => (
                  <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography variant="h6">{day.day}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <FreeBreakfast />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Breakfast"
                                secondary={day.meals.breakfast}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <LocalCafe />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Morning Snack"
                                secondary={day.meals.snack1}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <LunchDining />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Lunch"
                                secondary={day.meals.lunch}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <LocalCafe />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Afternoon Snack"
                                secondary={day.meals.snack2}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <DinnerDining />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Dinner"
                                secondary={day.meals.dinner}
                              />
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </Box>
  );
};

export default MealPlanGuide; 