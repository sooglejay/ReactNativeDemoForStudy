/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class HelloWorldApp extends Component {
  render() {
    return (
      <Text>
        Hello world!
      </Text>
      );
  }
}

AppRegistry.registerComponent('University', () => HelloWorldApp);
