/* @flow */
'use strict';

var React = require('react-native');
var primary = require('../Components/Widgets/styles/variable').brandPrimary;
var secondary = require('../Components/Widgets/styles/variable').brandSecondary;

var {
  StyleSheet,
  Dimensions
} = React;
var deviceHeight = Dimensions.get('window').height;
console.log(deviceHeight);
module.exports = StyleSheet.create({
	main:{
		flex: 10,
		backgroundColor: "red",
	}
});
