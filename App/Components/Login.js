/* @flow */
'use strict';

var React = require('react-native');
var ResponsiveImage = require('react-native-responsive-image'); 

var styles = require('../Styles/style');
var login = require('../Styles/login');
var ButtonRounded = require('./ButtonRounded');
var AppDispatcher = require('./../Dispatcher/AppDispatcher');

var {
    View,
    Text,
    TextInput,
} = React;

var Login = React.createClass({
    login(){
        var Home = require('./Home');
        AppDispatcher.dispatch({
            actionType: 'Navigate',
            component: Home

        });

    },
    render: function() {
        return (
            <View  style={login.bg}> 
                
                <ResponsiveImage source={require('image!logo')} initWidth="210" initHeight="210" style={login.logo}/>
                <Text style={styles.logo}>
                StartReact.com
                </Text>   
                <Text style={styles.desc}>
                React Native Starter Kit
                </Text>     
                <TextInput
                    style={login.textInput}
                    placeholder={'EMAIL'}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7'}			/>
                <TextInput
                    style={login.textInput}
                    placeholder={'PASSWORD'}
                    secureTextEntry={true}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7'}			/>
                <ButtonRounded
                    onPress={this.login}
                    text="Login" />   

            </View>
        );
    }
});



module.exports = Login;
