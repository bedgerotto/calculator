import React from 'react';

import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
  <View>
    <TextInput
      style={styles.number}
      value={props.num}
      onChangeText={value => props.updateValue(props.name, value)}
    />
  </View>
);

const styles = StyleSheet.create({
  number: {
    width: 140,
    height: 80,
    fontSize: 20
  }
});
