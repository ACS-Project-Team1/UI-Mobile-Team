import { StyleSheet, Text,View } from "react-native";
import CircleImage from "../../../components/CircleImage";
import dp from '../../../assets/images/userDP2.webp';
import { Colors } from "../../../components/styles";
import TableMain from "../../../components/ScoreCardTable";
import ScoreCardTable from "../../../components/ScoreCardTable";
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";

export default function Scorecard(){

    const legends = ['Eagle', 'Birdie', 'Par', 'Bogey', '2Bogey']

    return(
        <KeyboardAvoidingWrapper>
        <View style={stylesheet.maintable}>
            <View style={[stylesheet.tableHeader, stylesheet.inline]}>
                <CircleImage source={dp} size={50} />
                <View style={stylesheet.headerText}>
                    <Text style={stylesheet.teamName}>Team Name</Text>
                    <Text style={stylesheet.subtitle}>Subtitle</Text>
                </View>
            </View>

            <View style={[stylesheet.legend, stylesheet.inline]}>
                    {
                        legends.map((legend, key)=>(
                            <Text key={key}> <Text style={{color:Colors.legends[legend]}}>●</Text> {legend}   </Text>
                        ))
                    }
            </View>

            <ScoreCardTable />
        </View>
        </KeyboardAvoidingWrapper>  
        
    )
}

const stylesheet = StyleSheet.create({
    maintable:{
        borderWidth:1,
        borderColor:'gray',
        marginHorizontal:'5%',
        marginVertical:'10%',
        borderRadius:5,
        backgroundColor:'white',
    },
    tableHeader:{
        padding:'3%',
    },
    inline:{
        flexDirection:'row'
    },
    headerText:{
        paddingLeft:'4%'
    },
    teamName:{
        fontFamily:'Montserrat_700Bold',
        fontSize:25
    },
    subtitle:{
        fontFamily:'Montserrat_700Bold',
        fontSize:20,
        color:'gray'
    },
    legend:{
        padding:'1%'
    }
})

