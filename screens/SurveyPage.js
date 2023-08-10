// NEED THIS FIRST npm install survey-react-ui --save


import React, { useState } from 'react';
import { View, Button, Text, TextInput, TouchableOpacity, CheckBox, StyleSheet } from 'react-native';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

const SurveyPage = ({navigation}) => {
  const surveyJson = {
    elements: [{
      name: "FirstName",
      title: "Enter your preferred name:",
      type: "text"
    }, {
      name: "Age",
      title: "Enter your age:",
      type: 'text',
      inputType: 'number',
    }]
  };
  const survey = new Model(surveyJson);

  return (
    

    <View style={styles.container}>
    
      <View style = {styles.nav} navigation = {navigation}>
            <Button
              title = "Survey"
              color = "black"
              onPress={() => navigation.navigate('Survey')}
            />
            <Button
              title = "Information"
              color = "black"
              onPress={() => navigation.navigate('Information')}
            />
            <Button
              title = "Tax Fraud"
              color = "black"
              onPress={() => navigation.navigate('TaxFraud')}
            />
            <Button
              title = "About Us"
              color = "black"
              onPress={() => navigation.navigate('AboutUs')}
            />

      </View>
      <Survey model={survey} />;
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  nav:{
    flex: .2,
    justifyContent:'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 10
  },
});

export default SurveyPage;