import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

const image = require('../assets/library.jpg');

const LinksPage = ({navigation}) => {
  return (

    <View style={styles.container}>
        
      
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Find links below to various tax forms.</Text>
        </View>
        <Text style={styles.text}>Disclaimer: all links lead to government websites on taxes.</Text>
        <Text style={styles.text}>TaxXperts is no liable for any misinformation or issues on linked websites. </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
nav:{
    flex: .2,
    justifyContent:'center',
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
