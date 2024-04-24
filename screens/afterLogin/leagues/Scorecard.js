import { StyleSheet, Text,View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import CircleImage from "../../../components/CircleImage";
import dp from '../../../assets/images/userDP2.webp';
import { Colors } from "../../../components/styles";
import ScoreCardTable from "../../../components/ScoreCardTable";

export default function Scorecard({route}){

    const legends = ['Eagle', 'Birdie', 'Par', 'Bogey', '2Bogey']
    const { league_data } = route.params;

    // console.log(league_data?.teams[0]?.players)

    return(
        <KeyboardAwareScrollView
        extraScrollHeight={200}
        >
            <View style={stylesheet.maintable}>
                <View style={[stylesheet.tableHeader, stylesheet.inline]}>
                    <CircleImage source={dp} size={50} />
                    <View style={stylesheet.headerText}>
                        <Text style={stylesheet.teamName}>{league_data?.teams[0]?.teamName}</Text>
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
        </KeyboardAwareScrollView>
         
        
    )
}

const stylesheet = StyleSheet.create({
    maintable:{
        flex:1,
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

