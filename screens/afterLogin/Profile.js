import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';

import { MyTextInput } from '../../components/MyTextInput';
import { InnerContainer } from '../../components/styles';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-photo/business-woman-posing-street_23-2148213512.jpg?w=2000&t=st=1713571764~exp=1713572364~hmac=184f3fb01492a6cd6d2cb8c93c373e4ff10c049806deef86939276c41f86b9b8',
              }}
              style={styles.avatar}
            />
          </View>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userId}>Player ID #123</Text>
            <Text style={styles.username}>@annArray</Text>
          </View>
        </View>
      </Card>
      <InnerContainer>
        <View style={styles.detailsContainer}>
          <MyTextInput
            label="First Name"
            placeholder="Ann"
            value="Ann"
            editable={false}
          />
          <MyTextInput
            label="Last Name"
            placeholder="Array"
            value="Array"
            editable={false}
          />
          <MyTextInput
            label="Email Address"
            placeholder="anna@gmail.com"
            value="anishapant@gmail.com"
            keyboardType="email-address"
            editable={false}
          />
        </View>
      </InnerContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: 20,
    borderRadius: 50,
    overflow: 'hidden',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  detailsContainer: {
    paddingTop: 30,
  },
  userId: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
  },
});