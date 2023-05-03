import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';
import SignInPage from './screens/SignInPage';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image } from 'react-native';
import Header from './assets/components/Header';
import SignUpPage from './screens/SignUpPage';
import COLORS from './assets/colors/colors';
import DriversPage from './screens/DriversPage';
import { useState } from 'react';
import SonyStorePage from './screens/SonyStorePage';
import CheckoutPage from './screens/CheckoutPage';
import UserOrdersPage from './screens/UserOrdersPage';

const Stack = createNativeStackNavigator();

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [userID, setUserID] = useState(-1);
  const [userType, setUserType] = useState('')

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    const newTotal = cart.reduce((total, item) => total + item.price, product.price);
    setCartTotal(newTotal);
  };

  const handleRemoveFromCart = (id) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === id);
    if (index >= 0) {
      newCart.splice(index, 1);
      setCart(newCart);
      const total = newCart.reduce((accumulator, item) => accumulator + item.price, 0);
      setCartTotal(total);
    }
  };

  const clearCart = () => {
    setCart([])
  }

  const handleAuthenticatedUser = (id) => {
    setUserID(id)
  }

  const handleUserType = (account_type) => {
    setUserType(account_type)
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
          name="UserOrders"
          component={UserOrdersPage}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: COLORS.black },
            headerBackTitleVisible: false,
            header: () => <Header navigation={navigation} storeName={"User"} clearCart={clearCart} />,
          })}
        />
        <Stack.Screen
          name="Driver"
          component={DriversPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: COLORS.black },
            headerBackTitleVisible: false,
            header: () => <Header navigation={navigation} storeName={"Home"} handleAuthenticatedUser={handleAuthenticatedUser} />,
          })}
        />

        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInPage}
          options={{ headerShown: false, headerBackTitle: true }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUpPage}
          options={{ headerShown: true, headerStyle: { backgroundColor: '#000' } }}
        />
        <Stack.Screen
          name="SonyStorePage"
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: COLORS.black },
            headerBackTitleVisible: false,
            header: () => <Header navigation={navigation} storeName={"Sony"} />,
          })}
        >
          {(props) => (
            <SonyStorePage handleAddToCart={handleAddToCart} {...props} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Cart"
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: COLORS.black },
            headerBackTitleVisible: false,
            header: () => <Header navigation={navigation} storeName={"Cart"} />,
          })}
        >
          {(props) => (
            <CheckoutPage
              {...props}
              cart={cart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});