/* @flow */
'use strict';

import React, {Component, Text, View, ScrollView} from 'react-native';
import styles from '../Styles/style';
import Navbar from './Widgets/Navbar';
import home from '../Styles/home';
import Button from './Widgets/Button';
import {Actions} from 'react-native-router-flux';


export default class Home extends Component {
	
	render() {
		return(
	    	<View style={home.color}>
	     		<Navbar
	     		    title="Home"
	     		    style={home.toolbar}
	     		/>
				<ScrollView style={{backgroundColor: 'transparent'}}>
					<View style={home.listContainer}>
			     		<Text style={home.list}>
			     			Welcome!
			 			</Text>
			 		</View>
			 		<View style={home.listContainer}>
			 			<Text style={home.list}>
			     			Native Starter Free version!
			 			</Text>
		 			</View>
		 			<View style={home.breakline}>
		 			</View>
		 			<View>
			 			<Button style={{borderRadius:22}}
			                onPress={Actions.login}
			            	text="Logout" />
			 			<Button
			                onPress={Actions.login}
			            	text="Logout" />
			        </View>
				</ScrollView>
	        </View>
		);
	}
}
