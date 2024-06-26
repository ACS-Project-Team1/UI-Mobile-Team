// CustomHeader.js
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

const CustomHeader = ({ title }) => {
  return (
    <View style={[styles.container,shadowStyle]}>
      <View style={styles.left}>
        <Avatar
          rounded
          source={{
            uri: 'https://img.freepik.com/free-photo/business-woman-posing-street_23-2148213512.jpg?w=2000&t=st=1713571764~exp=1713572364~hmac=184f3fb01492a6cd6d2cb8c93c373e4ff10c049806deef86939276c41f86b9b8',
          }}
          // source={require('../assets/images/userDP.png')} // Replace with the path to your avatar image
          size="medium" // Adjust the size of the avatar
        />
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.right}>
        <Icon
          name="sort" // Replace with the name of your settings icon
          color="#000" // Adjust the color of the settings icon
          size={40} // Adjust the size of the settings icon
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30, // Adjust horizontal padding as needed
    paddingVertical: 10, // Adjust vertical padding as needed
    paddingTop:50,
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  center: {
    flex: 2,
    alignItems: 'left',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 25, // Adjust font size as needed
    fontWeight: 'bold', // Adjust font weight as needed
    color: '#000', // Adjust text color as needed
    fontFamily:'Montserrat_700Bold'
  },
});

// Define shadow style based on platform
const shadowStyle =
  Platform.OS === 'ios'
    ? {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      }
    : { elevation: 4 };

export default CustomHeader;