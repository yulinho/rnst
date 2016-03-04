/* @flow */
'use strict';

import React, {Component, Text, TouchableHighlight } from 'react-native';
//import styles from '../../Styles/style';
import styles from './styles/button';
export default class Button extends Component {
    render() {
        return(
            <TouchableHighlight
                style={[styles.button,this.props.style]}
                underlayColor="#02c7fd"
                onPress={this.props.onPress}>
                    <Text underlayColor="#7de2fe" style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight> 
        );
    }    

}

