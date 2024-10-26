// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FormProvider } from './src/context/FormContext';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SubCategory1 from './src/screens/SubCategory1';
import SubCategory2 from './src/screens/SubCategory2';
import ReviewScreen from './src/screens/ReviewScreen';
import QuestionScreen from './src/screens/QuestionScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <FormProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="SubCategory1" component={SubCategory1} />
          <Stack.Screen name="SubCategory2" component={SubCategory2} />
          <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
          <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FormProvider>
  );
}
