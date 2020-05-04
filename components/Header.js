import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header} >
      <Text style={styles.text} >{title}</Text>

    </View>
  )
}

// Use this if you don't want to use title prop in App.js
// Header.defaultProps = {
//   title: 'Shopping List'
// }

const styles = StyleSheet.create({
  header: {
    height: 70,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: "center"
  }
})

export default Header
