import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { Colors } from '../../components/styles';
import TeamsData from '../../dummy_data/Teams_Data.json'
import TeamsBanner from '../../components/TeamsBanner';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthProvider';
import BaseRequest from '../../constants/requests';
import { BASE_URL } from '../../constants/constant';

export default function Teams(){

  const [yourTeams, setYourTeams] = useState([])
  const isFocused = useIsFocused();
  const {userId} = useContext(AuthContext)

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await BaseRequest.get(`${BASE_URL}/users/getTeams/${userId}`);
        console.log(response.data)
        setYourTeams(response.data)
      } catch (error) {
        console.error("Error fetching leagues:", error);
      }
    }

    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);




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
        {yourTeams.length===0 && <Text>No Teams created</Text>}
        {yourTeams.length!==0 && yourTeams.map((team, id) => (
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

