// src/screens/ReviewScreen.tsx

import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useForm } from '../context/FormContext';

const ReviewScreen: React.FC = ({ navigation }) => {
  const { formData } = useForm(); // Access the form data from context

  const handleFinish = () => {
    // TODO: Do something with the formData (e.g., send it to a backend or simply finish)
    console.log('Form Data:', formData);
    // TODO: Navigate to home screen, etc

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Review Your Answers</Text>

      {/* Sub-Category 1 Data */}
      <Text style={styles.sectionTitle}>Sub-Category 1</Text>
      <Text>Text Entry: {formData.subCategory1.textEntry}</Text>
      <Text>Number Entry: {formData.subCategory1.numberEntry}</Text>
      <Text>Radio Selection: {formData.subCategory1.radioSelection}</Text>
      <Text>Checkbox Selection: {formData.subCategory1.checkboxSelection.join(', ')}</Text>
      <Text>Slider Value: {formData.subCategory1.sliderValue}</Text>

      {/* Sub-Category 2 Data */}
      <Text style={styles.sectionTitle}>Sub-Category 2</Text>
      <Text>Text Entry: {formData.subCategory2.textEntry}</Text>
      <Text>Number Entry: {formData.subCategory2.numberEntry}</Text>
      <Text>Radio Selection: {formData.subCategory2.radioSelection}</Text>
      <Text>Checkbox Selection: {formData.subCategory2.checkboxSelection.join(', ')}</Text>
      <Text>Slider Value: {formData.subCategory2.sliderValue}</Text>

      <Button title="Finish" onPress={handleFinish} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: 'bold',
  },
});

export default ReviewScreen;