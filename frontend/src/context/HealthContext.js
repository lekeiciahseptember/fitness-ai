import React, { createContext, useState, useContext } from 'react';

const HealthContext = createContext();

export const HealthProvider = ({ children }) => {
  const [healthData, setHealthData] = useState({
    allergies: [],
    healthConditions: [],
    fitnessGoals: [],
    dietaryPreferences: [],
    currentMealPlan: null,
    shoppingList: null
  });

  const updateHealthData = (newData) => {
    setHealthData(prev => ({
      ...prev,
      ...newData
    }));
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