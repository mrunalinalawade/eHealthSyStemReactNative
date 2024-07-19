import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Auth/Login/Login';
import Details from '../Screens/Auth/Login/Details';
import Register from '../Screens/Auth/Register';

const Stack = createNativeStackNavigator();

const RouteNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Register" component={Register} />

     
      

      </Stack.Navigator>
  );
};

export default RouteNavigation;