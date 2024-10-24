import React, { useState } from 'react';
import { View, Text, ScrollView, Button, StyleSheet, TouchableOpacity } from 'react-native';

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
        style={[styles.yesNoButton, !value ? styles.selectedButton : styles.unselectedButton]}
        onPress={() => onPress(false)}
      >
        <Text style={styles.buttonText}>No</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// Main QuestionScreen Component
const QuestionScreen: React.FC = () => {
  // State variables for each question
  const [ownsCar, setOwnsCar] = useState<boolean | null>(null);
  const [commutes, setCommutes] = useState<boolean | null>(null);
  const [commuteDistance, setCommuteDistance] = useState<boolean | null>(null);
  const [publicTransport, setPublicTransport] = useState<boolean | null>(null);
  const [ownsBicycle, setOwnsBicycle] = useState<boolean | null>(null);
  const [canWalk, setCanWalk] = useState<boolean | null>(null);
  const [hasHeaterAC, setHasHeaterAC] = useState<boolean | null>(null);
  const [ownsWashingMachine, setOwnsWashingMachine] = useState<boolean | null>(null);
  const [isVegetarian, setIsVegetarian] = useState<boolean | null>(null);
  const [accessLibrary, setAccessLibrary] = useState<boolean | null>(null);
  const [ownsDishwasher, setOwnsDishwasher] = useState<boolean | null>(null);
  const [ownsDryer, setOwnsDryer] = useState<boolean | null>(null);
  const [nearPark, setNearPark] = useState<boolean | null>(null);
  const [accessMarket, setAccessMarket] = useState<boolean | null>(null);
  const [nearSustainableCafe, setNearSustainableCafe] = useState<boolean | null>(null);

  const handleSubmit = () => {
    // Handle submission logic (e.g., save answers or navigate to the next screen)
    const answers = {
      ownsCar,
      commutes,
      commuteDistance,
      publicTransport,
      ownsBicycle,
      canWalk,
      hasHeaterAC,
      ownsWashingMachine,
      isVegetarian,
      accessLibrary,
      ownsDishwasher,
      ownsDryer,
      nearPark,
      accessMarket,
      nearSustainableCafe,
    };
    console.log('Submitted Answers:', answers);
    // Navigate to next screen
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Transport</Text>
      <YesNoButton title="1. Do you own a car?" value={ownsCar} onPress={setOwnsCar} />
      <YesNoButton title="2. Do you commute to work or school?" value={commutes} onPress={setCommutes} />
      {commutes && (
        <YesNoButton
          title="Is your commute less than 10 km?"
          value={commuteDistance}
          onPress={setCommuteDistance}
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

      <Text style={styles.title}>Context-Aware Tasks</Text>
      <YesNoButton title="1. Do you live near a park?" value={nearPark} onPress={setNearPark} />
      <YesNoButton title="2. Do you have access to a market that sells fresh, locally produced food?" value={accessMarket} onPress={setAccessMarket} />
      <YesNoButton title="3. Are there sustainable cafes or restaurants near your location?" value={nearSustainableCafe} onPress={setNearSustainableCafe} />

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
    fontSize: 16,
    marginBottom: 5,
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
    color: '#fff',
  },
  scrollContainer: {
    paddingBottom: 50,  // Add padding to the bottom
    paddingHorizontal: 20,
  },
});

export default QuestionScreen;
