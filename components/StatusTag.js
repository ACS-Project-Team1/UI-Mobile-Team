import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

const StatusTag = ({ text, type ,icon}) => {
  let backgroundColor, textColor;

  // Determine background color and text color based on type
  switch (type) {
    case 'success':
      backgroundColor = '#DAFFE0'; // Light green
      textColor = '#008000'; // Dark green
      break;
    case 'danger':
      backgroundColor = '#FFE5E5'; // Light red
      textColor = '#8B0000'; // Dark red
      break;
    case 'yellow':
      backgroundColor = '#FFFF00'; // Light yellow
      textColor = '#FFD700'; // Dark yellow
      break;
    default:
      backgroundColor = '#D3D3D3'; // Light gray as default
      textColor = '#000000'; // Black as default
  }

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
