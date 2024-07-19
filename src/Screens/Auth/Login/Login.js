import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../../Components/Button';
import { COLORS, VECTOR_ICONS } from '../../../assets/Theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { HEIGHT, WIDTH } from '../../../Helpers/Dimensions';
import Inputfield from '../../../Components/Inputfield';
import { ValidateEmail, ValidatePassword } from '../../../Components/Validation/ValidationConfig';

const Login = (props) => {
    const [Email, setEmail] = useState('');
    const [EmailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passError, setPasserror] = useState('')
    const [show, setshow] = useState(true)
    const [ShowError, setShowError] = useState({
        emailError: false,
        passError: false,

    });

    const Setemty = () => {
        setEmail('')
        setPassword('')
        setShowError(() => ({
            emailError: false,
            passError: false,
        }));
    }
    const LoginButtonClicked = () => {


        let emailErr = ValidateEmail(Email);
        let passErr = ValidatePassword(password);
        if (emailErr == '' && passErr == '') {
            props.navigation.navigate('Details')
        } else {
            setEmailError(emailErr);
            setPasserror(passErr);
            setShowError({
                emailError: true,
                passError: true,
            });
        }
    };

    return (
        <KeyboardAwareScrollView
            style={{ flex: 1, alignSelf: 'center', backgroundColor: COLORS.WHITE1, }}
            showsVerticalScrollIndicator={false}>

            <View style={styles.mainview}>
                <Text style={styles.name}>Welcome to eHealthSystem</Text>
                <Text style={[styles.emailname, { marginTop: '5%' }]}>Email ID</Text>
                <Inputfield
                    placeholder={'Enter your email'}
                    MaxLength={256}
                    value={Email}
                    onBlur={() => {
                        if (Email != '' || Email != undefined) {
                            setShowError(prevState => ({
                                ...prevState,
                                emailError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        if (Email != '' || Email != undefined) {
                            setEmail(text);
                            setEmailError(ValidateEmail(text));
                        }
                    }}
                    ShowError={ShowError.emailError}
                    Error={EmailError}

                />

                <Text style={styles.emailname}>Password</Text>
                <Inputfield
                    placeholder={'Enter your password'}
                    MaxLength={16}
                    PasswordField={true}
                    value={password}
                    ShowPassword={show}
                    PasswordPress={() => setshow(!show)}
                    onBlur={() => {
                        if (password != '' || password != undefined) {
                            setShowError(prevState => ({
                                ...prevState,
                                passError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        if (password != '' || password != undefined) {
                            setPassword(text);
                            setPasserror(ValidatePassword(text));
                        }
                    }}
                    ShowError={ShowError.passError}
                    Error={passError}
                />

                <Button
                    Label={'Login'}
                    Action={LoginButtonClicked} />


                <View style={styles.loginStyle}>
                    <Text style={styles.acccountStyle}>Dont's have account?</Text>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('Register'), Setemty() }}>
                        <Text style={styles.registerStyle}> Register now</Text></TouchableOpacity>
                </View>


            </View>





        </KeyboardAwareScrollView>
    );
};

export default Login;
const styles = StyleSheet.create({
    name: {
        color: COLORS.YELLOWPRIME,
        fontSize: 25,
        alignSelf: 'center',
        marginVertical: '4%',
        marginTop: HEIGHT * 0.15
    },
    emailname: {
        color: COLORS.YELLOWPRIME,
        fontSize: 14,
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginVertical: '1%'
    },
    mainview: {
        alignSelf: 'center',
        // width: '90%',
        marginHorizontal: '4%'
    },
    input: {
        paddingVertical: '0.5%',

        borderColor: 'gray',
        flexDirection: 'row',
        borderWidth: 1,
        width: WIDTH * 0.9,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.WHITE1,
        paddingHorizontal: 8,
        borderRadius: 7

    },
    textinputStyle: {
        color: COLORS.BLACK,
        width: '85%',

    },
    textinputStyle1: {
        color: COLORS.BLACK,
        width: '65%',

    },
    iconstyle: {
        marginLeft: '1.5%'

    },
    registerStyle: {
        color: COLORS.YELLOWPRIME,
        fontSize: 15,

    },
    acccountStyle: {
        color: COLORS.YELLOWPRIME,
        fontSize: 14,

    },
    loginStyle: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: HEIGHT * 0.09,

    }


})
