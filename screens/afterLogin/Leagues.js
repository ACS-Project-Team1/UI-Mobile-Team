import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import BannerBig from '../../components/BannerBig';

export default function Leagues(){
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Upcoming Leagues</Text>
      <BannerBig />
      <Text style={styles.heading}>Ongoing Leagues</Text>
      <Text style={styles.heading}>Previous Leagues</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    paddingHorizontal:"8%",
    paddingVertical:"5%"
  },
  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily:'Montserrat_700Bold'
  },
});

