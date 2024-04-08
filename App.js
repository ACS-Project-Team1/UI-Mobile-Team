import React from 'react';

// React navigation stack
import RootStack from './navigators/RootStack';

//importing Montserrat Font
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import { Text, View } from 'react-native';
import { AuthProvider } from './context/AuthProvider';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });

  if(!fontsLoaded){
    return <View><Text>Waiting for fonts to load.</Text></View>;
  }
  return (
    <AuthProvider>
      <RootStack/>
    </AuthProvider>
 
  );
}