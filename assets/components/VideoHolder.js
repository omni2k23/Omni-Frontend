import { React, useCallback } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ps5Video from '../ps5video.mp4'
import { useFonts } from 'expo-font';
import { Video } from 'expo-av';


const VideoHolder = ({ }) => {
    const [fontsLoaded] = useFonts({
        'Source_Code_Pro_SemiBold': require('../fonts/Source_Code_Pro/static/SourceCodePro-SemiBold.ttf'),

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
            <View style={styles.top}>
                <Video
                    style={{ width: 500, height: 210, padding: 0, margin: 0  }}
                    source={ps5Video}
                    shouldPlay={true}
                    autoplay={true}
                    isLooping={true}
                    resizeMode='cover'
                />
            </View>
            <Image
                style={styles.sonyLogo}
                source={require('../SonyLogo.png')}
            />
            <Image
                style={styles.noLimits}
                source={require('../NoLimits.png')}
            />
            <Image
                style={styles.Unleash}
                source={require('../Unleash.png')}
            />
        </ View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      },
    top: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sonyLogo: {
        position: 'absolute',
        left: "2%",
        bottom: "40%"
    },
    noLimits: {
        position: 'absolute',
        left: "2%",
        bottom: "25%"
    },
    Unleash: {
        position: 'absolute',
        left: "2%",
        bottom: "5%"

    },
});

export default VideoHolder;