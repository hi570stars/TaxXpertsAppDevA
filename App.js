// Danica - D, Sneha - S, Shriya - C
// Let's try to comment on the stuff we add so we can keep track of who changes what

import React, { useEffect } from 'react'; // added this'
import { View } from 'react-native'; // added this

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';


import Firstscreen from './screens/Firstscreen';
import HomeScreen from './screens/HomeScreen';
import BewareOfTaxFraud from './components/BewareOfTaxFraud'; // and this

const stack = createStackNavigator();

//trying to make it fade rn, kind of failing - C
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
  transitionSpec: {
    duration: 3000, 
  }
});

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Firstscreen'>
        <stack.Screen name='Firstscreen' 
                      component={Firstscreen} 
                      options={{ cardStyleInterpolator: forFade,
                                headerShown:false }}
                      />
        <stack.Screen name='HomeScreen' component={HomeScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}