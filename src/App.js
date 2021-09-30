/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, Text, TextInput} from 'react-native';
import ShopItem from './components/ShopItems/index';
import SearchItem from './components/Search/index'
import shoppingList_data from './shopdata.json';

function App() {
  const renderItems = ({item}) => <ShopItem item={item}
  // if # items is odd then last item will be cover whole screen.
    isLast ={(item.id ===shoppingList_data.length-1 )&& shoppingList_data.length % 2 === 1 ? true : false }
  />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Patika Store</Text>
     
     {/* text used to pass props ass placehold */}
      <SearchItem  text="Ara ..."/> 
      <FlatList
        numColumns={2}
        data={shoppingList_data}
        renderItem={renderItems}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    color:'purple'
  },
});

export default App;
