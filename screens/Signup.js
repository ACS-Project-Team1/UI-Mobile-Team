import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";

// formik
import { Formik } from "formik";

// icons
import { Octicons, Ionicons } from "@expo/vector-icons"
import { StyledContainer, InnerContainer, PageLogo, SubTitle, StyledFormArea, LeftIcon, StyledInputLabel, StyledTextInput, RightIcon, StyledButton, ButtonText, Colors, MsgBox, ExtraView, ExtraText, TextLink, TextLinkContent } from "../components/styles";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import { MyTextInput } from "../components/MyTextInput";

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
                            navigation.navigate("LoggedIn")
                        }}>
                        {({ handleChange, handleBlur, handleSubmit, values }) => <StyledFormArea>

                            <MyTextInput
                                label="First Name"
                                icon="person"
                                placeholder="Ann"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('fname')}
                                onBlur={handleBlur('fname')}
                                value={values.fname}
                            />
                            <MyTextInput
                                label="Last Name"
                                icon="person"
                                placeholder="Array"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('lname')}
                                onBlur={handleBlur('lname')}
                                value={values.lname}
                            />
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
                                placeholder="* * * * * * * *"
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
                                    SIGNUP
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


export default Signup;