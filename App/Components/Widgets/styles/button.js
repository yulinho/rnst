/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Dimensions
} = React;
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
	button: {
		backgroundColor: '#05A5D1',
	    //padding: 10,
	    borderColor: 'transparent',
	    borderWidth:2,
		borderRadius: 2,
		width: deviceWidth/2,
		height: 44,
        alignItems: 'center',
	    alignSelf: 'center',
        justifyContent: 'center',
		//marginTop: 18
	},
	
	buttonText: {
		color: '#fff',
		alignSelf: 'center',
		fontSize: 18
	}
	
});

