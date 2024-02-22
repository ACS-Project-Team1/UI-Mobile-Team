import React from "react";

// keyboard avoiding view
import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const KeyboardAvoidingWrapper = ({ children }) => {
    return (
        <KeyboardAwareScrollView style={{backgroundColor:'white'}}>
            <KeyboardAvoidingView style={{ flex: 1}}>
                <ScrollView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        {children}
                    </TouchableWithoutFeedback>
                </ScrollView>
            </KeyboardAvoidingView>

        </KeyboardAwareScrollView>

    );
}

export default KeyboardAvoidingWrapper;