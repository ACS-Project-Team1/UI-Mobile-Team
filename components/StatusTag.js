import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

import {Colors} from './styles'


const StatusTag = ({ text, type ,icon}) => {

  // Determine background color and text color based on type
  const { backgroundColor, textColor } = Colors[type] || Colors.default;


  return (
    <View style={[styles.container, { backgroundColor }, styles.inline]}>
        <Ionicons name={icon} size={20} color={textColor} />
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:90,
    paddingHorizontal:'8%',
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent:'center',
    alignItems:'center',
  },
  inline:{
    flexDirection:'row', flexWrap:'wrap',
    justifyContent:'space-around',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default StatusTag;
