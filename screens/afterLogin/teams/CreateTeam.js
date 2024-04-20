import { useState } from "react";
import { Button, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import CustomButton from "../../../components/CustomButton";
import { Colors } from "../../../components/styles";
import { useNavigation } from "@react-navigation/native";

export default function CreateTeam(){
    const [teamName, setTeamName] = useState('');
    const [dpUrl, setDpUrl] = useState('');
    const [player1Id, setPlayer1Id] = useState('');
    const [player2Id, setPlayer2Id] = useState('');

    const handleSubmit = () => {
        // Handle form submission here
        console.log("Form submitted");
    };

    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Create Team</Text>
            <Text>Team Name:</Text>
            <TextInput
                style={styles.input}
                value={teamName}
                onChangeText={setTeamName}
            />
            <Text>Dp URL:</Text>
            <TextInput
                style={styles.input}
                value={dpUrl}
                onChangeText={setDpUrl}
            />

            <Text>Player 1 ID:</Text>
            <TextInput
                style={styles.input}
                value={player1Id}
                onChangeText={setPlayer1Id}
            />

            <Text>Player 2 ID:</Text>
            <TextInput
                style={styles.input}
                value={player2Id}
                onChangeText={setPlayer2Id}
            />
            <View style={styles.buttonContainer}>
                <CustomButton text="SUBMIT" color={Colors.theme} onPress={()=>navigation.navigate('teamsList')}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:'7%',
        backgroundColor:'white'
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
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
      
})