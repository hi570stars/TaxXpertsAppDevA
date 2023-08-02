import React, {Component, useEffect, useState} from 'react';
import { Platform,View, Text, Image, Linking, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import Constants from 'expo-constants';

const BewareOfTaxFraud = (navigation) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Beware of Tax Fraud</Text>

      <Text style={styles.description}>
        Tax fraud is a serious issue that can have significant consequences. It's important to be aware of the signs of tax fraud and how to protect yourself. Here are some resources to help you stay informed:
      </Text>

      <Image source={require('../assets/tf.png')} 
      style={styles.image} 
      />

      <Text style={styles.subheading}>Videos:</Text>
          <WebView source={{ uri: 'https://www.youtube.com/watch?v=ID_xGbn109I' }} style={styles.video} />
          <WebView source={{ uri: 'https://www.youtube.com/watch?v=NglAffwNFho' }} style={styles.video} />

      <Text style={styles.subheading}>Helpful Links:</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://www.irs.gov/individuals/how-do-you-report-suspected-tax-fraud-activity')}>IRS Identity Theft, Fraud & Scams</Text>
        <Text style={styles.link} onPress={() => Linking.openURL('https://www.irs.gov/about-irs/irs-priorities-detecting-fraud-protecting-taxpayers')}>FTC Tax Identity Theft Awareness</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('https://www.irs.gov/about-irs/irs-priorities-detecting-fraud-protecting-taxpayers')}>FTC Tax Identity Theft Awareness</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('https://www.industriuscfo.com/seasons-new-online-tax-fraud-method/')}>FTC Tax Identity Theft Awareness</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#B8E2C8'
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#B0A1BA',
  },
  video: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: '#A5B5BF',
    marginBottom: 10,
  },
});

export default BewareOfTaxFraud;
