import React, { Component } from "react";
import {
	Dimensions,
	StyleSheet, // CSS-like styles
	Text, // Renders text
	TouchableOpacity, // Pressable container
	View, // Container component,
	TextInput,
	Image
} from "react-native";

import Button from '../components/Button';

const { height, width } = Dimensions.get("window");
class Login extends Component {
	constructor(props) {
		super(props);
		const { params } = this.props.route;
		this.state = {
			mobile: params.mobile
		}
	}

	login = () => {
		this.props.navigation.navigate('Dashboard');
	}
	render() {
		return(
			<View style={styles.container}>
				<View>
					<Text>Welcome Back</Text>
					<Text>Your Mobile number is {this.state.mobile}</Text>
				</View>
				<View>
					<Text>Enter Password</Text>
					<TextInput
						style={styles.textInput}
						placeholder=' '
						secureTextEntry={true}
						autoCapitalize="none"
						onChangeText={val => this.onChangeText('password', val)}
					/>
				</View>

				<View style={styles.buttonWrapper}>
					<Button	text='Login' onPress={this.login} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textInput: {
		color: "#16a085",
		borderColor: "grey",
		borderWidth: 1,
		width: width - (0.25 * width),
		marginTop: 25,
		zIndex: 2,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 1,
		borderRadius: 5,
		textAlign: "center",
		fontSize: 30
	},
	buttonWrapper: {
		color: "#16a085",
		bottom: 0,
		left: 0,
		flex: 1,
		paddingHorizontal: 10,
		paddingVertical: 40,
		justifyContent: "flex-end",
		alignItems: "center"
	  },
})

export default Login;