import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image } from 'react-native';
import AuthenticationPage from './screens/AuthenticationPage'

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
        name="Home"
        component={HomePage}
        options={{headerStyle: {backgroundColor: '#000',}, 
                  headerBackTitleVisible: false,
                  headerTitle: () => <Image
                                      source={require('/Users/dustinjasmin/AwesomeProject/assets/OmniLogo.png')}
                                      />
                }}
       />
       <Stack.Screen
        name="Authentication"
        component={AuthenticationPage}
        options={{headerShown: true, headerStyle: {backgroundColor: '#000'}}}
       />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({

});