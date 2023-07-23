import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

//import BewareOfTaxFraud from './components/BewareOfTaxFraud'; 
//import AboutUs from './screens/AboutUs';
//import Tax101 from './screens/Tax101';
//import SurveyPage from './screens/SurveyPage';
//import LinksPage from './screens/LinksPage';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>CONTENT (MAYBE TAX 101 HERE/INTO)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ced1', // darkturquoise (`#00ced1`)
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
