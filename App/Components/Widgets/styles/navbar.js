/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
	navbar: {
		//minHeight: 44,
		height: 44,
		backgroundColor: '#322A2A',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	
	title : {
		color: '#fff',
		fontSize: 20,
		fontWeight: "500",
		alignSelf: 'center'
	}
});

