import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { Colors } from '../../components/styles';
import TeamsData from '../../dummy_data/Teams_Data.json'
import TeamsBanner from '../../components/TeamsBanner';
import { useNavigation } from '@react-navigation/native';

export default function Teams(){
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

