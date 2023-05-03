import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import COLORS from '../colors/colors';


const OrderDetails = ({ orderId, totalCost, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.orderIdContainer}>
        <Text style={styles.orderId}>Order #{orderId}</Text>
      </View>
      <View style={styles.totalCostContainer}>
        <Text style={styles.totalCost}>Total Cost: ${totalCost}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#000000',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  orderIdContainer: {
    flex: 1,
    height: 30,
    borderColor: COLORS.white,
    borderRadius: 10,
  },
  orderId: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  totalCostContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  totalCost: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default OrderDetails;
