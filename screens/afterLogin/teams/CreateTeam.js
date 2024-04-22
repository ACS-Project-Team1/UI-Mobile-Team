import { useContext, useState } from "react";
import { Button, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import CustomButton from "../../../components/CustomButton";
import { Colors } from "../../../components/styles";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../context/AuthProvider";
import BaseRequest from "../../../constants/requests";
import { BASE_URL } from "../../../constants/constant";

export default function CreateTeam(){
    const [teamName, setTeamName] = useState('');
    const [dpUrl, setDpUrl] = useState('');
    const [player2Id, setPlayer2Id] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const {userId} = useContext(AuthContext)

    const handleSubmit = async () => {
        // Handle form submission here
        if (!teamName || !dpUrl || !userId || !player2Id) {
            setErrorMessage("All fields are required");
            return; // Stop execution if any field is empty
        }
        setErrorMessage('')
        console.log("Form submitted");
        const req_data = {
            "teamName":teamName,
            "dpUrl":dpUrl,
            "players":[userId, player2Id]
        }

        const response = await BaseRequest.post(`${BASE_URL}/teams/createTeam`,req_data)
        console.log(response.status)
        if(response.status===201){
            navigation.navigate('teamsList')
        }
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
                value={userId}
                editable={false}
            />

            <Text>Player 2 ID:</Text>
            <TextInput
                style={styles.input}
                value={player2Id}
                onChangeText={setPlayer2Id}
            />
            {errorMessage!=='' && <Text style={{color:'red'}}></Text>}
            <View style={styles.buttonContainer}>
                <CustomButton text="SUBMIT" color={Colors.theme} onPress={handleSubmit}/>
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