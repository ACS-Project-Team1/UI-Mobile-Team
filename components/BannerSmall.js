import { Image, StyleSheet, Text, View } from "react-native";
import StatusTag from "./StatusTag";
import { TouchableOpacity } from "react-native";

export default function BannerSmall({banner_data}) {

    return(
        <TouchableOpacity style={[styles.card, styles.inline]}>
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
      //borderWidth:1,
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
        //borderWidth: 1, // Border width
        //borderColor: 'gray', // Border color
        borderRadius: 8, // Border radius (optional)
        shadowColor: 'black', // Shadow color
        shadowOffset: { width: -2, height: 0}, // Negative value for outer shadow
        shadowOpacity: 0.25, // Shadow opacity
        shadowRadius: 4, // Shadow radius
        elevation: 5, // Android only: elevation controls the drop shadow
        padding: 10, // Padding (optional)
      },
    image:{
    
        marginVertical:"2%",
        width:"20%",
        height:'80%',
        //marginHorizontal:"4%"
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