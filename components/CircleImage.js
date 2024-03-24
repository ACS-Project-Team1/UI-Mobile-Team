import React from 'react';
import { View, Image, StyleSheet } from 'react-native';



const CircleImage = ({ source, size }) => {
    const styles = StyleSheet.create({
        container: {
            width: size, // Adjust according to your image size
            height: size, // Adjust according to your image size
            borderRadius: size/2, // Half of width and height makes it a circle
            overflow: 'hidden', // This is necessary for the borderRadius to take effect
        },
        image: {
            width: '100%',
            height: '100%',
        },
        });
      
    return (
        <View style={styles.container}>
            <Image source={source} style={styles.image} />
        </View>
    );
};


export default CircleImage;
