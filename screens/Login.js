import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';

// formik
import { Formik } from "formik";

// icons
import { Octicons, Ionicons } from "@expo/vector-icons"

import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea, LeftIcon, StyledInputLabel, StyledTextInput, RightIcon, StyledButton, ButtonText, Colors, MsgBox, ExtraView, ExtraText, TextLink, TextLinkContent } from "../components/styles";
import { View } from "react-native";

// colors
const { primary, darkLight } = Colors


const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
            <SubTitle>LOGIN</SubTitle>
                <PageLogo resizeMode="cover" source={require('./../assets/images/signin.png')} />
                <Formik initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => <StyledFormArea>
                        <MyTextInput
                            label="Email Address"
                            icon="mail"
                            placeholder="anna@gmail.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleChange('email')}
                            value={values.email}
                            keyboardType="email-address"

                        />

                        <MyTextInput
                            label="Password"
                            icon="lock"
                            placeholder="* * * * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleChange('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Login
                            </ButtonText>
                        </StyledButton>
                        <ExtraView>
                            <ExtraText>Don't have an account?</ExtraText>
                            <TextLink onPress={() => navigation.navigate("Signup")}>
                                <TextLinkContent>Signup</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={primary} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off-outline' : 'eye-outline'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )

}

export default Login;