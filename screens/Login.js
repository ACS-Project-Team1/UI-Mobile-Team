import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";

// formik
import { Formik } from "formik";

import { StyledContainer, InnerContainer, PageLogo, SubTitle, StyledFormArea, Colors, StyledButton, ButtonText, ExtraView, ExtraText, TextLink, TextLinkContent } from "../components/styles";
import { MyTextInput } from "../components/MyTextInput";

// keyboard avoiding view
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

// colors
const { darkLight } = Colors

const Login = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);


    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <SubTitle>LOGIN</SubTitle>
                    <PageLogo resizeMode="cover" source={require('./../assets/images/signin.png')} />
                    <Formik initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => {
                            console.log(values)
                            navigation.navigate("LoggedIn")
                        }}>
                        {({ handleChange, handleBlur, handleSubmit, values }) => <StyledFormArea>
                            <MyTextInput
                                label="Email Address"
                                icon="mail"
                                placeholder="anna@gmail.com"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"

                            />
                            <MyTextInput
                                label="Password"
                                icon="lock-closed"
                                placeholder="•••••••••••••••"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>
                                    LOGIN
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
        </KeyboardAvoidingWrapper>
    );
}

export default Login;