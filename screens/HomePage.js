import { React, useCallback } from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Video } from 'expo-av';
import ps5Video from '../assets/ps5video.mp4'
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';

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
          <ScrollView >
          <Video 
              style={styles.ps5vid}
              source={ps5Video}
              shouldPlay={true}
              autoplay={true}
              isLooping={false}
            />
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
          <Text style={styles.homeText}>All Stores</Text>
          </ScrollView>
          <View style={styles.containerTwo}>
          <ScrollView horizontal={true}  >
          <Image 
            style={styles.amazon}
            source={require('../assets/amazon.png')}
          />
          <Image 
            style={styles.bestBuy}
            source={require('../assets/bestbuy.png')}
          />
          <Image 
            style={styles.microsoft}
            source={require('../assets/microsoft.png')}
          />
          <Image 
            style={styles.walmart}
            source={require('../assets/walmart.png')}
          />
          </ScrollView>
          </View>
          <View style={styles.containerThree}>
          <ScrollView horizontal={true}  >
            <TouchableOpacity onPress={() => navigation.navigate("SonyStorePage")}>
            <Image 
            style={styles.amazon}
            source={require('../assets/sonyShop.png')}
          />
            </TouchableOpacity>
         
          <Image 
            style={styles.bestBuy}
            source={require('../assets/target.png')}
          />
          <Image 
            style={styles.microsoft}
            source={require('../assets/microsoft.png')}
          />
          <Image 
            style={styles.walmart}
            source={require('../assets/walmart.png')}
          />
          </ScrollView>
          </View>
            
        </ View>

        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
      flexDirection: 'column',
    },
    containerTwo: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "#000",
      alignContent: "flex-end",
      marginTop: -340,
      justifyContent: "space-evenly"
    },
    containerThree: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "#000",
  
    },
    
    loginText: {
        color: '#FFFFFF',
        fontFamily: 'Hacked-Font',
        marginTop: 15
    },
      ps5vid: {
        flexWrap: "wrap",
        height: 400,
        width: 400,
        top: -100,
        
        
      },
      sonyLogo: {
        flexWrap: "wrap",
        width: 158.01,
        height: 27.74,
        top: -255
       
      },
      sonyPlus: {
        flexWrap: "wrap",
        top: -295,
        left: 160
      },
      noLimits: {
      flexWrap: "wrap",
      top: -245,
       

      },
      Unleash: {
        flexWrap: "wrap",
        top: -235,
      },
      shopButton: {
        flexWrap: "wrap",
        alignSelf: 'center',
        top: -225,
      },
      homeText: {
        color: "#fff",
        fontSize: 20,
        fontFamily: 'Source_Code_Pro_SemiBold',
        top: -215
      },
    

      amazon: {
        flexWrap: "wrap",
        marginRight: 10, 
      },

      bestbuy: {
        flexWrap: "wrap",
        marginRight: 10,
      },
      
      microsoft: {
        flexWrap: "wrap",
        marginLeft: 10,
      },

      walmart: {
        flexWrap: "wrap",
        marginLeft: 10,
      }
      

  });