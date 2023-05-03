import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OrderDetails from '../assets/components/OrderDetails';
import COLORS from '../assets/colors/colors';

export default function UserOrdersPage({}) {
    return (
        <View style={styles.container}>
            <OrderDetails orderId={1} totalCost={138} onPress={null}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black'
    }
  });