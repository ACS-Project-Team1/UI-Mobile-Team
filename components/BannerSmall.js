import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusTag from "./StatusTag";
import { formatDate } from "../utils/utils";

export default function BannerSmall({ banner_data }) {
  const navigation = useNavigation();
  const coverImage =
    "https://media.istockphoto.com/id/1347268401/photo/golf-ball-and-golf-club-in-beautiful-golf-course-at-sunset-background.jpg?s=2048x2048&w=is&k=20&c=D_hwAVO0W20XODTnxfgmFs3CKfAEVZYtFYsF2qibS1Q=";

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("individualLeague", banner_data)}
      style={[styles.card, styles.inline, styles.shadowProp]}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: coverImage }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{banner_data.leagueName}</Text>
          <Text style={styles.subtitle}>{banner_data.location}</Text>
        </View>
        <View style={styles.durationBlock}>
          <Text style={styles.duration}>
            {formatDate(banner_data.leagueStartDate)} -{" "}
            {formatDate(banner_data.leagueEndDate)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginVertical: "3%",
    marginHorizontal: "0%",
    height: 90,
    flex: 1,
    borderColor: "#B1B2B9",
    borderRadius: "10%",
    padding: "2%",
    paddingHorizontal: "4%",
    flexDirection: "row",
    alignItems: "center",
  },
  inline: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  imageContainer: {
    width: "20%",
  },
  image: {
    width: "100%",
    height: 70,
    resizeMode: "cover",
    borderRadius: 10,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
  },
  textContainer: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
  },
  durationBlock: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  duration: {
    fontSize: 12,
  },
});
