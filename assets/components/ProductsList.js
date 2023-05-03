import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import ProductItem from './ProductItem';
import axios from 'axios';
import VideoHolder from './VideoHolder';
import COLORS from '../colors/colors';
import SearchBar from './SearchBar';

const ProductsList = ({ handleAddToCart, handleUserType }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get(`http://192.168.1.220:8000/search/Walmart?lat=40.90567177769295&lng=-73.84199492679834`)
      .then(response => {
        const productsWithIds = response.data.map((product, index) => ({...product, id: index + 1}));
        setProducts(productsWithIds);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const rows = [];
  for (let i = 0; i < filteredProducts.length; i += 2) {
    const firstProduct = filteredProducts[i];
    const secondProduct = filteredProducts[i + 1];

    const row = (
      <View style={styles.row} key={i}>
        <ProductItem id={firstProduct.id} name={firstProduct.name} price={firstProduct.price} imageSource={firstProduct.imageURL} handleAddToCart={handleAddToCart}/>
        {secondProduct && <ProductItem id={secondProduct.id} name={secondProduct.name} price={secondProduct.price} imageSource={secondProduct.imageURL} handleAddToCart={handleAddToCart} />}
        {!secondProduct && <View style={styles.productPlaceholder} />}
      </View>
    );

    rows.push(row);
  }

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {rows}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
  },
  productPlaceholder: {
    flex: 1,
  },
});

export default ProductsList;
