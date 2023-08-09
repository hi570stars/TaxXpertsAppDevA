import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, Button} from 'react-native';
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
          <Text style={styles.headerText}>Find basic information on taxes below. </Text>
        </View>
        <Text style={styles.text}>  </Text>
        <>
          <Info name="1" />
          <Info name="2" />
          <Info name="3" />
          <Info name="4" />
          <Info name="5" />
          <Info name="6" />
          <Info name="7" />
          <Info name="8" />
          <Info name="9" />
        </>
      </ImageBackground>
    </View>
  );
};

const Info = props => {
  const [toScreen, setToScreen] = useState(true);
  return (
  <View>
    <View style={{ height: 20 }} />
    <Button style={styles.button}
        onPress={()=> {
          setToScreen(false);
        }}
        disabled = {!toScreen}
        title = {toScreen ? props.name: 'According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees dont care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Lets shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? - Barry? - Adam? - Oan you believe this is happening? - I cant. Ill pick you up. Looking sharp. Use the stairs. Your father paid good money for those. Sorry. Im excited. Heres the graduate. Were very proud of you, son.'}
    />
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
    paddingTop: 10,
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
  button: {
    alignContent: 'center',
    padding: 20,
    marginBottom: 10,
  }
});

export default LinksPage;
