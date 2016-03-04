'use strict';

import React, {Component, Navigator, Text, View} from 'react-native';
import {Router, Route, Schema} from 'react-native-router-flux';
import EventEmitter from 'EventEmitter';
import Drawer from 'react-native-drawer'
import ControlPanel from './Widgets/ControlPanel';
import Login from './Login';
import Home from './Home';
import Account from './Account';
import layout from '../Styles/layout';
import AppEventEmitter from '../Services/AppEventEmitter';

export default class RootRouter extends Component {

	componentDidMount() {
		AppEventEmitter.addListener('hamburger.click', this.openControlPanel.bind(this));
    }

    componentWillUnMount() {
    	AppEventEmitter.removeListener('hamburger.click');
    }

	closeControlPanel(navigation) {
		if(navigation.type == 'AFTER_ROUTER_ROUTE') {
			this.refs.drawer.close();
		}
	}

	openControlPanel() {
	   this.refs.drawer.open();
	}

    render() {
        return(
        	<Drawer
        		style={{marginBottom: 20}}
				ref="drawer"
				type="overlay"				
  				tapToClose={true}
				openDrawerOffset={0.2}
				panCloseMask={0.2}
				content={<ControlPanel 
					ds={[{title:"Home主题",action:"home"},{title:"Account帐号",action:"account"},{title:"Login登陆",action:"login"}]} 
					closeDrawer={()=>{this.refs.drawer.close()}}/>}
				>
					<View style={layout.layout}>

			            <Router hideNavBar={true} dispatch={this.closeControlPanel.bind(this)}>
			                <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/> 
			                <Route name="login" component={Login} initial={true}/>
			                <Route name="home" wrapRouter={false} component={Home} title="Home" />               
			                <Route name="account" wrapRouter={false} component={Account} title="Account" />               
			            </Router>
		            </View>
            </Drawer>
        );
    }
}