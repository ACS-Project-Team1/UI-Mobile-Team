import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

export default function TeamsBanner({banner_data}) {        
                                                        
    return(
        <TouchableOpacity style={[styles.card, styles.inline, styles.shadowProp]}>
            <Image source={{ uri: banner_data.dpUrl }} style={styles.image}></Image>

            <View style={styles.titleblock}>
                <Text style={styles.heading}>{banner_data.teamName}</Text>
                <Text style={[styles.subtitle, {color:'blue',fontWeight:'bold'}]}>Players</Text>
                <Text style={styles.subtitle}>@{banner_data.players[0].firstName}, @{banner_data.players[0].firstName}</Text>
                
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
        justifyContent:'center',
        width:'70%'
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