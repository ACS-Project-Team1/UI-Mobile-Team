import { Ionicons } from "@expo/vector-icons"
import { Colors, IconAndInput, LeftIcon, RightIcon, StyledInputLabel, StyledTextBox, StyledTextInput } from "./styles"

const { primary } = Colors

export const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextBox>
            <IconAndInput>
                <LeftIcon>
                    <Ionicons name={icon} size={20} color={primary} />
                </LeftIcon>
                <StyledTextInput {...props} />
            </IconAndInput>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={20} color={primary} />
                </RightIcon>
            )}
        </StyledTextBox>
        </>
    )
}
