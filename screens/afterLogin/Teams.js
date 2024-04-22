import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { Colors } from '../../components/styles';
import TeamsData from '../../dummy_data/Teams_Data.json'
import TeamsBanner from '../../components/TeamsBanner';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthProvider';

export default function Teams(){

  const [yourTeams, setYourTeams] = useState([])
  const isFocused = useIsFocused();
  const {userId} = useContext(AuthContext)

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await BaseRequest.get(`${BASE_URL}/users/getLeagues/${userId}`);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching leagues:", error);
      }
    }

    if (isFocused) {
      fetchData();
    }
  }, [isFocused, yourTeams]);




  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{height:'10%'}} />
        <View style={styles.buttonContainer}>
          <CustomButton text="+ Create Team" color={Colors.theme} onPress={() => navigation.navigate('createTeam')} />
        </View>
      
      <View style={{height:'10%'}} />
      
      <View style={styles.teamsContainer}>
        <Text style={styles.heading}>Your Teams</Text>
        <View style={{height:'10%'}} />
        {TeamsData.length!==0 && TeamsData.map((team, id) => (
          <>
          <TeamsBanner key={id} banner_data={team} />
          </>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:'7%',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer:{
    alignItems:'center'
  },
  teamsContainer:{
    justifyContent:'flex-start',
    paddingLeft:'0px',
    marginLeft:'0px'
  }
});

