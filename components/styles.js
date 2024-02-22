import styled from "styled-components/native";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.StatusBarHeight;

const Montserrat_Thin =  'Montserrat_100Thin';
const Montserrat_ExtraLight = 'Montserrat_200ExtraLight';
const Montserrat_Light =    'Montserrat_300Light';
const Montserrat_Regular =    'Montserrat_400Regular';
const Montserrat_Medium =    'Montserrat_500Medium';
const Montserrat_SemiBold  =  'Montserrat_600SemiBold';
const Montserrat_Bold   = 'Montserrat_700Bold';
const Montserrat_ExtraBold   = 'Montserrat_800ExtraBold';
const Montserrat_Black  =  'Montserrat_900Black';

//colors
export const Colors = {
    primary: "#008EB0",
    secondary: "#D1EAFB",
    tertiary: " #000000",
    darkLight: "#75736d"
};

const { primary, secondary, tertiary, darkLight } = Colors;

export const StyledContainer = styled.View`
flex : 1;
padding : 25px;
padding-top: 90px;
margin-bottom:0px;
`

export const InnerContainer = styled.View`
    flex:1;
    width:100%;
    height:100%;
    align-items:center;
    background-color:white;
`;

export const WelcomeContainer = styled(InnerContainer)`
    justify-content : center;
    background-color: ${primary};
    border-radius : 0 0 50px 50px;
`;

export const PageLogo = styled.Image`
margin-top: 20px;
margin-bottom: 30px;
`;

export const WelcomeLogo = styled.Image`
 margin:5%;
 flex: 1;
 width:80%;
 height:80%;
`;

export const Avatar = styled.Image`
    width : 100px;
    height: 100px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${primary};
    margin-bottom : 10px;
    margin-top:10px;
`;

export const WelcomeImage = styled.Image`
    height: 50%;
    min-width : 100%;
`;

export const PageTitle = styled.Text`
    font-family:${Montserrat_Bold};
    font-size:30px;
    text-align: center;
    font-weight : bold;
    color : ${primary};
    padding:10px;
    padding-top:40%;

    ${(props) => props.welcome && `
  font-size: 27px;
  color : #ffff
    
    `}
`;

export const SubTitle = styled.Text`
    font-family:${Montserrat_Bold};
    font-size:25px;
    margin-bottom : 20px;
    letter-spacing : 1px;
    font-weight : bold;
    color :${tertiary}

    ${(props) => props.welcome && `
    margin-bottom : 5px;
    font-weight: normal;
    
    `}

`;

export const StyledFormArea = styled.View`
    width : 95%
`;

export const StyledTextBox = styled.View`
background-color:${secondary};
display: flex;
flex-direction: row;
align-items: center;
border-radius:50%;
height:70px;
justify-content:space-between;
margin-bottom:5%;
`;

export const IconAndInput = styled.View`
 display: flex;
flex-direction: row;
align-items: center;
  
`;

export const StyledTextInput = styled.TextInput`
    width:67%;
    font-size:18px;
`;

export const StyledInputLabel = styled.Text`
color : ${tertiary};
font-size: 13px;
text-align : left;
font-family:${Montserrat_Regular};
`;

export const LeftIcon = styled.View`
    padding-left:10%;
    padding-right:5%;
`;

export const RightIcon = styled.TouchableOpacity`
    margin-right:10%;
    margin-left:0;

`;

export const StyledButton = styled.TouchableOpacity`
    padding:15px;
    background-color:${primary};
    justify-content:center;
    align-items : center;
    border-radius : 50px;
    margin-vertical : 5px;
    height: 60px;
    margin-top: 15px;
    margin-bottom : 15px;
`;

export const StyledButtonSecondary = styled(StyledButton)`
    background-color: ${secondary};
    width: 70%;
`;

export const StyledButtonHome = styled(StyledButton)`
    width : 70%;
`;

export const ButtonText = styled.Text`
    font-family:${Montserrat_SemiBold};
    color : #ffff;
    font-size: 20px;
    font-weight : 600;
`;

export const ButtonTextSecondary = styled(ButtonText)`
    color : ${primary}

`;

export const MsgBox = styled.Text`
    text-align : center;
    font-size : 13px;
`;

export const ExtraView = styled.View`
    justify-content : center;
    flex-direction : row;
    align-items : center;
    padding: 10px;
    margin-top:10px;
`;

export const ExtraText = styled.Text`
    justify-content : center;
    align-items: center;
    color : ${tertiary};
    font-size : 16px;
    font-family:${Montserrat_Regular};
`;

export const TextLink = styled.TouchableOpacity`
    justify-content : center;
    align-items : center;
    margin-left: 5px;
`;

export const TextLinkContent = styled.Text`
    color : ${primary};
    font-size: 16px;
    text-decoration: underline;
    font-weight:600;
`;

export const ButtonContainer = styled.View`
    width : 100%;
    display: flex;
    align-items : center;
    justify-content : center;
    margin-top: 20px;
    margin-bottom : 90px;
`;

