import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const AddItem = ({addItem }) => {
  const [text, setText] = useState('');

  const onChange = (textValue) => {
    setText(textValue)
  }
  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={()=>addItem(text)} >
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
        Add Item
        </Text>
      </TouchableOpacity>
    </View>
  )

}

// Use this if you don't want to use title prop in App.js
// Header.defaultProps = {
//   title: 'Shopping List'
// }

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16
  },
  btn: {
    backgroundColor: '#f8f8f8',
    padding: 9,
    margin: 5
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default AddItem
