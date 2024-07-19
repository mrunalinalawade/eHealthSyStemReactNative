import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../../Components/Button';

const Details = ( props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
       Label={'Details'}
       Action={props.navigation.navigate('Login')}
      />
    </View>
  );
};

export default Details;