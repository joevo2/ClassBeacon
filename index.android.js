/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

Parse.initialize(
  '4nqAmOf9scv9vWFCdeZkNMH0yHSXAAmb3Pnf5mk9',
  'YOUR_PARSE_JAVASCRIPT_KEY'
);


var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
} = React;

var ClassBeacon = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          title="AwesomeApp"
          style={styles.toolbar}>
        </ToolbarAndroid>
        <Text>Hello</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    height: 56,
    backgroundColor: 'red',
  }
});

AppRegistry.registerComponent('ClassBeacon', () => ClassBeacon);
