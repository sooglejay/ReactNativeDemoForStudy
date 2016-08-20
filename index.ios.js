/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react');
var {AppRegistry, } = require('react-native');
;
import TabBarExample from './coms_ios/tab/TabBarExample'

var button = React.createClass({
  render: function() {
    return (
      <TabBarExample />
      );
  }
});


AppRegistry.registerComponent('University', () => button);
