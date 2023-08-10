import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Button } from 'react-native';

const image = require('../assets/library.jpg');

const LinksPage = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (name) => {
    setSelectedButton(name === selectedButton ? null : name);
  };

  const renderInfoButtons = () => {
    const buttonsData = [
      { name: '1', text: 'According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground.' },
      { name: '2', text: 'According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground.' },
      { name: '3', text: 'According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground.' },
      { name: '4', text: 'According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground.' },
      { name: '5', text: 'According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground.' },
      { name: '6', text: 'According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground.' },
      { name: '7', text: 'According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground.' },
      { name: '8', text: 'According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground.' },
      { name: '9', text: 'According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground.' },
    ];

    return buttonsData.map((button) => (
      <TouchableOpacity
        key={button.name}
        style={[
          styles.button,
          selectedButton === button.name && styles.selectedButton,
        ]}
        onPress={() => handleButtonPress(button.name)}
      >
        {selectedButton !== button.name && (
          <Text style={styles.buttonText}>{button.name}</Text>
        )}
        {selectedButton === button.name && (
          <Text style={styles.buttonDescription}>{button.text}</Text>
        )}
      </TouchableOpacity>
    ));
  };

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
            title="Information"
            color="black"
            onPress={() => navigation.navigate('Information')}
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
          <Text style={styles.headerText}>Find Basic Information on Taxes Below</Text>
        </View>
        <Text style={styles.text}>Please complete the survey first in order to determine which boxes are best for you. </Text>
        <View style={styles.infoContainer}>
          {renderInfoButtons()}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
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
  nav: {
    flex: 0.2,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  header: {
    paddingTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  infoContainer: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  buttonDescription: {
    color: 'white',
    fontSize: 14,
    marginTop: 8,
  },
  text: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LinksPage;
