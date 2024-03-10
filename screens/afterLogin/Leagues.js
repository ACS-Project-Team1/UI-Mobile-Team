import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import BannerBig from '../../components/BannerBig';
import BannerSmall from '../../components/BannerSmall';
import LeagueData from '../../dummy_data/Leagues_Data.json';

export default function Leagues(){
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Upcoming Leagues</Text>
      {
        LeagueData.map((league) => {
          return league.Status==="Upcoming"? <BannerBig key={league.heading} banner_data={league} /> :null
        })
      }

      <Text style={{marginBottom:"5%"}} />

      <Text style={styles.heading}>Ongoing Leagues</Text>
      {
        LeagueData.map((league) => {
          return league.Status==="Playing"? <BannerSmall key={league.heading} banner_data={league} /> :null
        })
      }

      <Text style={{marginBottom:"5%"}} />

      <Text style={styles.heading}>Previous Leagues</Text>
      {
        LeagueData.map((league) => {
          return league.Status==="Overdue"? <BannerSmall key={league.heading} banner_data={league} /> :null
        })
      }

      <Text style={{marginBottom:"20%"}} />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    paddingHorizontal:"5%",
    paddingVertical:"5%",
  },
  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily:'Montserrat_700Bold'
  },
});

