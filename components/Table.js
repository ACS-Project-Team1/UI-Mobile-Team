import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Table = ({ tableData, imageLink }) => {
  return (
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
  );
};

export default Table;


const styles = StyleSheet.create({
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