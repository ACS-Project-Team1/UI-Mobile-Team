import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateTeam from "../screens/afterLogin/teams/CreateTeam";
import Teams from "../screens/afterLogin/Teams";

const Stack = createNativeStackNavigator()

export default function TeamsNavigation(){
    return(
        
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
            initialRouteName='teamsList'
        >
        <Stack.Screen name='teamsList' component={Teams} />
        <Stack.Screen name='createTeam' component={CreateTeam} />
            
        </Stack.Navigator> 
            
    )
}
