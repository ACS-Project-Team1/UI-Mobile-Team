import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';

// formik
import { Formik } from "formik";

// icons
import { Octicons, Ionicons } from "@expo/vector-icons"

import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea, LeftIcon, StyledInputLabel, StyledTextInput, RightIcon, StyledButton, ButtonText, Colors, MsgBox, ExtraView, ExtraText, TextLink, TextLinkContent } from "../components/styles";
import { View } from "react-native";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

// colors
const { primary, darkLight } = Colors


const Signup = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <SubTitle>SIGNUP</SubTitle>
                    <PageLogo resizeMode="cover" source={require('./../assets/images/signup.png')} />
                    <Formik initialValues={{ fname: '', lname: '', email: '', password: '' }}
                        onSubmit={(values) => {
                            console.log(values)
                            navigation.navigate("Home")
                        }}>
                        {({ handleChange, handleBlur, handleSubmit, values }) => <StyledFormArea>

                            <MyTextInput
                                label="First Name"
                                icon="person"
                                placeholder="Ann"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('fname')}
                                onBlur={handleChange('fname')}
                                value={values.fname}
                            />
                            <MyTextInput
                                label="Last Name"
                                icon="person"
                                placeholder="Array"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('lname')}
                                onBlur={handleChange('lname')}
                                value={values.lname}
                            />
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
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>
                                    Signup
                                </ButtonText>
                            </StyledButton>
                            <ExtraView>
                                <ExtraText>Already have an account?</ExtraText>
                                <TextLink onPress={() => navigation.navigate("Login")}>
                                    <TextLinkContent>Login</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
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

export default Signup;