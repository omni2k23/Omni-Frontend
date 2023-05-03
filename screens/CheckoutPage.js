import { React, useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import CartItem from '../assets/components/CartItem';
import SubmitOrderButton from '../assets/components/SubmitOrderButton';
import CheckoutFooter from '../assets/components/CheckoutFooter';

export default function CheckoutPage({ cart, handleRemoveFromCart, clearCart}) {
    const [cartTotal, setCartTotal] = useState(0);

    // Calculate total quantity of items in cart
    const calculateTotal = useCallback(() => {
        const total = cart.reduce((accumulator, item) => accumulator + item.price, 0);
        setCartTotal(total);
    }, [cart]);

    useEffect(() => {
        calculateTotal();
    }, [calculateTotal]);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {cart.map(item => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        imageSource={item.imageSource}
                        quantity={item.quantity}
                        onDelete={() => handleRemoveFromCart(item.id)}
                    />
                ))}
                <View style={styles.scrollEnd}></View>
            </ScrollView>
            <CheckoutFooter cartTotal={cartTotal} clearCart={clearCart} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    scrollContainer: {
        paddingBottom: 35, // Adjust this value as needed
    },
    scrollEnd: {
        height: 35, // Height should be equal to the paddingBottom value above
    },
    totalContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
});
