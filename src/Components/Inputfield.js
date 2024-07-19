import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,   
} from 'react-native';
import React from 'react';
import { COLORS, VECTOR_ICONS } from '../assets/Theme';
import { WIDTH } from '../Helpers/Dimensions';






const Inputfield = (props) => {

    const { ContainerStyle } = styles;

    return (
        <View style={[ContainerStyle, props.ContainerStyle]}>


            <View
                style={
                    props.Replace
                        ? styles.Replace

                        : [styles.InputFieldStyle, props.InputFieldStyle]
                }>

                {/* 
                {
                    props.PhoneField &&
  
  
                    <View style={{ width: '20%', backgroundColor: 'white', flexDirection: 'row', height: 50, alignItems: 'center', borderRadius: 10, }} >
  
  
                        <Country setCountrycode={setCountrycode} style={{ backgroundColor: "red" }} />
  
  
                    </View>
                } */}
                {/* {
                    props.PhoneField &&
  
                    <View
                        style={{
                            height: 30,
                            borderWidth: 1,
                            borderColor: 'rgba(255, 255, 255, 0.15)',
                            marginTop: '1%',
                            marginRight: '2%',
                            backgroundColor: 'red'
  
                        }}
                    />
  
                } */}
                <TextInput
                    editable={props.edit}
                    placeholder={props.placeholder}
                    placeholderTextColor={COLORS.PLACEHOLDERCOLOR}
                    autoCapitalize='none'
                    style={[
                        styles.PlaceholderStyle,
                        styles.InputFieldStyle,
                        {
                            width: props.PasswordField || props.CorrectEmailTrue ? '90%' : '98%',
                            backgroundColor: '#bdab7b',
                            paddingVertical: "4.2%",
                            paddingLeft: '3.2%'
                        },
                    ]}
                    {...props}
                    selectionColor={COLORS.INPUTLABELDARKGRAY}
                    secureTextEntry={props.ShowPassword ? true : false}
                    maxLength={props?.MaxLength}
                />
                {props.CorrectEmailTrue && (
                    <View style={{ marginRight: -8 }}>
                        {/* <ForgotCheckIcon/> */}
                        <VECTOR_ICONS.Fontisto name={"email"} color='black' size={24} />

                    </View>
                )}
                {props.PasswordField ? (
                    <TouchableOpacity
                        style={[props.passwordIconStyle]}
                        onPress={props.PasswordPress}>
                        < VECTOR_ICONS.Ionicons
                            name={props.ShowPassword ? 'eye-off-outline' : 'eye'}
                            color={COLORS.BLACK}
                            size={24}
                        />
                    </TouchableOpacity>
                ) : props.SearchField ? (
                    <TouchableOpacity
                        style={[props.passwordIconStyle]}
                        onPress={props.PasswordPress}>
                        < VECTOR_ICONS.Entypo name={'cross'} color={COLORS.ERRORCOLORRED} size={20} />
                    </TouchableOpacity>
                ) : null}
            </View>
            {props.Error && props.ShowError && (
                <Text style={[styles.Errorstyle, props.Errorstyle]}>{props.Error}</Text>
            )}
        </View>
    );
};

export default Inputfield;

const styles = StyleSheet.create({
    ContainerStyle: {
        alignSelf: 'center',
        width: WIDTH * 0.9,
        marginVertical: '1.5%',
       

    },
    LabelStyle: {
        fontSize: 14,
        color: "gray",
        fontWeight: '400',
    },
    PlaceholderStyle: {
        color: 'black',
        fontSize: 15,

    },
    InputFieldStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: WIDTH * 0.9,
        borderRadius: 8,
        
        backgroundColor: '#bdab7b',
        paddingHorizontal: 8,
        fontSize: 15,
        color: 'black'


    },
    Errorstyle: {
        color: COLORS.ERRORCOLORRED,
        fontSize: 13,

        marginTop: 2,
        fontWeight: '400',
        paddingLeft: 7,
    },
    Replacemovember: {
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth:1,
        paddingHorizontal: '4%',
        paddingVertical: '2%',
        marginVertical: '-3%',
    },


});
