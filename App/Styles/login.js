/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
	textInput: {
		height: 40, 
		borderColor: 'rgba(255, 255, 255, 0.4)',
		borderWidth: 2,
		borderTopColor: 'transparent',
		borderLeftColor: 'transparent',
		borderRightColor: 'transparent',
		margin: 15,
		marginTop: 5,
		backgroundColor: 'transparent',
		color: 'rgba(255, 255, 255, 0.9)',
		paddingLeft: 10,
	},
	bg : {
		backgroundColor: '#3B3738',
		flex: 1,
		justifyContent: 'center',

	},
	loginLogo: {
		width: 100,
	},
	background: {
        flex: 1,
        resizeMode: 'stretch'
    },
	logo: {
		marginBottom: 80,
		marginTop: -70,
		alignSelf: 'center'
	},
	navbar: {
		borderBottomColor: 'transparent',
	}
});
