// src/screens/WelcomeScreen.tsx

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define navigation types
type RootStackParamList = {
  WelcomeScreen: undefined;
  SubCategory1: undefined;
  QuestionScreen: undefined;
};

type WelcomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'WelcomeScreen'>;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const handleGetStarted = () => {
    // Navigate to the first sub-category screen
    navigation.navigate('QuestionScreen'); // navigation.navigate('SubCategory1');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our App!</Text>
      <Text style={styles.description}>
        Our goal is to help you reduce your carbon footprint and live more sustainably by focusing on five key areas: Transport, Energy Usage, Food Consumption, Goods and Services, and Waste & Water. The following questions will help us personalise challenges that fit your lifestyle, making it easier to adopt eco-friendly habits and make a positive impact on the planet.
      </Text>
      <Button title="Get Started" onPress={handleGetStarted} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default WelcomeScreen;
