import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { WIDTH } from '../Helpers/Dimensions';
import { COLORS } from '../assets/Theme';

const Button = (props) => {
    return (
        <TouchableOpacity
            disabled={props.disabled}
            onPress={props.Action}
            style={[styles.ButtonStyle, props.styles]}>
            <Text style={styles.buttonText}>{props.Label}</Text>
        </TouchableOpacity>
    );
};

export default Button;
const styles = StyleSheet.create({

    buttonText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',

    },
    ButtonStyle: {
        // width: '100%',
        width:WIDTH*0.9,
        alignSelf: 'center',
        paddingVertical: '4.5%',
        marginTop: '15%',
        borderRadius: 8,
        backgroundColor: COLORS.YELLOWPRIME
    },
});