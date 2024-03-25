import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Colors } from "./styles";
import { useState } from "react";

export default function LeagueNavBar(){
    const navigation = useNavigation();

    const navigateToScreen = (screenname) => {
        navigation.navigate(screenname)
    }
    
    const [active, setActive] = useState('scorecard');

    const subscreens = ['scorecard', 'leaderboard', 'course']
    return(
        <View style={stylesheet.navbar}>
        {
            subscreens.map((screen, key) => (
                <TouchableOpacity key={key} style={[stylesheet.shadowProp, active==screen?stylesheet.itemActive:stylesheet.navbarItem]} onPress={() => {
                    setActive(screen)
                    navigateToScreen(screen)
                }}>

                <Text style={active==screen?stylesheet.activeText:stylesheet.itemText}>{screen}</Text>
                </TouchableOpacity>
                ))
        }
        {/* Add more TouchableOpacity components for other screens */}
      </View>
    )
}

const stylesheet = StyleSheet.create({
    navbar:{ 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        height: 50
    },
    navbarItem:{ 
        backgroundColor:Colors.white,
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        
    },
    itemText:{
        fontWeight:'bold'
    },
    itemActive:{
        backgroundColor:Colors.primary,
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
    },
    activeText:{
        color:Colors.white,
        fontWeight:'bold'
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
      },

})