import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { ValidateConfirmPassword, ValidateEmail, ValidateFullname, ValidatePassword } from '../../Components/Validation/ValidationConfig';
import { COLORS } from '../../assets/Theme';
import { WIDTH } from '../../Helpers/Dimensions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../../Components/Button';
import Inputfield from '../../Components/Inputfield';

const Register = (props) => {

  const [fullname, setFullName] = useState('');
  const [fullNmError, setFullNameError] = useState('');
  const [Email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passError, setPasserror] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [ConfpassError, setConfirmPasserror] = useState('')
  const [show, setshow] = useState(true)
  const [ShowPassword, setShowPassword] = useState(true);
  const [ShowError, setShowError] = useState({
    emailError: false,
    fullNmError: false,
    passError: false,
    ConfpassError: false,
   
  });
 

  const register = () => {
    let nameError = ValidateFullname(fullname);
    let emailErr = ValidateEmail(Email);
    let passErr = ValidatePassword(password);
    let cPassError = ValidateConfirmPassword(cPassword, password);
  
    if (emailErr == '' && passErr == '' && nameError == ""  && cPassError == "" && Gender !== null) {

        props.navigation.navigate('Login')

    } else {
      setEmailError(emailErr);
      setPasserror(passErr);
      setConfirmPasserror(cPassError);
      setFullNameError(nameError);
      setPasserror(passErr)
 
      setShowError({
        emailError: true,
        passError: true,
        fullNmError: true,
        ConfpassError: true,
      
      });
    }

  }



  return (
      <SafeAreaView style={{ flex: 1, }}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
   
        
          <View style={{ width: WIDTH * 0.9, alignSelf: 'center' }}>
            <Text
              style={styles.hederText} >
              Hello! Register to eHealthSystem
            </Text>
        
            <Text style={styles.emailname}>Name</Text>
            <Inputfield
              placeholder={'Enter Name'}
              MaxLength={256}
              value={fullname}
              onBlur={() => {
                if (fullname != '' || fullname != undefined) {
                  setShowError(prevState => ({
                    ...prevState,
                    fullNmError: true,
                  }));
                }
              }}
              onChangeText={(text) => {
                if (fullname != '' || fullname != undefined) {
                  setFullName(text);
                  setFullNameError(ValidateFullname(text));
                }
              }}
              ShowError={ShowError.fullNmError}
              Error={fullNmError}
            />
            <Text style={styles.emailname}>Email</Text>
            <Inputfield
              placeholder={'Enter Email'}
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
              placeholder={'Enter Password'}
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
            <Text style={styles.emailname}>Confirm password</Text>
            <Inputfield
              placeholder={'Enter Confirm password'}
              MaxLength={16}
              PasswordField={true}
              editable={password ? true : false}
              value={cPassword}
              ShowPassword={ShowPassword}
              PasswordPress={() => setShowPassword(!ShowPassword)}
              onBlur={() => {
                if (cPassword != '' || cPassword != undefined) {
                  setShowError(prevState => ({
                    ...prevState,
                    ConfpassError: true,
                  }));
                }
              }}
              onChangeText={(text) => {
                if (cPassword != '' || cPassword != undefined) {
                  setCPassword(text);
                  setConfirmPasserror(ValidateConfirmPassword(text, password));
                }
              }}
              ShowError={ShowError.ConfpassError}
              Error={ConfpassError}
            />


            <Button Label={'Register'} Action={register} styles={{ width: WIDTH * 0.9, marginVertical: '8%' }} />
           

            <View>
            
            


            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: '6%' }}>
              <Text style={{
                fontSize: 15,
                
                color:COLORS.YELLOWPRIME,
              }}>Already have an account? </Text>
              <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                <Text style={{
                  fontSize: 15,
                
                  color: COLORS.YELLOWPRIME,
                }}> Login Now</Text>
              </TouchableOpacity>
            </View>
          </View>

        </KeyboardAwareScrollView>
      </SafeAreaView>
   
  );
};

export default Register;

const styles = StyleSheet.create({
  hederText: {
    color: COLORS.YELLOWPRIME,
    fontSize: 30,
    marginTop: "3%",
     marginBottom: '7%'

  }, lineView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2%'
  },
  lineView1: {
    backgroundColor:COLORS.YELLOWPRIME,
    height: 1,
    width: WIDTH * 0.29
  }, loginWithText: {
    fontSize: 14,
   
    color:COLORS.YELLOWPRIME,
  }, loginWithGoogleView: {
    flexDirection: 'row',
    backgroundColor: '#F6F6F633',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '3.5%',
  },
  loginWithGoogleViewIos: {
    flexDirection: 'row',
    backgroundColor: '#F6F6F633',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '3.5%'
    , marginTop: '8%'
  }, loginGoogleText: {
    fontSize: 14,
  
    color: COLORS.YELLOWPRIME,
    marginLeft: '2%'
  }, Errorstyle: {
    color: COLORS.ERRORCOLORRED,
    fontSize: 13,
   
    fontWeight: '400',
    paddingLeft: 7,
    marginTop: -5,
    marginBottom: 5
  }, dateStyle: {
    color:COLORS.YELLOWPRIME,
    fontSize: 15,
    
  }, dateStyle1: {
    color: COLORS.PLACEHOLDERCOLOR,
    fontSize: 15,
 
  }, Errorstyle1: {
    color: COLORS.ERRORCOLORRED,
    fontSize: 13,
    marginTop:  2,
    fontWeight: '400',
    paddingLeft: 7,
  },
  emailname: {
    color: COLORS.YELLOWPRIME,
    fontSize: 14,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginVertical: '1%'
},

});
