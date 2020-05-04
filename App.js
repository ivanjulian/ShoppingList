import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
 
import uuid from 'uuid-random';

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: "Milk" },
    { id: uuid(), text: "Meat" },
    { id: uuid(), text: "Eggs" },
    { id: uuid(), text: "Juice" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems)=>{
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) =>{
    if(text != ""){
      setItems (prevItems => {
        return [{id: uuid(), text},...items] //  'text: text' same as text
      })
    } else {
      Alert.alert('Error', 'Please, enter an item', { text: 'Ok'})
    }
    
  }

  return (
    <View style={styles.container} >
      <Header title="Shopping List" />
      <AddItem
        addItem={addItem}
       />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem}/>
        )} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
})

export default App
