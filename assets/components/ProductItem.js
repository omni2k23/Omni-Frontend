import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../colors/colors';

const ProductItem = ({ name, price, imageSource, handleAddToCart }) => {
  const inCart = false;
  const buttonColor = inCart ? 'blue' : 'black';
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCartWithPopup = (item) => {
    handleAddToCart(item);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingBottom: 5 }}>
        <Image source={{uri: imageSource}} style={[styles.image, { alignSelf: 'stretch' }]} resizeMode='contain' />
        <TouchableOpacity onPress={() => handleAddToCartWithPopup({ name, price, imageSource })} style={[styles.addButton, { backgroundColor: buttonColor }]}>
          {inCart ? (
            <Ionicons name="checkmark" size={24} color="white" />
          ) : (
            <Ionicons name="add" size={24} color="white" />
          )}
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.name}>{name}</Text>
          <Text numberOfLines={1}  style={styles.price}>${price}</Text>
        </View>
      </View>
      <Modal
        visible={showPopup}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.popupContainer}>
          <Text style={styles.popupText}>Item added to cart!</Text>
          <TouchableOpacity style={styles.button} onPress={() => setShowPopup(false)}>
      <Text style={styles.buttonText}>Ok</Text>
    </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 250,
    borderBottomColor: '#ccc',
    backgroundColor: COLORS.black,
    marginTop: 10,
    marginLeft: 8
  },
  image: {
    height: 190,
    backgroundColor: COLORS.white,
  },
  addButton: {
    right: 5,
    bottom: 65,
    position: 'absolute',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 5,
  },
  name: {
    fontSize: 10,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  price: {
    fontSize: 14,
    color: COLORS.white,
  },
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.white,
  },
  button: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 5,
  },
  buttonText: {
    color: COLORS.black,
    fontWeight: 'bold',
  },
  
});

export default ProductItem;
