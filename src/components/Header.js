import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default props => (
  <View style={Styles.top}>
    <Text style={Styles.titleText}>Calculadora 1.0</Text>
  </View>
)

const Styles = StyleSheet.create({
  top: {
    backgroundColor: '#2196f3',
    padding: 10,
    alignItems: 'center'
  },
  titleText: {
    fontSize: 25,
    color: '#FFF'
  }
})
