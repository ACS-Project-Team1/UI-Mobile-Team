import { StyleSheet } from "react-native";

export const bottomNavStyles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#008EB0',
        height:90,
        paddingBottom:40,
        paddingTop:0
      },
      label:{
        color:'white',
        fontSize:15,
        fontFamily:'Montserrat_600SemiBold'
      },
      label_active:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
      },
      navbar_button:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:5,
        
      },
      navbar_button_active:{
        borderTopWidth: 3,
        borderTopColor: 'white',
        
      }
  });
