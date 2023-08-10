import React, { useState } from 'react';
import { View, Text, CheckBox, ScrollView, StyleSheet, Button } from 'react-native';

const SurveyPage = ({ navigation }) => {
  const [isUnder18, setIsUnder18] = useState(false);
  const [occupation, setOccupation] = useState('');
  const [income, setIncome] = useState('');
  const [showResults, setShowResults] = useState(false);

  return (
    <ScrollView style={styles.scrollView}>
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

      <View style={styles.container}>
        <Text style={styles.header}>Tax Survey</Text>

        <View style={styles.coloredContainer}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isUnder18}
              onValueChange={value => setIsUnder18(value)}
            />
            <Text style={styles.questionText}> Are you under 18?</Text>
          </View>

          {isUnder18 ? (
            <View style={styles.answerContainer}>
              <Text style={styles.answerText}>
                Check Box 5 to see if you are eligible for taxes - you may be a "dependent" on a legal guardian's taxes and do not need to file for taxes.
              </Text>
            </View>
          ) : (
            <View>
              <Text style={styles.label}>Occupation:</Text>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={occupation === '  student'}
                  onValueChange={() => setOccupation('  student')}
                />
                <Text>Student</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={occupation === '  other'}
                  onValueChange={() => setOccupation('  other')}
                />
                <Text>Other</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={occupation === '  employed'}
                  onValueChange={() => setOccupation('  employed')}
                />
                <Text>Employed</Text>
              </View>

              {occupation === '  student' && (
                <View style={styles.answerContainer}>
                  <Text style={styles.answerText}>Find more about student finances and loans in Box 6.</Text>
                </View>
              )}

              {occupation === '  other' && (
                <View style={styles.answerContainer}>
                  <Text style={styles.answerText}>Find more general information about taxes in Box 7.</Text>
                </View>
              )}

              {occupation === '  employed' && (
                <View>
                  <Text style={styles.label}>Income:</Text>
                  <View style={styles.checkboxContainer}>
                    <CheckBox
                      value={income === 'overCertainAmount'}
                      onValueChange={() => setIncome('overCertainAmount')}
                    />
                    <Text>  Gross Income over $12,950</Text>
                  </View>
                  <View style={styles.checkboxContainer}>
                    <CheckBox
                      value={income === 'underCertainAmount'}
                      onValueChange={() => setIncome('underCertainAmount')}
                    />
                    <Text>  Gross Income under $12,950</Text>
                  </View>
                  {income === 'overCertainAmount' && (
                    <View style={styles.answerContainer}>
                      <Text style={styles.answerText}>
                        If you are single and make a gross income of over $12,950, it is likely you will need to file for taxes this year. See Box 8 for more information.
                      </Text>
                    </View>
                  )}
                  {income === 'underCertainAmount' && (
                    <View style={styles.answerContainer}>
                      <Text style={styles.answerText}>
                        If you are single and make a gross income under $12,950, it is likely you will NOT need to file for taxes this year. See Box 9 for more information.
                      </Text>
                    </View>
                  )}
                </View>
              )}
            </View>
          )}
        </View>

        {showResults && (
          <View>
            {/* Display tax filing obligation message + resources - whatever else we want */}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  nav: {
    flex: 0.2,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  navButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  coloredContainer: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  answerContainer: {
    marginTop: 10,
  },
  answerText: {
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default SurveyPage;
