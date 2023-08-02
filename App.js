// Danica - D, Sneha - S, Shriya - C
// Let's try to comment on the stuff we add so we can keep track of who changes what

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

//import Header from './src/components/Header';
//import Footer from './src/components/Footer';


import Firstscreen from './screens/Firstscreen';
import HomeScreen from './screens/HomeScreen';
import BewareOfTaxFraud from './components/BewareOfTaxFraud';
// import Intro from "./src/screens/Intro";

import AboutUs from "./screens/AboutUs";
import SurveyPage from "./screens/SurveyPage";
import LinksPage from "./screens/LinksPage";
// import TaxFraud from "./src/screens/TaxFraud";

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
  transitionSpec: {
    duration: 3000, 
  }
});

const Stack = createNativeStackNavigator();

export default function App(){
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Firstscreen'>
        <Stack.Screen name='Firstscreen' 
                      component={Firstscreen} 
                      options={{ cardStyleInterpolator: forFade,
                                headerShown:false }}
                      />
        <Stack.Screen name='HomeScreen' // so i added this when trying to figure out the links page, but realized it didn't matter till nav worked - C
                      component={HomeScreen} 
                      options={{
                        headerTitle: 'Home Screen', 
                        headerStyle: {
                          backgroundColor: '#7b68ee', 
                        },
                        headerTitleStyle: {
                          fontSize: 24,
                          fontWeight: 'bold',
                          color: 'white', 
                        },
                        headerTitleAlign: 'center', 
                        headerLeft: null, 
                      }}
        />
          <Stack.Screen 
          name = "Introduction" 
          component = {HomeScreen}
          options={{title: 'TaxXperts App Introduction'}}/>
          
          <Stack.Screen 
          name = "Survey" 
          component = {SurveyPage}
          options={{title: 'TaxXperts App Survey'}}/>
        <Stack.Screen 
          name = "TaxForms" 
          component = {LinksPage}
          options={{title: 'Tax Forms Linked'}}/>
        <Stack.Screen 
          name = "TaxFraud" 
          component = {BewareOfTaxFraud}
          options={{title: 'Beware of Tax Fraud'}}/>
        <Stack.Screen 
          name = "AboutUs" 
          component = {AboutUs}
          options={{title: 'About the Creators'}}/>

        </Stack.Navigator>
        
      </NavigationContainer>
  )

}
