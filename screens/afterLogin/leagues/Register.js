import { useState } from "react";
import { Button, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import CustomButton from "../../../components/CustomButton";
import { Colors } from "../../../components/styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons"
import Teams from '../../../dummy_data/Teams_Data.json'
import RNPickerSelect from "react-native-picker-select";


export default function RegisterLeague(){

    const [teamName, setTeamName] = useState("");
    
    const handleSubmit = () => {
        // Handle form submission here
        console.log("Form submitted");
    };

    const teamItems = Teams.map((team,index) => ({
        key: index.toString(),
        label: team.teamName,
        value: JSON.stringify(team),
      }));

    const navigation = useNavigation()
    const route = useRoute()
    const league_data = route.params

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Register</Text>

            <View style={[styles.card, styles.shadowProp]}>
                <View style={styles.inline}>
                    <Text style={styles.heading}>{league_data.heading}</Text>
                    <Text style={styles.subheading}><Ionicons name={"calendar"} size={20} />{league_data.Duration}</Text>

                </View>
                <Text style={styles.subheading}>{league_data.location}</Text>
                

                
                    <RNPickerSelect
                    
                        value={teamName}
                        onValueChange={(value) => setTeamName(value)}
                        items={teamItems}
                        style={pickerSelectStyles}
                        placeholder={{label:'Select a Team', value:''}}
                    />
                    
            
            </View>
            
            <View style={styles.buttonContainer}>
                <CustomButton text="SUBMIT" color={Colors.theme} onPress={()=>navigation.navigate('Leaguesmain')}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:'7%',
        backgroundColor:'white'
    },
    card: {
        backgroundColor:'white',
        marginVertical:"3%",
        marginHorizontal:"0%",
        borderColor:'#B1B2B9',
        borderRadius:"10%",
        padding:'2%',
        paddingHorizontal:'4%',
        height:180
      },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
      },
      subheading: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'gray'
      },
      input: {
        height: 50,
        borderRadius:'10px',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor:Colors.secondary,
        borderColor:Colors.secondary
      },
      buttonContainer:{
        alignItems:'center',
        
      },
      shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
      },
      inline:{
        flexDirection:'row', flexWrap:'wrap',
        justifyContent:'space-between',
    },
    picker: {
        height: 40,
        marginBottom: 10,
      },
      
})

const pickerSelectStyles = {
    inputIOS: {
      
      fontSize: 25,borderColor:'#B1B2B9',borderWidth:'1px',marginVertical:'5%', padding:'5%',borderRadius:'10px'
      // Add or override iOS styles here
    },
    inputAndroid: {
      ...RNPickerSelect.defaultProps.inputAndroid,
      // Add or override Android styles here
    },
    placeholder: {
      ...RNPickerSelect.defaultProps.placeholder,
      color: 'gray', // Placeholder color
      fontSize: 25, // Placeholder font size
    },
    value: {
        ...RNPickerSelect.defaultProps.value,
        color: 'black', // Placeholder color
        fontSize: 25, // Placeholder font size
      },
  };