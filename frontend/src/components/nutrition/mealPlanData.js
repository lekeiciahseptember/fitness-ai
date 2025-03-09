const meals = {
  breakfast: [
    {
      name: "Greek Yogurt Parfait",
      ingredients: ["Greek yogurt", "mixed berries", "honey", "granola"],
      allergies: [],
      healthConditions: ["pcos", "osteoporosis"],
      fitnessGoals: ["weight_loss", "muscle_gain"],
      nutrients: "High protein, calcium, antioxidants"
    },
    {
      name: "Gluten-Free Oatmeal Bowl",
      ingredients: ["gluten-free oats", "almond milk", "banana", "chia seeds", "cinnamon"],
      allergies: ["wheat"],
      healthConditions: ["diabetes", "thyroid"],
      fitnessGoals: ["weight_loss", "energy"],
      nutrients: "Complex carbs, fiber, omega-3"
    },
    {
      name: "Protein Smoothie Bowl",
      ingredients: ["plant-based protein", "spinach", "banana", "almond milk", "mixed seeds"],
      allergies: ["dairy"],
      healthConditions: ["endometriosis", "pcos"],
      fitnessGoals: ["muscle_gain", "energy"],
      nutrients: "Protein, iron, vitamins"
    },
    {
      name: "Egg White Frittata",
      ingredients: ["egg whites", "spinach", "mushrooms", "bell peppers", "herbs"],
      allergies: ["dairy"],
      healthConditions: ["pregnancy", "diabetes"],
      fitnessGoals: ["weight_loss", "muscle_gain"],
      nutrients: "Lean protein, folate, iron"
    }
  ],
  lunch: [
    {
      name: "Quinoa Buddha Bowl",
      ingredients: ["quinoa", "chickpeas", "roasted vegetables", "tahini dressing"],
      allergies: ["wheat"],
      healthConditions: ["thyroid", "diabetes"],
      fitnessGoals: ["weight_loss", "energy"],
      nutrients: "Complete protein, fiber, minerals"
    },
    {
      name: "Grilled Chicken Salad",
      ingredients: ["chicken breast", "mixed greens", "avocado", "olive oil", "lemon"],
      allergies: [],
      healthConditions: ["pcos", "thyroid"],
      fitnessGoals: ["muscle_gain", "weight_loss"],
      nutrients: "Lean protein, healthy fats"
    },
    {
      name: "Lentil and Vegetable Soup",
      ingredients: ["lentils", "mixed vegetables", "vegetable broth", "herbs"],
      allergies: [],
      healthConditions: ["pregnancy", "anemia"],
      fitnessGoals: ["energy", "maintenance"],
      nutrients: "Iron, fiber, plant protein"
    }
  ],
  dinner: [
    {
      name: "Baked Salmon with Roasted Vegetables",
      ingredients: ["salmon", "broccoli", "sweet potato", "olive oil", "herbs"],
      allergies: [],
      healthConditions: ["osteoporosis", "thyroid"],
      fitnessGoals: ["muscle_gain", "maintenance"],
      nutrients: "Omega-3, vitamin D, protein"
    },
    {
      name: "Turkey and Quinoa Meatballs",
      ingredients: ["ground turkey", "quinoa", "herbs", "tomato sauce"],
      allergies: ["wheat"],
      healthConditions: ["diabetes", "pcos"],
      fitnessGoals: ["weight_loss", "muscle_gain"],
      nutrients: "Lean protein, complex carbs"
    },
    {
      name: "Vegetarian Stir-Fry",
      ingredients: ["tofu", "mixed vegetables", "brown rice", "ginger", "garlic"],
      allergies: ["fish", "shellfish"],
      healthConditions: ["endometriosis", "thyroid"],
      fitnessGoals: ["weight_loss", "energy"],
      nutrients: "Plant protein, fiber, antioxidants"
    }
  ]
};

const allergyRestrictions = {
  'dairy': ['greek yogurt', 'milk', 'cheese', 'yogurt'],
  'nuts': ['almonds', 'cashews', 'walnuts', 'almond milk'],
  'peanuts': ['peanuts', 'peanut butter'],
  'eggs': ['eggs', 'mayonnaise'],
  'soy': ['tofu', 'soy sauce', 'edamame'],
  'wheat': ['bread', 'pasta', 'flour', 'wheat'],
  'fish': ['salmon', 'tuna', 'fish'],
  'shellfish': ['shrimp', 'crab', 'lobster']
};

// Helper function to check if a meal is suitable based on restrictions
const isMealSuitable = (meal, { allergies, healthConditions, fitnessGoals }) => {
  // Check if meal contains any allergens
  const hasAllergen = allergies.some(allergy => meal.allergies.includes(allergy));
  if (hasAllergen) return false;

  // Check if meal is suitable for at least one health condition (if any specified)
  const isHealthSuitable = healthConditions.length === 0 || 
    healthConditions.some(condition => meal.healthConditions.includes(condition));
  if (!isHealthSuitable) return false;

  // Check if meal supports at least one fitness goal (if any specified)
  const supportsFitnessGoal = fitnessGoals.length === 0 ||
    fitnessGoals.some(goal => meal.fitnessGoals.includes(goal));
  if (!supportsFitnessGoal) return false;

  return true;
};

// Function to get suitable meals for a given category and restrictions
const getSuitableMeals = (category, restrictions) => {
  const categoryMeals = meals[category];
  const suitableMeals = categoryMeals.filter(meal => isMealSuitable(meal, restrictions));
  return suitableMeals.length > 0 ? suitableMeals : categoryMeals; // Fallback to all meals if none match
};

// Main function to generate weekly meal plan
export const generateWeeklyMealPlan = (restrictions) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  return daysOfWeek.map(day => {
    const breakfast = getSuitableMeals('breakfast', restrictions);
    const lunch = getSuitableMeals('lunch', restrictions);
    const dinner = getSuitableMeals('dinner', restrictions);

    return {
      day,
      meals: {
        breakfast: breakfast[Math.floor(Math.random() * breakfast.length)],
        lunch: lunch[Math.floor(Math.random() * lunch.length)],
        dinner: dinner[Math.floor(Math.random() * dinner.length)]
      }
    };
  });
};

export const generateShoppingList = (mealPlan) => {
  const allIngredients = mealPlan.flatMap(day => 
    Object.values(day.meals).flatMap(meal => meal.ingredients)
  );

  // Remove duplicates and sort ingredients
  const uniqueIngredients = [...new Set(allIngredients)];

  // Categorize ingredients
  return {
    produce: uniqueIngredients.filter(item => 
      /spinach|berries|banana|vegetables|broccoli|sweet potato|bell peppers|mushrooms|greens|avocado/i.test(item)
    ),
    proteins: uniqueIngredients.filter(item =>
      /chicken|salmon|turkey|tofu|egg|yogurt/i.test(item)
    ),
    pantry: uniqueIngredients.filter(item =>
      /quinoa|oats|chia|seeds|olive oil|honey|granola|lentils/i.test(item)
    ),
    seasonings: uniqueIngredients.filter(item =>
      /herbs|cinnamon|ginger|garlic/i.test(item)
    )
  };
}; 