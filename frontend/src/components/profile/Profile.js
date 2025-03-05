import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  LinearProgress,
  Card,
  CardContent,
  IconButton,
  Stack,
  Switch,
  TextField,
} from '@mui/material';
import {
  Edit,
  Notifications,
  Security,
  Language,
  DarkMode,
  FitnessCenter,
  Timeline,
  EmojiEvents,
  LocalDining,
  DirectionsRun,
  MonitorWeight,
  Height,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);
const MotionCard = motion(Card);

// Mock data - replace with real data from your backend
const mockUserData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://source.unsplash.com/random/150x150/?portrait',
  stats: {
    workoutsCompleted: 24,
    streakDays: 7,
    caloriesBurned: 12500,
    achievements: 8,
  },
  progress: {
    weight: {
      current: 75,
      goal: 70,
      unit: 'kg',
    },
    workoutGoals: {
      weekly: {
        completed: 3,
        target: 4,
      },
    },
    nutrition: {
      dailyCalories: {
        consumed: 1800,
        target: 2000,
      },
    },
  },
  recentWorkouts: [
    {
      date: '2024-03-05',
      name: 'Full Body Workout',
      duration: '45 min',
      calories: 320,
    },
    {
      date: '2024-03-03',
      name: 'HIIT Cardio',
      duration: '30 min',
      calories: 280,
    },
    {
      date: '2024-03-01',
      name: 'Core Strength',
      duration: '35 min',
      calories: 250,
    },
  ],
  achievements: [
    '7-Day Streak',
    'First Workout',
    'Weight Goal Progress',
    'Nutrition Plan Started',
  ],
};

const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`profile-tabpanel-${index}`}
    {...other}
  >
    {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
  </div>
);

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(mockUserData);
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: 'English',
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSettingChange = (setting) => (event) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: event.target.checked,
    }));
  };

  const StatCard = ({ icon, value, label }) => (
    <MotionCard
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      sx={{ height: '100%' }}
    >
      <CardContent>
        <Stack spacing={2} alignItems="center">
          <IconButton
            sx={{
              backgroundColor: 'primary.light',
              color: 'white',
              '&:hover': { backgroundColor: 'primary.main' },
            }}
          >
            {icon}
          </IconButton>
          <Typography variant="h4" component="div">
            {value}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {label}
          </Typography>
        </Stack>
      </CardContent>
    </MotionCard>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Profile Header */}
      <MotionPaper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        elevation={2}
        sx={{ p: 3, mb: 4 }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              src={userData.avatar}
              sx={{ width: 120, height: 120, border: 3, borderColor: 'primary.main' }}
            />
          </Grid>
          <Grid item xs>
            <Typography variant="h4" gutterBottom>
              {userData.name}
            </Typography>
            <Typography color="text.secondary">{userData.email}</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<Edit />}
              onClick={() => setIsEditing(!isEditing)}
            >
              Edit Profile
            </Button>
          </Grid>
        </Grid>
      </MotionPaper>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<FitnessCenter />}
            value={userData.stats.workoutsCompleted}
            label="Workouts Completed"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<Timeline />}
            value={userData.stats.streakDays}
            label="Day Streak"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<DirectionsRun />}
            value={userData.stats.caloriesBurned.toLocaleString()}
            label="Calories Burned"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<EmojiEvents />}
            value={userData.stats.achievements}
            label="Achievements"
          />
        </Grid>
      </Grid>

      {/* Tabs Section */}
      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Progress" />
          <Tab label="Workouts" />
          <Tab label="Achievements" />
          <Tab label="Settings" />
        </Tabs>

        {/* Progress Tab */}
        <TabPanel value={activeTab} index={0}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Weight Progress
                  </Typography>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <MonitorWeight />
                      <Box sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2" color="text.secondary">
                            Current: {userData.progress.weight.current} kg
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Goal: {userData.progress.weight.goal} kg
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={
                            ((userData.progress.weight.current - userData.progress.weight.goal) /
                              userData.progress.weight.goal) *
                            100
                          }
                          sx={{ mt: 1 }}
                        />
                      </Box>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Weekly Workout Goals
                  </Typography>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <FitnessCenter />
                      <Box sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2" color="text.secondary">
                            Completed: {userData.progress.workoutGoals.weekly.completed}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Target: {userData.progress.workoutGoals.weekly.target}
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={
                            (userData.progress.workoutGoals.weekly.completed /
                              userData.progress.workoutGoals.weekly.target) *
                            100
                          }
                          sx={{ mt: 1 }}
                        />
                      </Box>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Workouts Tab */}
        <TabPanel value={activeTab} index={1}>
          <List>
            {userData.recentWorkouts.map((workout, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenter />
                  </ListItemIcon>
                  <ListItemText
                    primary={workout.name}
                    secondary={`${workout.date} • ${workout.duration} • ${workout.calories} cal`}
                  />
                </ListItem>
                {index < userData.recentWorkouts.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </TabPanel>

        {/* Achievements Tab */}
        <TabPanel value={activeTab} index={2}>
          <Grid container spacing={2}>
            {userData.achievements.map((achievement, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <MotionCard
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardContent>
                    <Stack spacing={2} alignItems="center">
                      <EmojiEvents color="primary" sx={{ fontSize: 40 }} />
                      <Typography align="center">{achievement}</Typography>
                    </Stack>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Settings Tab */}
        <TabPanel value={activeTab} index={3}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Notifications />
              </ListItemIcon>
              <ListItemText
                primary="Push Notifications"
                secondary="Get notified about workouts and achievements"
              />
              <Switch
                edge="end"
                checked={settings.notifications}
                onChange={handleSettingChange('notifications')}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
              <ListItemText
                primary="Dark Mode"
                secondary="Toggle dark/light theme"
              />
              <Switch
                edge="end"
                checked={settings.darkMode}
                onChange={handleSettingChange('darkMode')}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <Language />
              </ListItemIcon>
              <ListItemText
                primary="Language"
                secondary="Choose your preferred language"
              />
              <TextField
                select
                value={settings.language}
                onChange={(e) =>
                  setSettings((prev) => ({ ...prev, language: e.target.value }))
                }
                variant="standard"
                SelectProps={{
                  native: true,
                }}
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </TextField>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <Security />
              </ListItemIcon>
              <ListItemText
                primary="Privacy Settings"
                secondary="Manage your privacy preferences"
              />
              <Button variant="outlined" size="small">
                Manage
              </Button>
            </ListItem>
          </List>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default Profile; 