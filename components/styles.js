import styled from "styled-components";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import Constants  from "expo-constants";

const StatusBarHeight = Constants.StatusBarHeight;

//colors
export const Colors = {
    primary:"#008EB0",
    secondary:"#D1EAFB",
    tertiary:" #000000",
    darkLight:"#75736d"
};

const {primary, secondary, tertiary, darkLight} = Colors;

export const StyledContainer = styled.View`
flex : 1;
padding : 25px;
padding-top: 90px;

`

export const InnerContainer = styled.View`
    flex:1;
    width:100%;
    align-items:center;
`;

export const PageLogo = styled.Image`
 margin-top: 20px;
 margin-bottom: 30px;
 margin-right:25px;
`;

export const PageTitle = styled.Text`
    font-size:30px;
    text-align: center;
    font-weight : bold;
    color : ${primary};
    padding:10px;
`;

export const SubTitle = styled.Text`
    font-size:18px;
    margin-bottom : 20px;
    letter-spacing : 1px;
    font-weight : bold;
    color :${tertiary}

`;

export const StyledFormArea = styled.View`
    width : 90%
`;

export const StyledTextInput = styled.TextInput`

background-color : ${secondary};
padding : 15px;
padding-left: 55px;
border-radius : 50px;
font-size: 16px;
height:60px;
margin-vertical : 3px;
margin-bottom : 10px;
color : ${darkLight}

`;

export const StyledInputLabel = styled.Text`
color : ${tertiary};
font-size: 13px;
text-align : left;

`;

export const LeftIcon = styled.View`
    left : 15px;
    top:35px;
    position: absolute;
    z-index:1;
`;

export const RightIcon = styled.TouchableOpacity`
    right : 15px;
    top:35px;
    position: absolute;
    z-index:1;
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

export const ButtonText = styled.Text`
    color : #ffff;
    font-size: 16px;
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


