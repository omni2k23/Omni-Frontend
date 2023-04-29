import {React, useCallback} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import { Video } from 'expo-av';
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import storesGlob from '../assets/StoresGlob.mp4'
import * as SplashScreen from 'expo-splash-screen';

export default function LoginPage({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Hacked-Font': require('../assets/fonts/HackedFont/Hacked-KerX.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
    return (
        <View style={styles.container}>
          <StatusBar style="light" />
          <Video
            style={StyleSheet.absoluteFill}
            source={storesGlob}
            shouldPlay={true}
            autoplay={true}
            isLooping={true}
          />
          <Image
            style={styles.omniLogo}
            source={require('../assets/OmniLogo.png')}
            />
          <TouchableOpacity
            style={styles.signUpScreenButton}
            //onPress={() => navigate('HomeScreen')}
            underlayColor='#fff'
            onPress={() => navigation.navigate('SignUp')}
            >
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
          
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
      },
      video: {
        alignSelf: 'center',
        width: 720,
        height: 500,
      },
      signUpScreenButton:{
        width: 325,
        // marginRight:40,
        // marginLeft:40,
        marginTop:450,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#FFFFFF',
        borderWidth: 1,
        borderColor: '#fff'
      },
      signUpText:{
          color:'#000000',
          textAlign:'center',
          paddingLeft : 100,
          paddingRight : 100,
          fontFamily: 'Hacked-Font'
      }, 
      loginText: {
        color: '#FFFFFF',
        fontFamily: 'Hacked-Font',
        marginTop: 15
      },
      omniLogo: {
        top: 425,
        left: 115
      }
    });