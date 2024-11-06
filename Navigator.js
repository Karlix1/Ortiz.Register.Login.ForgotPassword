import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import PasswordRecoveryPage from './PasswordRecoveryPage';

const Stack = createNativeStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="BDO ACCOUNT LOGIN" component={LoginPage} />
      <Stack.Screen name="Signup" component={RegistrationPage} />
      <Stack.Screen name="Recover Account" component={PasswordRecoveryPage} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
