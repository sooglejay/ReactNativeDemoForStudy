/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

// import component from file
// import { AppRegistry } from 'react-native';
// import NavigatorComponent from './coms_android/navigator/NavigatorComponent';
// AppRegistry.registerComponent('University', () => NavigatorComponent);


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
        Hello world! Fucking you fuck
      </Text>
      );
  }
}

AppRegistry.registerComponent('University', () => HelloWorldApp);
