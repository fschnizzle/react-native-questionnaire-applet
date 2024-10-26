// import firestore from '@react-native-firebase/firestore'; // Import Firebase Firestore

import React, { useState } from 'react';
import { View, Text, ScrollView, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider'; // Import Slider

// Custom YesNoButton component
const YesNoButton = ({ title, value, onPress }) => (
  <View style={styles.buttonContainer}>
    <Text style={styles.question}>{title}</Text>
    <View style={styles.buttonRow}>
      <TouchableOpacity
        style={[styles.yesNoButton, value ? styles.selectedButton : styles.unselectedButton]}
        onPress={() => onPress(true)}
      >
        <Text style={styles.buttonText}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.yesNoButton, value === false ? styles.selectedButton : styles.unselectedButton]}
        onPress={() => onPress(false)}
      >
        <Text style={styles.buttonText}>No</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// Custom DistanceSlider component
const DistanceSlider = ({ value, onValueChange }) => (
    <View style={styles.sliderContainer}>
      <Text style={styles.question}>
        Select your commute distance (in km): {value === 15 ? '15+' : value} km
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={15}
        step={1}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor="#4caf50"
        maximumTrackTintColor="#ccc"
      />
    </View>
  );

// Main QuestionScreen Component
const QuestionScreen: React.FC = () => {
  // State variables for each question
  const [ownsCar, setOwnsCar] = useState<boolean | null>(null);
  const [commutes, setCommutes] = useState<boolean | null>(null);
  const [commuteDistance, setCommuteDistance] = useState<number>(0); // Changed to number
  const [publicTransport, setPublicTransport] = useState<boolean | null>(null);
  const [ownsBicycle, setOwnsBicycle] = useState<boolean | null>(null);
  const [canWalk, setCanWalk] = useState<boolean | null>(null);
  const [hasHeaterAC, setHasHeaterAC] = useState<boolean | null>(null);
  const [ownsWashingMachine, setOwnsWashingMachine] = useState<boolean | null>(null);
  const [isVegetarian, setIsVegetarian] = useState<boolean | null>(null);
  const [accessLibrary, setAccessLibrary] = useState<boolean | null>(null);
  const [ownsDishwasher, setOwnsDishwasher] = useState<boolean | null>(null);
  const [ownsDryer, setOwnsDryer] = useState<boolean | null>(null);

  const handleSubmit = async () => {
    // Prepare answers object for Firebase
    const answers = {
      preferences: {
        ownsCar,
        commutes,
        commuteDistance, // Will now be a number
        publicTransport,
        ownsBicycle,
        canWalk,
        hasHeaterAC,
        ownsWashingMachine,
        isVegetarian,
        accessLibrary,
        ownsDishwasher,
        ownsDryer,
      }
    };

    // Log the formatted answers
    console.log('Submitted Answers:', answers);

    try {
      // Save to Firebase (adjust 'users' and 'userID' accordingly)
      // await firestore().collection('users').doc('userID').set(answers, { merge: true });
      console.log('Answers saved successfully!');
    } catch (error) {
      console.error('Error saving answers:', error);
    }
  };

  return (
    <ScrollView 
    contentContainerStyle={styles.scrollContainer}
    scrollEventThrottle={10}  // Adjust event throttle
    decelerationRate={0.8}   // Faster deceleration
    >
      <Text style={styles.title}>Transport</Text>
      <YesNoButton title="1. Do you own a car?" value={ownsCar} onPress={setOwnsCar} />
      <YesNoButton title="2. Do you commute to work or school?" value={commutes} onPress={setCommutes} />
      {commutes && (
        <DistanceSlider
          value={commuteDistance}
          onValueChange={setCommuteDistance}
        />
      )}
      <YesNoButton
        title="3. Do you have access to public transport (e.g., buses, trams, trains)?"
        value={publicTransport}
        onPress={setPublicTransport}
      />
      <YesNoButton title="4. Do you own a bicycle?" value={ownsBicycle} onPress={setOwnsBicycle} />
      <YesNoButton title="5. Do you have the option to walk to work or school?" value={canWalk} onPress={setCanWalk} />

      <Text style={styles.title}>Energy Usage</Text>
      <YesNoButton title="1. Do you have a heater or air conditioner in your home?" value={hasHeaterAC} onPress={setHasHeaterAC} />
      <YesNoButton title="2. Do you own a washing machine?" value={ownsWashingMachine} onPress={setOwnsWashingMachine} />

      <Text style={styles.title}>Food Consumption</Text>
      <YesNoButton title="Are you a vegetarian or vegan?" value={isVegetarian} onPress={setIsVegetarian} />

      <Text style={styles.title}>Goods and Services</Text>
      <YesNoButton title="1. Do you have access to a local library?" value={accessLibrary} onPress={setAccessLibrary} />

      <Text style={styles.title}>Waste and Water</Text>
      <YesNoButton title="1. Do you own a dishwasher?" value={ownsDishwasher} onPress={setOwnsDishwasher} />
      <YesNoButton title="2. Do you own a clothes dryer?" value={ownsDryer} onPress={setOwnsDryer} />

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  yesNoButton: {
    flex: 0.48,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
  },
  selectedButton: {
    backgroundColor: '#4caf50',
    borderColor: '#4caf50',
  },
  unselectedButton: {
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  sliderContainer: {
    marginVertical: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  scrollContainer: {
    paddingBottom: 50,  // Add padding to the bottom
    paddingHorizontal: 20,
  },
});

export default QuestionScreen;
