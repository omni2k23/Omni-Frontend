import React, { useState, useEffect } from 'react';
import { View, useWindowDimensions, ScrollView, Text, TouchableOpacity } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { Table, Row } from 'react-native-table-component';

const FirstRoute = ({ posts }) => (
    <View style={{ flex: 1, backgroundColor: 'grey' }} >
      <ScrollView>
        <Table>
          <Row data={['Order ID', 'Customer ID', 'Item']} />
          {posts.map(post => (
            <TouchableOpacity>
                <Row key={post.order_number} data={[post.order_number, post.customer_id, post.item_name]} />
            </TouchableOpacity>
            
          ))}
        </Table>
      </ScrollView>
    </View>
  );
  
  const SecondRoute = ({ posts }) => (
    <View style={{ flex: 1, backgroundColor: 'brown' }} >
      <ScrollView>
        <Table>
        <Row data={['Order ID', 'Customer ID', 'Item']} />
          {posts.map(post => (
            <TouchableOpacity>
                <Row key={post.order_number} data={[post.order_number, post.customer_id, post.item_name]} />
            </TouchableOpacity>
            
          ))}
        </Table>
      </ScrollView>
    </View>
  );
  
  const ThirdRoute = ({posts}) => (
    <View style={{ flex: 1, backgroundColor: 'white' }} >
      <ScrollView>
        <Table>
        <Row data={['Order ID', 'Customer ID', 'Item']} />
          {posts.map(post => (
            <TouchableOpacity>
                <Row key={post.order_number} data={[post.order_number, post.customer_id, post.item_name]} />
            </TouchableOpacity>
            
          ))}
        </Table>
      </ScrollView>
    </View>
  );

const renderScene = ({ route, posts }) => {
  switch (route.key) {
    case 'first':
      return <FirstRoute posts={posts} />;
    case 'second':
      return <SecondRoute posts={posts} />;
    case 'third':
      return <ThirdRoute posts={posts}/>;
    default:
      return null;
  }
};

const renderTabBar = props => (
  <TabBar
    {...props}
    activeColor={'white'}
    inactiveColor={'blue'}
    style={{ marginTop: 25, backgroundColor: 'black' }}
  />
);

export default function DriversPage({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/Users/dustinjasmin/AwesomeProject/assets/orderdata.json');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Available Orders' },
    { key: 'second', title: 'Active Order' },
    { key: 'third', title: 'Past Orders' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={props => renderScene({ ...props, posts })}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
