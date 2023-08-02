import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SurveyPage = () => {
  const [age, setAge] = useState('');
  const [incomeRange, setIncomeRange] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSurveySubmit = () => {
    // Logic to handle the survey submission and show results
    setShowResults(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tax Survey</Text>

      <Text>Age:</Text>
      <TextInput
        style={styles.input}
        placeholder="Please enter your age"
        onChangeText={text => setAge(text)}
        value={age}
        keyboardType="numeric"
      />

      {/* We could maybe add similar components for things like income range and employment status selection */}

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

// styling!! - can't tell what it looks like still but you guys can play around with it :)
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
});

export default SurveyPage;
