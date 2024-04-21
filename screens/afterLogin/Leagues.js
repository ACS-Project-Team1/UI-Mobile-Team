import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';

import BannerBig from '../../components/BannerBig';
import BannerSmall from '../../components/BannerSmall';
import LeagueData from '../../dummy_data/Leagues_Data.json';
import { BASE_URL, status } from '../../constants/constant';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
import BaseRequest from '../../constants/requests';
import { AuthContext } from '../../context/AuthProvider';


export default function Leagues() {
  const [upcomingLeagues, setUpcomingLeagues] = useState([])
  const [registeredLeagues, setRegisteredLeagues] = useState([])
  const isFocused = useIsFocused();
  const { userId } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BaseRequest.get(`${BASE_URL}/leagues/getAllLeagues`);
        const allLeagues = response.data;

        // Filter out upcoming leagues that the user has already registered for
        const filteredUpcomingLeagues = allLeagues.filter(league =>
          league.status === status.UPCOMING && !registeredLeagues.some(regLeague => regLeague.leagueId === league.leagueId)
        );
        setUpcomingLeagues(filteredUpcomingLeagues);
      } catch (error) {
        console.error("Error fetching leagues:", error);
      }
    }

    if (isFocused) {
      fetchData();
    }
  }, [isFocused, registeredLeagues]);

  useEffect(() => {
    const getRegisteredLeagues = async () => {
      try {
        const response = await BaseRequest.get(`${BASE_URL}/users/getLeagues/${userId}`);
        setRegisteredLeagues(response.data);
      } catch (error) {
        console.error("Error fetching leagues:", error);
      }
    }

    if (isFocused) {
      getRegisteredLeagues();
    }
  }, [isFocused]);


  return (
    <ScrollView style={styles.container}>

      <Text style={styles.heading}>Upcoming Leagues</Text>
      {
        upcomingLeagues.length > 0 ?
          upcomingLeagues.map((league) => {
            return <BannerBig key={league.leagueName} banner_data={league} />
          })
          :
          <Text style={{ marginTop: "5%", marginBottom:"15%" }}>There are no upcoming leagues for you to register currently. </Text>
      }


      <Text style={styles.heading}>Registered Leagues</Text>
      {
        registeredLeagues.length > 0 ?
          registeredLeagues.map((league) => {
            return <BannerSmall key={league.leagueName} banner_data={league} />
          }) : <Text style={{ marginTop: "5%" }}>You have not registered for any leagues currently. </Text>
      }

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    paddingVertical: "5%",
  },
  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Montserrat_700Bold'
  },
});
