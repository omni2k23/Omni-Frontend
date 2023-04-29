import { React, useCallback } from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Video } from 'expo-av';
import ps5Video from '../assets/ps5video.mp4'
import { useFonts } from 'expo-font';

export default function HomePage({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Source_Code_Pro_SemiBold': require('../assets/fonts/Source_Code_Pro/static/SourceCodePro-SemiBold.ttf'),

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
          <View style={styles.top}>
            <Video 
              style={styles.ps5vid}
              source={ps5Video}
              shouldPlay={true}
              autoplay={true}
              isLooping={false}
            />
          </View>
          <Image 
            style={styles.sonyLogo}
            source={require('../assets/SonyLogo.png')}
          />
          <Image 
            style={styles.sonyPlus}
            source={require('../assets/SonyPlus.png')}
          />
          <Image 
            style={styles.noLimits}
            source={require('../assets/NoLimits.png')}
          />
          <Image 
            style={styles.Unleash}
            source={require('../assets/Unleash.png')}
          />
          <TouchableOpacity> 
            <Image style={styles.shopButton}
                   source={require('../assets/ShopButton.png')} 
          />
          </TouchableOpacity>
          <Text style={styles.homeText}>All Stores</Text>
        </ View>

        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
      alignItems: "center",
      justifyContent: "center",
    },
    top: {
      flex: 1,
      justifyContent: 'flex-start',
      marginTop: 36
    },
    loginText: {
        color: '#FFFFFF',
        fontFamily: 'Hacked-Font',
        marginTop: 15
    },
      ps5vid: {
        flex: 1,
        height: '200%',
        width: '300%',
        
      },
      sonyLogo: {
        position: 'absolute',
        width: 158.01,
        height: 27.74,
        left: 10,
        top: 175,
      },
      sonyPlus: {
        position: 'absolute',
        left: 178,
        top: 169,
      },
      noLimits: {
        position: 'absolute',
        left: 10,
        top: 220,
       

      },
      Unleash: {
        position: 'absolute',
        left: 10,
        top: 257,
      },
      shopButton: {
        top: 25
      },
      homeText: {
        color: "#fff",
        fontSize: 20,
        fontFamily: 'Source_Code_Pro_SemiBold',
        top: 30,
        right: 115
      }

  });