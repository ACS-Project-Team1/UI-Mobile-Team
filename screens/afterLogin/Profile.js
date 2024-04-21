import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Clipboard, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import { MyTextInput } from '../../components/MyTextInput';
import { InnerContainer } from '../../components/styles';
import BaseRequest from '../../constants/requests';
import { AuthContext } from '../../context/AuthProvider';
import { BASE_URL } from '../../constants/constant';

export default function Profile() {

  const [profileDetails, setProfileDetails] = useState({})
  const { userId, tokenUpdated } = useContext(AuthContext)

  const getProfileDetails = async () => {
    try {
      const response = await BaseRequest.getAuthenticated(`${BASE_URL}/users/getUser/${userId}`, tokenUpdated);

      setProfileDetails(response.data)
    } catch (error) {
      setErrorMsg(error.response.data);
    }
  }

  useEffect(() => {

    getProfileDetails()

  }, [])

  // Function to split the userId into two lines based on a character limit
  const splitUserId = (userId) => {
    const maxLength = 15;
    if (userId.length <= maxLength) {
      return userId;
    } else {
      const firstLine = userId.substring(0, maxLength);
      const secondLine = userId.substring(maxLength);
      return `${firstLine}\n${secondLine}`;
    }
  }

  // Function to handle copying the User ID to the clipboard
  const copyUserIdToClipboard = () => {
    Clipboard.setString(profileDetails.userId);
    Alert.alert(
      'User ID Copied',
      'The User ID has been copied to the clipboard',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  }

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
            <Text style={styles.label}>User ID</Text>
            <TouchableOpacity onPress={copyUserIdToClipboard}>
              <Text style={styles.userId}>{splitUserId(profileDetails?.userId)}</Text>
            </TouchableOpacity>
            <Text style={styles.username}>@{profileDetails?.username?.split("@")[0]}</Text>
          </View>
          <TouchableOpacity onPress={copyUserIdToClipboard}>
            <Ionicons name="clipboard-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Card>
      <InnerContainer>
        <View style={styles.detailsContainer}>
          <MyTextInput
            label="First Name"
            placeholder="Ann"
            value={profileDetails?.firstName}
            editable={false}
          />
          <MyTextInput
            label="Last Name"
            placeholder="Array"
            value={profileDetails?.lastName}
            editable={false}
          />
          <MyTextInput
            label="Email Address"
            placeholder="anna@gmail.com"
            value={profileDetails?.email}
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
  userInfoContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  userId: {
    fontSize: 20,
    fontWeight: 'bold',
    maxWidth: '80%', // Limit the width to allow wrapping
    textAlign: 'left', // Align the text to the left
  },
  username: {
    fontSize: 16,
  },
  detailsContainer: {
    paddingTop: 30,
  },
});
