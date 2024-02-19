import React from 'react'
import { ButtonContainer, ButtonText, ButtonTextSecondary, InnerContainer, PageLogo, PageTitle, StyledButton, StyledButtonHome, StyledButtonSecondary, SubTitle, WelcomeContainer } from '../components/styles'

const Welcome = ({ navigation }) => {
    return (
        <>
            <InnerContainer>
                <WelcomeContainer>
                    <PageTitle welcome={true}>Welcome to Golf Pro</PageTitle>
                    <PageLogo resizeMode="cover" source={require('./../assets/images/home.png')} />
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