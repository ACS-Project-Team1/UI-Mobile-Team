import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';

import { status } from '../../constants/constant';
import LeagueData from '../../dummy_data/Leagues_Data.json';
import BannerBig from '../../components/BannerBig';

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Upcoming Leagues</Text>
      {
        LeagueData.map((league) => {
          return league.Status === status.UPCOMING ? <BannerBig key={league.heading} banner_data={league} /> : null
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

