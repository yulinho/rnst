/* @flow */
'use strict';

import React, {Component, Text, View} from 'react-native';
import ToolbarAndroid from 'ToolbarAndroid';
//import {brandPrimary as primary} from './styles/variable';
import AppEventEmitter from '../../Services/AppEventEmitter';
import styles from './styles/navbar';

export default class Navbar extends Component {
    open () {

        AppEventEmitter.emit('hamburger.click');

    }
    render() {
        return(
            <ToolbarAndroid   
                actions={[{title: 'hello',  icon: require('./images/menu.png'),show: 'always'}]}
                title={this.props.title}
                titleColor="#fff"
                style={[this.props.style,styles.navbar]}
                onActionSelected={this.open}
                />            
        );
    }
}
