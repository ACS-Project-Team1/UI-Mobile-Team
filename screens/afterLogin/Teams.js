import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Teams(){
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Teams</Text>
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

