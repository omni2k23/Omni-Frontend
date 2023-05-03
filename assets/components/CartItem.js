import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../colors/colors';

const CartItem = ({ name, price, imageSource, onDelete }) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageSource}} style={styles.image} resizeMode='contain' />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.name}>{name}</Text>
        <Text numberOfLines={1} style={styles.price}>${price}</Text>
      </View>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Ionicons name="trash-outline" size={24} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.black,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    borderColor: COLORS.white,
    borderWidth: 1
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.gray,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  price: {
    fontSize: 14,
    color: COLORS.white,
  },
  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.black,
    borderRadius: 10,
    width: 40,
    height: 40,
  },
});

export default CartItem;
