// Danica - D, Sneha - S, Shriya - C
// Let's try to comment on the stuff we add so we can keep track of who changes what

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Header from './src/components/Header';
import Footer from './src/components/Footer';


import Intro from "./src/screens/Intro";
import AboutUs from "./src/screens/AboutUs";
import Survey from "./src/screens/Survey";
import TaxForms from "./src/screens/TaxForms";
import TaxFraud from "./src/screens/TaxFraud";

const Stack = createNativeStackNavigator();

export default function App(){
  return(
      <NavigationContainer>
        <Stack.Navigator>
        
          <Stack.Screen 
          name = "Introduction" 
          component = {Intro}
          options={{title: 'TaxXperts App Introduction'}}/>
          
          <Stack.Screen 
          name = "Survey" 
          component = {Survey}
          options={{title: 'TaxXperts App Survey'}}/>
        <Stack.Screen 
          name = "TaxForms" 
          component = {TaxForms}
          options={{title: 'Tax Forms Linked'}}/>
        <Stack.Screen 
          name = "TaxFraud" 
          component = {TaxFraud}
          options={{title: 'Beware of Tax Fraud'}}/>
        <Stack.Screen 
          name = "AboutUs" 
          component = {AboutUs}
          options={{title: 'About the Creators'}}/>

        </Stack.Navigator>
      </NavigationContainer>
  )

}
