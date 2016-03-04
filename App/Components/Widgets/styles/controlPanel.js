/* @flow */
'use strict';

var React = require('react-native');
var sidebar = require('./variable').brandSidebar

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
	sidebar: {
        padding: 10,
        paddingRight: 0,	        
        paddingTop: 30,
 		backgroundColor: sidebar,
 		flex: 1,     		
    },
    controlPanelText: {
     	color:'white'
    },
    linkText: {
     	fontSize: 16,
     	color: '#fff',
        position: 'absolute',
        fontWeight: "400",
        left: 15
    },    
    link: {    
        position: 'relative',
    	borderWidth: 1,
        paddingTop: 14,
        height: 50,        
    	borderTopColor: 'transparent',
    	borderLeftColor: 'transparent',
    	borderRightColor: 'transparent',
        borderBottomColor: '#333136'
    	// borderBottomColor: '#5597CD'
    },
    close: {
        marginTop: 15
    }
});
