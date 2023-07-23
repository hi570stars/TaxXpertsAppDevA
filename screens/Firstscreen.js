import React, { useEffect } from 'react'; // added this
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Firstscreen = () => {
  // to navigate to homsecreen till I figure out the fade - C
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]); 



  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/templogo.png')} // temporary logo/image for start page - C
        style={styles.logo}
        resizeMode="contain" // so the png photo isn't a messed up size - C
      />
      <Text style={styles.title}>TaxXperts</Text>
      <Text style={styles.subtitle}>Building Financial Foundations for Young Adults</Text>
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

export default Firstscreen;