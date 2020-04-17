import React from 'react';

import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
  <View>
    <TextInput
      placeholder='Resultado'
      value={props.result}
      editable={false}
      style={Styles.resultInput}
    />
  </View>
);

const Styles = StyleSheet.create({
  resultInput: {
    fontSize: 30,
    height: 100
  }
});
