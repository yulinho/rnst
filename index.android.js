/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var RootRouter = require('./App/Components/RootRouter');

var {
    AppRegistry,

} = React;

var NativeStarterKit = React.createClass({
    render: function() {

        return (
            <RootRouter />   
            )
    }
})



AppRegistry.registerComponent('NativeStarterKit', () => NativeStarterKit);
