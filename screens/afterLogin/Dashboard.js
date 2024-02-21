// HeadingScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Dashboard(){
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

