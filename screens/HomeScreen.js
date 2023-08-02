import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import * as Font from 'expo-font';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/AntDesign';
// import Header from 'C:/Users/18064/Downloads/TaxXpertsApp/TaxXpertsAppDev/src/components/Header';
// import Footer from 'C:/Users/18064/Downloads/TaxXpertsApp/TaxXpertsAppDev/src/components/Header';
const HomeScreen = ({navigation}) => {

    return (
    <View style = {styles.screen}>
       <View style = {styles.nav} navigation = {navigation}>

            <Button
              title = "Survey"
              color = "black"
              onPress={() => navigation.navigate('Survey')}
            />
            <Button
              title = "Tax Forms"
              color = "black"
              onPress={() => navigation.navigate('TaxForms')}
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
      
      <View style = {styles.header}>
            <Text style = {styles.text}>TaxXperts</Text>
        </View>
      
      <View style = {styles.introTitle}>
        <Text style = {styles.text}>
          Introduction to Taxes
        </Text>
      </View>
      
      <View style = {styles.body}>
        <Text style = {styles.tinyText}>
          How are our neighborhood roads always well-maintained? How is our police and justice system funded? How are our schools and parks what they are today?
          The answer to all these questions is: TAXES! Every earning individual has to pay taxes in order to fund the services mentioned prior, so you or someone you know plays an active part in funding your local police or maintaining the public schools around you.
          In addition to benefitting public services, taxes also provide economic relief to the elderly and low-income families.
          So, although paying taxes means less money in your bank account, know that making this mandatory sacrifice is helping yourself and others around you!
          Does this all sound complicated already? Well, allow us, the TaxXperts, to guide you through this journey of Taxes. Here, you will find a survey gauging the estimated types of taxes you will need to pay, links to tax forms so you don't have to rummage the internet for them, a few warnings about not paying your taxes and the consequences it causes, as well as an About Us section, so you know more about the creators of this app, and our mission to make tax knowledge more accessible to all! 
        </Text>
      </View>
      <View style = {styles.footer}>
            
            <Text style = {styles.tinyText}>copyrighted TaxXperts 2023</Text>
        </View>

      
    </View>
    );
   }
  
  
  const styles = StyleSheet.create({
    screen:{
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'center',
    },
    body: {
      flex: 2,
      width: '100%',
      justifyContent:'center',
      flexDirection: 'row',
      alignItems: 'flex-start',
      backgroundColor: 'pink'
      
    },
    nav:{
      flex: .2,
      justifyContent:'center',
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    introTitle:{
      flex:.5,
      width:'100%',
      justifyContent:'center',
      flexDirection: 'row',
      alignItems: 'flex-end',
      backgroundColor: 'red'
    },
    footer:{
      flex:1,
      width: '100%',
      justifyContent:'center',
      flexDirection: 'row',
      alignItems: 'flex-end',
      backgroundColor: 'blue',
    },
    text:{
      textAlign: 'center',
      flex: 1,
      fontSize: 30,
      fontWeight: 'bold',
      margin:'.5%'

    },
    tinyText:{
      textAlign: 'center',
      flex:1,
      fontSize:20,
      margin:'.5%',
      marginHorizontal:'10%'
    },
    header: {
        flex: 1,
        width: '100%',
        justifyContent:'center',
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight
      },
  });
  
  export default HomeScreen;
