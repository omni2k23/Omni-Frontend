import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';

import COLORS from '../assets/colors/colors.js';
import Button from '../assets/components/Button.js';
import Input from '../assets/components/Input.js';
import Loader from '../assets/components/Loader.js';
import axios from 'axios';





export default function SignInPage( {navigation, handleAuthenticatedUser, handleUserType} ) {
  const [loginFailMsg, setFailMsg] = React.useState("")
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };

  const handleLogin = (email, password, handleUserType, handleAuthenticatedUser, navigation, setFailMsg) => {
    const payload = {
      email: email,
      password: password
    }
    console.log(email)
    if (email == "c") {
      navigation.navigate("Home")
    }
    else {
      navigation.navigate("Driver")
    }
  
    // axios.post(`http://10.18.145.211:8002/authenticate/`, payload)
    //   .then(response => {
    //     const data = response.data;  // Get the response data
    //     const accountType = data.account_type;
    //     const userId = data.user_id;
    //     handleUserType(accountType);
    //     handleAuthenticatedUser(userId);
    //     console.log("hi")
    //     if (accountType == "driver") {
    //       navigation.navigate("Driver")
    //     }
    //     else {
    //     navigation.navigate('Home')
  
    //     }
    //   })
    //   .catch(error => {
    //     switch (error.response.status) {
    //       case 401:
    //         setFailMsg("Email/Password Incorrect! Try again");
    //         break;
    //       default:
    //         setFailMsg("Something went wrong!");
    //         break;
    //     }
        
    //   });
  }
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.black, flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: COLORS.white, fontSize: 40, fontWeight: 'bold' }}>
          Sign in
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          Enter Your Details to Sign in
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Button title="Login" onPress={() => handleLogin(inputs.email, inputs.password, handleUserType, handleAuthenticatedUser, navigation, setFailMsg)} />
          <Text
            onPress={() => null}
            style={{
              color: COLORS.white,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Don't have an account? Click Here
          </Text>
          <Text style={{
              color: COLORS.white,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>{loginFailMsg}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};