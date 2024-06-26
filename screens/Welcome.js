import React from 'react'
import { ButtonContainer, ButtonText, ButtonTextSecondary, InnerContainer,  PageTitle, StyledButtonHome, StyledButtonSecondary,  WelcomeContainer, WelcomeLogo } from '../components/styles'

const Welcome = ({ navigation }) => {
    return (
        <>
            <InnerContainer>
                <WelcomeContainer>
                    <PageTitle welcome={true}>WELCOME TO GOLF PRO</PageTitle>
                    <WelcomeLogo resizeMode="cover" source={require('./../assets/images/home.png')} />
                </WelcomeContainer>
                <ButtonContainer>
                    <StyledButtonHome onPress={() => navigation.navigate("Login")}>
                        <ButtonText>LOGIN</ButtonText>
                    </StyledButtonHome>
                    <StyledButtonSecondary onPress={() => navigation.navigate("Signup")}>
                        <ButtonTextSecondary>SIGNUP</ButtonTextSecondary>
                    </StyledButtonSecondary>
                </ButtonContainer>
            </InnerContainer>
        </>
    )
}

export default Welcome;
