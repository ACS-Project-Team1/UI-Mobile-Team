import React, { useState, useEffect } from "react";
import { StatusBar, Alert } from 'react-native';
import { View } from "react-native";

// formik
import { Formik } from "formik";

// icons
import { Octicons, Ionicons } from "@expo/vector-icons"
import { StyledContainer, InnerContainer, PageLogo, SubTitle, StyledFormArea, LeftIcon, StyledInputLabel, StyledTextInput, RightIcon, StyledButton, ButtonText, Colors, MsgBox, ExtraView, ExtraText, TextLink, TextLinkContent } from "../components/styles";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import { MyTextInput } from "../components/MyTextInput";

import BaseRequest from "../constants/requests";
import { BASE_URL } from "../constants/constant";

// colors
const { primary, darkLight } = Colors

const Signup = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");
    const initialValues = { firstName: '', lastName: '', email: '', password: '' };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // Reset form values when the component mounts
            setErrorMsg("");
        });

        return unsubscribe;
    }, [navigation]);

    const handleSignup = async (values, formikActions) => {
        try {
            const response = await BaseRequest.post(`${BASE_URL}/users/registerUser`, {...values, username:values.email});
            Alert.alert(
                "Sign Up Successful",
                "You can now login using your credentials.",
                [
                    { text: "OK", onPress: () => {
                        // Clear form values upon successful signup
                        formikActions.resetForm();
                        navigation.navigate("Login");
                    }}
                ]
            );
        } catch (error) {
            setErrorMsg(error.response.data);
        }
    };

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <SubTitle>SIGNUP</SubTitle>
                    <PageLogo resizeMode="cover" source={require('./../assets/images/signup.png')} />
                    <Formik initialValues={initialValues}
                        onSubmit={(values, actions) => {  
                            handleSignup(values, actions);
                        }}>
                        {({ handleChange, handleBlur, handleSubmit, values }) => <StyledFormArea>
                            <SubTitle>{errorMsg}</SubTitle>
                            <MyTextInput
                                label="First Name"
                                icon="person"
                                placeholder="Ann"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                value={values.firstName}
                            />
                            <MyTextInput
                                label="Last Name"
                                icon="person"
                                placeholder="Array"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('lastName')}
                                onBlur={handleBlur('lastName')}
                                value={values.lastName}
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
