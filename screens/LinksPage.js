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
      { name: '1', text: 'Answer: If you're under 18, you may be considered a dependent on your parents' or legal guardians' taxes. In such cases, you might not need to file your own tax return. Resource: If you're under 18, you might not need to file taxes. Learn more about dependent status: https://www.irs.gov/help/ita/whom-may-i-claim-as-a-dependent.' },
      { name: '2', text: 'Answer: As a student, you should be aware of potential tax benefits related to education, such as the American Opportunity Credit and the Lifetime Learning Credit. Resource: Explore tax benefits for education, like the American Opportunity Credit:https://www.irs.gov/help/ita/am-i-eligible-to-claim-an-education-credit and Lifetime Learning Credit.' },
      { name: '3', text: 'Answer: Everyone, regardless of occupation, should understand basic tax concepts, such as the difference between deductions and credits, and how to keep accurate records. Resource: Get acquainted with the basics of taxes, including deductions, credits, and record-keeping:https://apps.irs.gov/app/understandingTaxes/student/tax_tutorials.jsp' },
      { name: '4', text: 'Sub-question: What is your income level? Answer: Your income level affects your tax liability. Higher income levels generally result in higher tax payments. Resource: Understand how tax brackets work and how they impact your tax payments:https://www.irs.gov/taxtopics/tc751.' },
      { name: '5', text: 'Answer: If your gross income is above $12,950 (for single filers), you will likely need to file taxes. Make sure to report all sources of income accurately. Resource: Learn if you're required to file a federal tax return based on your income and situation:https://www.irs.gov/filing/individuals/who-should-file.' },
      { name: '6', text: 'Answer: If your gross income is below $12,950 (for single filers), you might not be required to file taxes. However, it's still beneficial to file if you qualify for tax credits. Resource: Check the filing requirements and understand when filing is necessary, even with lower income:https://www.irs.gov/help/ita/do-i-need-to-file-a-tax-return.' },
      { name: '7', text: 'Answer: Based on your responses, you may have a tax filing obligation. To understand your situation better, consult the official IRS guidelines:https://www.irs.gov/help/ita. Resource: Use the Interactive Tax Assistant to clarify your specific tax obligations based on your answers.' },
      { name: '8', text: 'Answer: Managing student finances includes understanding student loan interest deductions and education-related tax credits. Resource: Delve into the IRS guide for students to comprehend federal income tax aspects related to education:chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.irs.gov/pub/irs-pdf/p970.pdf' },
      { name: '9', text: 'Answer: To maximize your tax benefits, explore deductions like charitable contributions, medical expenses, and retirement contributions.Resource: Discover credits and deductions for individuals to make the most of potential tax savings:https://www.irs.gov/credits-deductions-for-individuals' },
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
