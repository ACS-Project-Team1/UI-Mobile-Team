import React, { useContext, useState } from "react";
import { StatusBar } from 'expo-status-bar';

// formik
import { Formik } from "formik";

import { StyledContainer, InnerContainer, PageLogo, SubTitle, StyledFormArea, Colors, StyledButton, ButtonText, ExtraView, ExtraText, TextLink, TextLinkContent } from "../components/styles";
import { MyTextInput } from "../components/MyTextInput";

// keyboard avoiding view
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import BaseRequest from "../constants/requests";
import { BASE_URL } from "../constants/constant";
import { AuthContext } from "../context/AuthProvider";


// colors
const { darkLight } = Colors

const Login = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const {login} = useContext(AuthContext);

    const handleLogin = async (values) => {
        try {
            const response = await BaseRequest.post(`${BASE_URL}/users/login`, values);
            setErrorMessage("")
            login(response.data.token)

            navigation.navigate("LoggedIn");
        } catch (error) {
            setErrorMessage("Incorrect email or password!")
        }
    };


    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <SubTitle>LOGIN</SubTitle>
                    <PageLogo resizeMode="cover" source={require('./../assets/images/signin.png')} />
                    <Formik initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => {
                            handleLogin(values)
                        }}>
                        {({ handleChange, handleBlur, handleSubmit, values }) => <StyledFormArea>
                            <SubTitle>{errorMessage}</SubTitle>
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