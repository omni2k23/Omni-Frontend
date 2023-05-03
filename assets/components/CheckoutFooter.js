import { View, StyleSheet, Image, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import SubmitOrderButton from './SubmitOrderButton';
const CheckoutFooter = ({ cartTotal }) => {
    return (
        <View style={styles.footer}>
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total: {cartTotal.toFixed(2)}</Text>
            </View>
            <SubmitOrderButton/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 60,
      backgroundColor: 'black',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
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
    },
  });

export default CheckoutFooter;