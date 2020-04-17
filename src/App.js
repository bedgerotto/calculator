import React, { Component } from 'react';
import { View } from 'react-native';

import { Top, Result, Panel } from './components';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { num1: '', num2: '', operation: 'soma', result: '' };
    this.calculate = this.calculate.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.updateOperation = this.updateOperation.bind(this);
  }

  calculate() {
    let result = '';

    switch (this.state.operation) {
      case 'soma':
        result = (parseFloat(this.state.num1) + parseFloat(this.state.num2)).toString();
        break;
      case 'subtracao':
        result = (parseFloat(this.state.num1) - parseFloat(this.state.num2)).toString();
        break;
      default:
        result = '';
    }

    this.setState({ result });
  }

  updateValue(name, value) {
    const obj = {};
    obj[name] = value;
    this.setState(obj);
  }

  updateOperation(operation) {
    this.setState({ operation });
  }

  render() {
    return (
      <View>
        <Top />
        <Result result={this.state.result} />
        <Panel
          num1={this.state.num1}
          num2={this.state.num2}
          operation={this.state.operation}
          calculate={this.calculate}
          updateOperation={this.updateOperation}
          updateValue={this.updateValue} />
      </View>
    );
  }
}
