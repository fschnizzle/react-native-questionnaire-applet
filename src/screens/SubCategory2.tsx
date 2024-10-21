import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useForm } from '../context/FormContext';
import { Slider, CheckBox } from 'react-native-elements';

// Define the types for your stack's navigation parameters
type RootStackParamList = {
  SubCategory1: undefined;
  SubCategory2: undefined;
  ReviewScreen: undefined;
};

// Define the props for SubCategory1 using StackNavigationProp
type SubCategory2Props = {
  navigation: StackNavigationProp<RootStackParamList, 'SubCategory2'>;
};

const SubCategory2: React.FC<SubCategory2Props> = ({ navigation }) => {
  const { formData, setFormData } = useForm();
  
  const [textEntry, setTextEntry] = useState<string>(formData.subCategory2.textEntry);
  const [numberEntry, setNumberEntry] = useState<number>(formData.subCategory2.numberEntry);
  const [radioSelection, setRadioSelection] = useState<string>(formData.subCategory2.radioSelection);
  const [checkboxSelection, setCheckboxSelection] = useState<string[]>(formData.subCategory2.checkboxSelection);
  const [sliderValue, setSliderValue] = useState<number>(formData.subCategory2.sliderValue);

  // Validation for text entry
  const isTextValid = textEntry.length > 2 && textEntry.length < 25;

  const handleCheckboxToggle = (option: string) => {
    setCheckboxSelection((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleNext = () => {
    if (!isTextValid) return; // Prevent navigation if text is invalid
    setFormData((prev) => ({
      ...prev,
      subCategory2: {
        textEntry,
        numberEntry,
        radioSelection,
        checkboxSelection,
        sliderValue,
      },
    }));
    navigation.navigate('ReviewScreen'); // Navigate to the review screen
  };

  return (
    <ScrollView style={styles.container}>
      <Text>Sub-Category 2</Text>

      {/* Standard Text Entry */}
      <Text>1. Enter your name:</Text>
      <TextInput
        value={textEntry}
        onChangeText={setTextEntry}
        placeholder="Enter text"
        style={styles.input}
      />
      {!isTextValid && <Text style={styles.errorText}>Text must be between 3 and 25 characters long.</Text>}

      {/* Number Entry */}
      <Text>2. Enter a number:</Text>
      <TextInput
        value={numberEntry.toString()}
        onChangeText={(text) => setNumberEntry(parseInt(text) || 0)}
        keyboardType="numeric"
        style={styles.input}
      />

      {/* Radio Selection */}
      <Text>3. Preferred Mode of Transport:</Text>
      {['Car', 'Bicycle', 'Bus', 'Walking', 'Train'].map((option) => (
        <View key={option}>
          <Text>{option}</Text>
          <Button
            title={radioSelection === option ? 'Selected' : 'Select'}
            onPress={() => setRadioSelection(option)}
          />
        </View>
      ))}

      {/* Checkbox Selection */}
      <Text>4. Select your hobbies:</Text>
      {['Reading', 'Gaming', 'Sports', 'Music', 'Travel'].map((option) => (
        <CheckBox
          key={option}
          title={option}
          checked={checkboxSelection.includes(option)}
          onPress={() => handleCheckboxToggle(option)}
        />
      ))}

      {/* Slider */}
      <Text>5. Rate your interest in technology (1-5):</Text>
      <Slider
        value={sliderValue}
        onValueChange={setSliderValue}
        step={1}
        minimumValue={1}
        maximumValue={5}
      />
      <Text>{sliderValue}</Text>

      <Button title="Next" onPress={handleNext} />

      {/* <div>Footer</div> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
  },
});

export default SubCategory2;