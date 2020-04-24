import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class Order extends Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<View>
				<Icon name='area-chart' ></Icon>
			</View>
		)
	}
}

export default Order;