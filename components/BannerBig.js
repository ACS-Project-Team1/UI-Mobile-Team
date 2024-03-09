import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import CustomButton from "./CustomButton";

export default function BannerBig() {
    //Dummy data
    const card_data = {
        "heading": "Week 12",
        "Duration":"Jan 15 - Jan 23",
        "Link to Register":"link",
        "CoverImage":"link"
    }

    return(
        <View style={styles.card}>
            <ImageBackground style={styles.image} resizeMode="cover" source={require("../assets/images/Leagues_cover.png")}>
            <Text style={styles.heading}>{card_data.heading}</Text>
            <View style={styles.inline}>
                <Text style={styles.caption}>{card_data.Duration}</Text>
                <CustomButton text={"Register"} />
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      marginVertical:"5%",
      marginHorizontal:"1%",
      height:150,
      flex:1,
      borderRadius:"20%",
      overflow:"hidden",
    },
    image:{
        flex:1,
        //justifyContent:'center'
    },
    heading: {
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily:'Montserrat_700Bold',
      color:'white',
      marginHorizontal:'5%',
      marginTop:'5%'

    },
    caption: {
        fontSize: 20,
        color:'white',
        fontWeight: 'bold',
        fontFamily:'Montserrat_700Bold',
        
    },
    inline:{
        marginHorizontal:'5%',
        marginBottom:'2%',
        marginTop:'auto',
        flexDirection:'row', flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center'
    }
  });