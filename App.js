// Danica - D, Sneha - S, Shriya - C
// Let's try to comment on the stuff we add so we can keep track of who changes what

import React from 'react'; // added this
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/templogo.png')} // temporary logo/image for start page - C
        style={styles.logo}
        resizeMode="contain" // so the png photo isn't a messed up size - C
      />
      <Text style={styles.title}>TaxXperts</Text>
      <Text style={styles.subtitle}>Building Financial Foundations for Young Adults</Text>
      <Button
        title="CONTINUE" // I'm not sure we need a button? Maybe just have it continue to the next page on its own. I'll change it later once I figure out how - C
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6fa', // lavender-ish color, subject to change - C
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 550,
    height: 550,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
  },
});
