import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';
import SignInPage from './screens/SignInPage';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image } from 'react-native';
import Header from './assets/components/Header';
import SignUpPage from './screens/SignUpPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
       <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false}}
       />
       <Stack.Screen
        name="SignIn"
        component={SignInPage}
        options={{headerShown: false}}
       />
       <Stack.Screen
        name="Home"
        component={HomePage}
        options={{headerStyle: {backgroundColor: '#000',}, 
                  headerBackTitleVisible: false,
                  headerBackVisible: false,
                  headerTitle: () => Header(),
                }}
       />
       <Stack.Screen
        name="SignUp"
        component={SignUpPage}
        options={{headerShown: true, headerStyle: {backgroundColor: '#000'}}}
       />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({

});