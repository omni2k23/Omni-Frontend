import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

function LogOut(navigation, handleAuthenticatedUser) {
  handleAuthenticatedUser(-1);
  navigation.navigate('UserOrders');
}

const Header = ({ navigation, storeName, handleAuthenticatedUser }) => {
  let logoImage, icon;
  switch (storeName) {
    case 'Sony':
      logoImage = require('../SonyLogo.png');
      icon = <Ionicons name="cart-outline" size={32} color={'white'} onPress={() => navigation.navigate('Cart')} />;
      break;
    case 'Cart':
      logoImage = require('../OmniLogo.png');
      icon = null;
      break;
    case 'User':
      logoImage = require('../OmniLogo.png');
      icon = null;
      break;
    default:
      logoImage = require('../OmniLogo.png');
      icon = <Ionicons name="file-tray-full-outline" size={32} color={'white'} onPress={() => LogOut(navigation, handleAuthenticatedUser)} />;
      break;
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'black' }}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={32} color={'white'}></Ionicons>
        </TouchableOpacity>
        <View style={styles.middleContainer}>
          <Image source={logoImage} style={styles.image} />
        </View>
        <TouchableOpacity style={styles.iconButton}>
          {icon}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  image: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
  }
}

export default Header;
