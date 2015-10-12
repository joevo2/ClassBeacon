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
  statics: {
    title: '<ToolbarAndroid>',
    description: 'Examples of using the Android toolbar.'
  },
  getInitialState: function() {
    return {
      actionText: 'Example app with toolbar component',
      toolbarSwitch: false,
      colorProps: {
        titleColor: '#3b5998',
        subtitleColor: '#6a7180',
      },
    };
  },
  render: function() {
    return (
      <View>
      <ToolbarAndroid
        style={styles.toolbar}
        title="Class Beacon"
        titleColor="#ffffff" />
      <Text>Hello World</Text>
      </View>
    );
  },
  _onActionSelected: function(position) {
    this.setState({
      actionText: 'Selected ' + toolbarActions[position].title,
    });
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#2196F3',
    height: 56,
  },
});

AppRegistry.registerComponent('ClassBeacon', () => ClassBeacon);
