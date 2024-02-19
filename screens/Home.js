import React from 'react';

import { ButtonText, InnerContainer, StyledButton, StyledContainer, SubTitle } from '../components/styles'
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const Home = ({ navigation }) => {
    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <InnerContainer>
                    <SubTitle>Welcome! </SubTitle>
                    <StyledButton onPress={() => navigation.navigate("Login")}>
                        <ButtonText>
                            Logout
                        </ButtonText>
                    </StyledButton>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    )
}

export default Home;