/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
	button: {
		backgroundColor: '#05A5D1',
	    padding: 10,
	    borderColor: 'transparent',
	    borderWidth:2,
	    alignSelf: 'center',
		borderRadius: 10,
		width: 150,
		height: 45,
		marginTop: 18
	},
	
	buttonText: {
		color: '#fff',
		alignSelf: 'center',
		fontSize: 18
	}
	
});

