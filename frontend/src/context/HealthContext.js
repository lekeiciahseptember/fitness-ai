import React, { createContext, useState, useContext } from 'react';

const HealthContext = createContext();

// Calculate BMR using Mifflin-St Jeor Equation
const calculateBMR = (weight, height, age, gender) => {
  // weight in kg, height in cm, age in years
  const bmr = (10 * weight) + (6.25 * height) - (5 * age);
  return gender === 'female' ? bmr - 161 : bmr + 5;
};

// Calculate daily calorie needs based on activity level
const calculateDailyCalories = (bmr, activityLevel) => {
  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9
  };
  return Math.round(bmr * activityMultipliers[activityLevel]);
};

export const HealthProvider = ({ children }) => {
  const [healthData, setHealthData] = useState({
    allergies: [],
    healthConditions: [],
    fitnessGoals: [],
    dietaryPreferences: [],
    currentMealPlan: null,
    shoppingList: null,
    userProfile: {
      age: null,
      height: null,
      weight: null,
      gender: null,
      activityLevel: 'moderate'
    },
    dailyCalories: null
  });

  const updateHealthData = (newData) => {
    setHealthData(prev => {
      const updatedData = {
        ...prev,
        ...newData
      };

      // Calculate daily calories if we have all required information
      if (updatedData.userProfile.age && 
          updatedData.userProfile.height && 
          updatedData.userProfile.weight && 
          updatedData.userProfile.gender) {
        const bmr = calculateBMR(
          updatedData.userProfile.weight,
          updatedData.userProfile.height,
          updatedData.userProfile.age,
          updatedData.userProfile.gender
        );
        updatedData.dailyCalories = calculateDailyCalories(bmr, updatedData.userProfile.activityLevel);
      }

      return updatedData;
    });
  };

  return (
    <HealthContext.Provider value={{ healthData, updateHealthData }}>
      {children}
    </HealthContext.Provider>
  );
};

export const useHealth = () => {
  const context = useContext(HealthContext);
  if (!context) {
    throw new Error('useHealth must be used within a HealthProvider');
  }
  return context;
}; 