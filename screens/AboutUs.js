import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, Image,Button} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
// import * as Font from 'expo-font';
import Constants from 'expo-constants';
// import Header from 'C:/Users/18064/Downloads/TaxXpertsApp/TaxXpertsAppDev/src/components/Header';


const AboutUs = ({navigation}) => {

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
            <Text style = {styles.text}>About Us!</Text>
        </View> 
      
      <View style = {styles.picBox}>
        <Image style = {styles.pic} source={require('../assets/icon.png')}/>
        <Image style = {styles.pic} source={require('../assets/icon.png')}/>
        <Image style = {styles.pic} source={require('../assets/icon.png')}/>

      </View>
      
      <View style = {styles.body}>
        <Text style = {styles.tinyText}>
          Sneha, Danica, and Shriya: Your 3 TaxXperts, are here for you even when it seems like your teachers aren't. 
          Being high school seniors and a high school graduate, personally, we learned all about the Manifest Destiny and proving how a shape is a triangle, but never learned anything about taxes at our schools!
          We want to bring you this app in order to give you the basics your school couldn't give you and help you out with all the resources you might need!
          Hopefully, you're more equipped with tax knowledge to help in your transition to adulthood than we were, because that's our only goal!
          Always here for you,
          the TaxXperts!
        </Text>
      </View>
      <View style = {styles.footer}>
            
            <Text style = {styles.tinyText}>copyrighted TaxXperts 2023</Text>
        </View>
    </View>
    
    );
   }
  
  
  const styles = StyleSheet.create({
    pic:{
      flex:1,
      width: '30%',
      height: '90%',
      margin: '.1%'
    },
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
    
    picBox:{
      flex:3,
      width:'100%',
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    footer:{
      flex:1,
      width: '100%',
      justifyContent:'center',
      flexDirection: 'row',
      alignItems: 'flex-end',
      backgroundColor: 'blue'
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
    nav:{
      flex: .2,
      justifyContent:'center',
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    header: {
        flex: 1,
        width: '100%',
        justifyContent:'center',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: Constants.statusBarHeight
      },
  });
  
  export default AboutUs;
