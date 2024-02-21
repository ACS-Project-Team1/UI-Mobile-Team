import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Stats(){
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Stats</Text>
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

