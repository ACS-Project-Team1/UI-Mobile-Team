import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native';

import { status } from '../../constants/constant';
import LeagueData from '../../dummy_data/Leagues_Data.json';
import BannerBig from '../../components/BannerBig';

const tableData = [
  ['Rank #', 'Team', 'Total'],
  ['#1', 'Birdies', '50'],
  ['#2', 'Birdies', '50'],
  ['#3', 'Birdies', '50'],
];

const imageLink = "https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?w=826&t=st=1710281012~exp=1710281612~hmac=48d755763cf719d702a2b9cfffd9f1ad244fb8e8e6205d7197c202f01d13cef1"

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Upcoming Leagues</Text>
      {
        LeagueData.map((league) => {
          return league.Status === status.UPCOMING ? <BannerBig key={league.heading} banner_data={league} /> : null
        })
      }
      <Text style={styles.heading}>Top 3 Teams</Text>
      <View style={styles.tableContainer}>
        {tableData.map((row, rowIndex) => (
          <View key={rowIndex} style={[styles.row, rowIndex === 0 && styles.headerRow, rowIndex === tableData.length - 1 && styles.lastRow]}>
            {row.map((cell, cellIndex) => (
              <View key={cellIndex} style={[styles.cell, rowIndex === 0 ? styles.headerCell : styles.bodyCell, cellIndex === 1 && rowIndex !== 0 && styles.imageCell]}>
                {cellIndex === 1 && rowIndex !== 0 && (
                  <Image source={{ uri: imageLink }} style={styles.image} />
                )}
                <Text style={rowIndex === 0 ? styles.headerText : styles.bodyText}>{cell}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
      <Text style={styles.heading}>Your Stats</Text>
      <View style={styles.card}>
      <Text style={styles.cardTitle}>Best Score :90 </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:"5%",
    paddingVertical:"5%",
  },
  card: {
    backgroundColor:'white',
    marginVertical:"3%",
    marginHorizontal:"0%",
    height:70,
    flex:1,
    borderColor:'#B1B2B9',
    borderRadius:"10%",
    padding:'2%',
    paddingHorizontal:'4%'
  },
  cardTitle: {
    fontWeight: 'normal',
    fontSize:16
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tableContainer: {
    padding:5,
    marginTop: 20,
    marginBottom:30,
    borderRadius: 10,
    backgroundColor: 'white',
    // Card shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#B9B3B3',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  cell: {
    borderWidth: 1,
    borderColor: 'transparent',
    alignItems:"center",
    padding: 10,
    flex: 1,
  },
  bodyCell: {
    backgroundColor: 'white',
  },
  imageCell: {
    flexDirection: 'row',
  },
  headerText: {
    fontWeight: 'bold', 
  },
  bodyText: {
    fontWeight: 'normal',
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginRight: 15,
  },
});
