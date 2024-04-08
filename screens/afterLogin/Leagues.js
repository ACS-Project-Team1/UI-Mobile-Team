import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';

import BannerBig from '../../components/BannerBig';
import BannerSmall from '../../components/BannerSmall';
import LeagueData from '../../dummy_data/Leagues_Data.json';
import { BASE_URL, status } from '../../constants/constant'; 
import { useNavigation, useRoute } from '@react-navigation/native';
import BaseRequest from '../../constants/requests';


export default function Leagues(){
  useEffect(()=>{
    const getAllLeagues = async() => {
      const response = await BaseRequest.get(`${BASE_URL}/leagues/getAllLeagues`)
      console.log(response)

    }

    getAllLeagues()

  }, [])

  console.log(status)
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.heading}>Upcoming Leagues</Text>
      {
        LeagueData.map((league) => {
          return league.Status===status.UPCOMING? <BannerBig key={league.heading} banner_data={league} /> :null
        })
      }

      <Text style={{marginBottom:"5%"}} />

      <Text style={styles.heading}>Ongoing Leagues</Text>
      {
        LeagueData.map((league) => {
          return league.Status===status.PLAYING? <BannerSmall key={league.heading} banner_data={league} /> :null
        })
      }

      <Text style={{marginBottom:"5%"}} />

      <Text style={styles.heading}>Previous Leagues</Text>
      {
        LeagueData.map((league) => {
          return league.Status===status.OVERDUE? <BannerSmall key={league.heading} banner_data={league} /> :null
        })
      }

      <Text style={{marginBottom:"20%"}} />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:"5%",
    paddingVertical:"5%",
  },
  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily:'Montserrat_700Bold'
  },
});

