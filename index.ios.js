/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';
import React, {
    AppRegistry,
    Component,
    StatusBarIOS
} from 'react-native';

import RootRouter from './App/Components/RootRouter';
StatusBarIOS.setStyle('light-content');

class NativeStarter extends Component {
    render() {
        return (
            <RootRouter />
        );
    }
}

AppRegistry.registerComponent('NativeStarter', () => NativeStarter);

