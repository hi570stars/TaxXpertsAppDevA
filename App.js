// Danica - D, Sneha - S, Shriya - C
// Let's try to comment on the stuff we add so we can keep track of who changes what

import React, { useEffect } from 'react'; // added this'
import { View } from 'react-native'; // added this


import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Firstscreen from './screens/Firstscreen';
import BewareOfTaxFraud from './components/BewareOfTaxFraud'; // and this

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Firstscreen'>
        <stack.Screen name='Firstscreen' component={Firstscreen} />
        <stack.Screen name='BewareOfTaxFraud' component={BewareOfTaxFraud} />
      </stack.Navigator>
    </NavigationContainer>
  );
}