import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonText, StyledButton } from '../../components/styles';

export default function Profile({navigation}){
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <StyledButton onPress={() => navigation.navigate("Login")}>
        <ButtonText>
            Logout
        </ButtonText>
      </StyledButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

