// src/screens/WelcomeScreen.tsx

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define navigation types
type RootStackParamList = {
  WelcomeScreen: undefined;
  SubCategory1: undefined;
};

type WelcomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'WelcomeScreen'>;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const handleGetStarted = () => {
    // Navigate to the first sub-category screen
    navigation.navigate('SubCategory1');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our App!</Text>
      <Text style={styles.description}>
        Thanks for joining our app. In order to best customize your experience, we would like to begin with a short questionnaire that will gather your preferences and current lifestyle habits.
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