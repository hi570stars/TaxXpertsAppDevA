import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LinksPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Links Page</Text>
      <Text style={styles.content}>
        This is the Links Page. You can add your links or other content here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LinksPage;
