import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, CheckBox, StyleSheet } from 'react-native';

const SurveyPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isUnder18, setIsUnder18] = useState(false);
  const [occupation, setOccupation] = useState('');
  const [studentLoans, setStudentLoans] = useState(false);
  const [income, setIncome] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSurveySubmit = () => {
    // Logic to handle the survey submission and show results
    setShowResults(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tax Survey</Text>

      <Text>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Please enter your name"
        onChangeText={text => setName(text)}
        value={name}
      />

      <Text>Age:</Text>
      <TextInput
        style={styles.input}
        placeholder="Please enter your age"
        onChangeText={text => setAge(text)}
        value={age}
        keyboardType="numeric"
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isUnder18}
          onValueChange={value => setIsUnder18(value)}
        />
        <Text>Are you under 18?</Text>
      </View>

      {isUnder18 ? (
        <View>
          {/* Display general info for those under 18 */}
        </View>
      ) : (
        <View>
          <Text>Occupation:</Text>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={occupation === 'student'}
              onValueChange={() => setOccupation('student')}
            />
            <Text>Student</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={occupation === 'other'}
              onValueChange={() => setOccupation('other')}
            />
            <Text>Other</Text>
          </View>

          {occupation === 'student' && (
            <View>
              {/* Ask about student loans */}
            </View>
          )}

          {occupation === 'other' && (
            <View>
              {/* Display general info for other occupation */}
            </View>
          )}

          {occupation === 'employed' && (
            <View>
              <Text>Income:</Text>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={income === 'likelyTaxFiles'}
                  onValueChange={() => setIncome('likelyTaxFiles')}
                />
                <Text>Likely to file taxes</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={income === 'notLikelyTaxFiles'}
                  onValueChange={() => setIncome('notLikelyTaxFiles')}
                />
                <Text>Not likely to file taxes</Text>
              </View>
            </View>
          )}
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSurveySubmit}>
        <Text style={styles.buttonText}>Submit Survey</Text>
      </TouchableOpacity>

      {showResults && (
        <View>
          {/* Display tax filing obligation message + resources - whatever else we want */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default SurveyPage;
