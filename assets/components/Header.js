import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import COLORS from '../colors/colors';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconButton}>
        <Image source={require('../SonyPlus.png')} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.middleContainer}>
        <Text style={styles.title}>App Name</Text>
        <Image source={require('../SonyPlus.png')} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.iconButton}>
        <Image source={require('../SonyPlus.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.black
  },
  iconButton: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 100,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  }
}

export default Header;
