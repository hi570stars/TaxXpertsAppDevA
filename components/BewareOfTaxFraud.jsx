import React, {Component, useEffect, useState} from 'react';
import { Platform,View, Text, Image, Linking, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import Constants from 'expo-constants';

const BewareOfTaxFraud = ({navigation}) => {
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

    <View style={styles.container}>
      <Text style={styles.heading}>Beware of Tax Fraud</Text>

      <Text style={styles.description}>
        Tax fraud is a serious issue that can have significant consequences. It's important to be aware of the signs of tax fraud and how to protect yourself. Here are some resources to help you stay informed:
      </Text>

      <Image source={require('../assets/tf.png')} 
      style={styles.image} 
      resizeMode="contain"
      />

      <Text style={styles.subheading}>Videos:</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=ID_xGbn109I')}>How to Protect yourself from Tax Fraud</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=NglAffwNFho')}>How to Avoid Tax Scams</Text>

      <Text style={styles.subheading}>Helpful Links:</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://www.irs.gov/individuals/how-do-you-report-suspected-tax-fraud-activity')}>IRS Identity Theft, Fraud & Scams</Text>
        <Text style={styles.link} onPress={() => Linking.openURL('https://www.irs.gov/about-irs/irs-priorities-detecting-fraud-protecting-taxpayers')}>FTC Tax Identity Theft Awareness</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('https://www.irs.gov/about-irs/irs-priorities-detecting-fraud-protecting-taxpayers')}>FTC Tax Identity Theft Awareness</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('https://www.industriuscfo.com/seasons-new-online-tax-fraud-method/')}>FTC Tax Identity Theft Awareness</Text>

    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'linen',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'darkgreen'
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  image: {
    width: '50%',
    height: 300,
    marginBottom: 20,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'darkred',
  },
  video: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: '#2f4f4f',
    marginBottom: 10,
  },
  nav:{
    flex: .2,
    justifyContent:'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: '1%'
  },
});

export default BewareOfTaxFraud;
