import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import BannerBig from '../../components/BannerBig';
// import Card from '../../components/Card';
import { BASE_URL, status } from '../../constants/constant';
import BaseRequest from '../../constants/requests';
import { AuthContext } from '../../context/AuthProvider';

export default function Dashboard() {
  const [upcomingLeagues, setUpcomingLeagues] = useState([]);
  const { profileDetails } = useContext(AuthContext);

  useEffect(() => {
    const getAllLeagues = async () => {
      const response = await BaseRequest.get(`${BASE_URL}/leagues/getAllLeagues`);
      const upcomingLeaguesResponse = response.data.filter(league => league.status === status.UPCOMING);
      setUpcomingLeagues(upcomingLeaguesResponse);
    }
    getAllLeagues();

  }, []);


  const Card = ({ title, text }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Hello {profileDetails.firstName},</Text>
      <Text style={styles.welcomeText}>Welcome to <Text style={styles.appName}>Golf Pro</Text>! Get ready to elevate your golf game to new heights! Join leagues, form teams, and dominate the leaderboard.</Text>
      
      <Text style={styles.subHeading}>Upcoming Leagues</Text>
      {upcomingLeagues.length > 0 ?
        <BannerBig key={upcomingLeagues[0].heading} banner_data={upcomingLeagues[0]} /> :
        <Text style={{ marginTop: 10, marginBottom: 20 }}>There are no upcoming leagues currently. </Text>
      }

      <Text style={styles.subHeading}>Golf Tips</Text>
      <View style={styles.cardContainer}>
        <Card title="Tip #1" text="Improve your swing by focusing on your tempo and rhythm." />
        <Card title="Tip #2" text="Practice your short game to lower your scores on the course." />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop:10,
    fontFamily: "Montserrat_700Bold",
  },
  userName: {
    color: '#008EB0',
  },
  welcomeText: {
    fontSize: 16,
    marginBottom: 20,
    fontFamily: "Montserrat",
  },
  appName: {
    color: '#008EB0',
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  cardContainer: {
    marginTop: 10,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
