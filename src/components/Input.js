import React from 'react';
import { View, StyleSheet } from 'react-native';
import Number from './Number';

export default props => (
  <View style={styles.container}>
    <Number num={props.num1} updateValue={props.updateValue} name='num1' />
    <Number num={props.num2} updateValue={props.updateValue} name='num2' />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

