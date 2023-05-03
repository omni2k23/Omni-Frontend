import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import COLORS from '../colors/colors';

const SubmitOrderButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Submit Order</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 10,
    right: 20,
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

export default SubmitOrderButton;
