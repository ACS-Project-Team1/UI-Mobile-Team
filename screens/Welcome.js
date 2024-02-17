import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleSignUpPress = () => {
    // Navigate to the Signup screen or perform any other action
    console.log('Sign Up button pressed!');
  };

  const handleLoginPress = () => {
    // Navigate to the Login screen or perform any other action
    console.log('Login button pressed!');
  };

  return (
    <View style={styles.container}>
      <Image
        // source={require('./path-to-your-image.jpg')}
        source={{ uri: 'https://media.istockphoto.com/id/1318713736/photo/golf-player-making-a-successful-stroke-links-golf.webp?s=1024x1024&w=is&k=20&c=vwBekyWXuEQHUC41bgYojH7t3rH0K8vjOeCbzPHem18='}}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={handleSignUpPress} />
        <Button title="Login" onPress={handleLoginPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%', // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'contain',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default WelcomeScreen;
