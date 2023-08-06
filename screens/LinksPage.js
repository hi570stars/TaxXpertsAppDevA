import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
import Constants from 'expo-constants';

const image = require('../assets/library.jpg');

const LinksPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.nav}>
          <Button
            title="Survey"
            color="black"
            onPress={() => navigation.navigate('Survey')}
          />
          <Button
            title="Tax Forms"
            color="black"
            onPress={() => navigation.navigate('TaxForms')}
          />
          <Button
            title="Tax Fraud"
            color="black"
            onPress={() => navigation.navigate('TaxFraud')}
          />
          <Button
            title="About Us"
            color="black"
            onPress={() => navigation.navigate('AboutUs')}
          />
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Find links below to various tax forms.</Text>
        </View>
        <Text style={styles.text}>Disclaimer: all links lead to government websites on taxes.</Text>
        <Text style={styles.text}>TaxXperts is not liable for any misinformation or issues on linked websites.</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flex: 0.2,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  header: {
    paddingTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LinksPage;
