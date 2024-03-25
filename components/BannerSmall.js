import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

import StatusTag from "./StatusTag";
import { useNavigation } from "@react-navigation/native";

export default function BannerSmall({banner_data}) {        
    const navigation = useNavigation();                                                        
    return(
        <TouchableOpacity onPress={() => navigation.navigate('individualLeague',banner_data)} style={[styles.card, styles.inline, styles.shadowProp]}>
            <Image source={{ uri: banner_data.CoverImage }} style={styles.image}></Image>

            <View style={styles.titleblock}>
                <Text style={styles.heading}>{banner_data.heading}</Text>
                <Text style={styles.subtitle}>{banner_data.subtitle}</Text>
            </View>

            <View style={styles.durationBlock} >
                <Text style={styles.duration}>{banner_data.Duration}</Text>
                {banner_data.Status=="Playing"?
                    <StatusTag text={"Playing"} type={"success"} icon={"time"} />
                    :<StatusTag text={"Overdue"} type={"danger"} icon={"hourglass"} />}
                
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor:'white',
      marginVertical:"3%",
      marginHorizontal:"0%",
      height:70,
      flex:1,
      borderColor:'#B1B2B9',
      borderRadius:"10%",
      padding:'2%',
      paddingHorizontal:'4%'
    },
    inline:{
        flexDirection:'row', flexWrap:'wrap',
        justifyContent:'space-between',
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
      },
    image:{
    
        marginVertical:"2%",
        width:"20%",
        height:'80%',
    },
    titleblock:{
        justifyContent:'center'
    },
    heading:{
        fontSize:20,
        fontFamily:'Montserrat_700Bold',

    },
    durationBlock:{
        justifyContent:'space-around',
        alignItems:'center'
    },
    duration:{
        fontSize:12
    }
        
  });