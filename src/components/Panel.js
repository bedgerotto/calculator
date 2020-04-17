import React from 'react';
import { View } from 'react-native';
import Operation from './Operation';
import Input from './Input';
import Command from './Command';

const Panel = props => (
  <View>
    <Input
      num1={props.num1}
      num2={props.num2}
      updateValue={props.updateValue}
    />
    <Operation operation={props.operation} updateOperation={props.updateOperation} />
    <Command action={props.calculate} />
  </View>
);

export { Panel };
