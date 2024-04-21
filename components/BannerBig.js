import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";

import CustomButton from "./CustomButton";
import { Colors } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { formatDate } from "../utils/utils";

export default function BannerBig({banner_data}) {
    
    const cover_image = "https://golf.com/wp-content/uploads/2023/11/driver.jpg?width=1280"
    const navigation = useNavigation()
    
    return(
        <View style={styles.card}>
            <ImageBackground style={styles.image} resizeMode="cover" source={ { uri: cover_image}}>
            <Text style={styles.heading}>{banner_data.leagueName}</Text>
            <View style={styles.inline}>
                <Text style={styles.caption}>{formatDate(banner_data.leagueStartDate)} - {formatDate(banner_data.leagueEndDate)}</Text>
                <CustomButton text={"Register"} color={Colors.register} onPress={()=>navigation.navigate('registerLeague',banner_data)} />
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