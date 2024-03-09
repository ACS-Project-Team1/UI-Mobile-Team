import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CustomButton({text,color,bgcolor}){
    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>null}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        //height:20,
        borderColor:'gray',
        backgroundColor:'white',
        padding:"3%",
        borderRadius:"10%",
        marginBottom:"-1%"
    },
    text:{
        justifyContent:'center',
        fontFamily:'Montserrat_700Bold',
        fontSize:18,
        color:'green'
    }
}
)