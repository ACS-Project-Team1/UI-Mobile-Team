import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from "@expo/vector-icons"

import Leagues from '../screens/afterLogin/Leagues';
import Scorecard from '../screens/afterLogin/leagues/Scorecard';
import LeaderBoard from '../screens/afterLogin/leagues/LeaderBoard';
import Course from '../screens/afterLogin/leagues/Course';
import LeagueNavBar from '../components/LeagueNavBar';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native';


const Stack = createNativeStackNavigator()

const LeagueTitle = ({league_data}) => {
    return(
        <View style={stylesheet.titleContainer}>
            <View style={stylesheet.inline}>
                <Text style={stylesheet.title}>{league_data.heading}</Text>
                <View style={stylesheet.inline}>
                    <Ionicons name='calendar' size={20} style={{color:'gray'}}/>
                    <Text style={stylesheet.subtitle}> {league_data.Duration}</Text>
                </View>
            </View>

            <View style={{flexDirection:'row'}}> 
                <Ionicons name='location' size={20} style={{color:'gray'}}/>
                <Text style={stylesheet.subtitle}> {league_data.location}</Text>
            </View>

        </View>
    )
}

function SubLeagueNavigation(){

    const route = useRoute()
    const league_data = route.params

    return(
            
        <>
        <LeagueTitle league_data={league_data} />
        <LeagueNavBar />
        <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
        initialRouteName='scorecard'
        >
            <Stack.Screen name='scorecard' component={Scorecard} />
            <Stack.Screen name='leaderboard' component={LeaderBoard} />
            <Stack.Screen name='course' component={Course} />
        </Stack.Navigator>
        </>
            
    )
}
    
export default function LeagueNavigation(){
    
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
            }}
            initialRouteName="Leaguesmain"
        >
            <Stack.Screen name="Leaguesmain" component={Leagues} />
            <Stack.Screen name="individualLeague" component={SubLeagueNavigation} />
        </Stack.Navigator>
    )
}

const stylesheet = StyleSheet.create({
    titleContainer:{
        paddingHorizontal:'5%',
        paddingVertical:'5%'
    },
    title:{
        fontFamily:'Montserrat_700Bold',
        fontSize:30,
        color:'black'

    },
    subtitle:{
        fontFamily:'Montserrat_700Bold',
        fontSize:15,
        color:'gray',
        alignItems:'center'

    },
    inline:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems:'center'
    }
})