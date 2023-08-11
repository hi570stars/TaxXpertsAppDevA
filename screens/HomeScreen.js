import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Button, Image, ImageBackground, Linking} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import * as Font from 'expo-font';
import Constants from 'expo-constants';

const HomeScreen = ({navigation}) => {

    return (
    <View style = {styles.backgroundContainer}>
      <View style = {styles.screen}>
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
        <Text style = {styles.subheading}>Some Tax Information you should know about:</Text>
        <Text style={styles.link} onPress={() => Linking.openURL('https://credit.org/blog/basics-of-taxes/')}>Basics of Taxes</Text>
        <Text style={styles.link} onPress={() => Linking.openURL('https://www.communitytax.com/resource-center/tax-101/')}>Taxes 101</Text>
      </View>
      <View style = {styles.footer}>
            
            <Text style = {styles.tinyText2}>© TaxXperts 2023</Text>
        </View>

      
    </View>
    </View>
    );
   }
  
  
  const styles = StyleSheet.create({
    subheading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
      color: 'black',
    },
    link: {
      fontSize: 16,
      color: '#FF69B4',
      marginBottom: 5,
      marginTop: 5
    },
    screen:{
      flex:1,
      backgroundColor: 'lavender',
      alignItems: 'center',
      justifyContent:'center',
    },
    backgroundContainer: {
      flex: 1,
      backgroundColor: '#d8e6f0', 
    },
    body: {
      flex: 2,
      width: '90%',
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
      padding: 20,
      borderRadius: 10,
      marginVertical: 20,
      elevation: 2,
      
    },
    nav:{
      flex: .5,
      justifyContent:'center',
      flexDirection: 'row',
      backgroundColor: 'plum',
      alignItems: 'flex-start',
      marginTop: '.25%',
      borderRadius: 10,
      marginVertical: 20,
      paddingVertical: 10,
      paddingHorizontal: 25,
    },
    introTitle:{
      flex:.5,
      width:'100%',
      justifyContent:'center',
      flexDirection: 'row',
      backgroundColor: 'plum',
      borderRadius: 10,
      marginVertical: 20,
      paddingVertical: 10,
      paddingHorizontal: 25,
    },
    footer:{
      flex:1,
      width: '100%',
      justifyContent:'center',
      flexDirection: 'row',
      alignItems: 'flex-end',
      backgroundColor: 'lightpink',
      borderRadius: 10,
      marginVertical: 20,
      paddingVertical: 10,
    },
    text:{
      textAlign: 'center',
      flex: 1,
      fontSize: 32,
      fontWeight: 'bold',
      margin:'.5%',
      marginVertical: 15, 

    },
    tinyText:{
      textAlign: 'center',
      flex:1,
      fontSize:12,
      margin:'.5%',
      lineHeight: 28,
      marginHorizontal: 20
    },
    tinyText2:{
      textAlign: 'center',
      flex:1,
      fontSize:20,
      margin:'.5%',
      marginHorizontal:'10%',
      color: 'white'
    },
    logo: {
      width: 160,
      height: 160,
      marginTop:1,
      marginBottom: 1,
    },
    header: {
        flex: 1.5,
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'column',
        

      },
  });
  
  export default HomeScreen;
