// Danica - D, Sneha - S, Shriya - C
// Let's try to comment on the stuff we add so we can keep track of who changes what

import React from 'react'; // added this'
import { View } from 'react-native'; // added this
import Firstscreen from './screens/Firstscreen';
import BewareOfTaxFraud from './BewareOfTaxFraud'; // and this

export default function App() {
  return (
    <View>
      <Firstscreen />
      <BewareOfTaxFraud /> 
    </View>
  );
}