import { React, useCallback, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Video } from 'expo-av';
import ps5Video from '../assets/ps5video.mp4'
import { useFonts } from 'expo-font';
import VideoHolder from '../assets/components/VideoHolder';
import ProductItem from '../assets/components/ProductItem';
import ProductsList from '../assets/components/ProductsList';
import SearchBar from '../assets/components/SearchBar';

export default function SonyStorePage({ handleAddToCart }) {

  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
    <View style={styles.container}>
      <VideoHolder/>
      <ProductsList handleAddToCart={handleAddToCart}/>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});
