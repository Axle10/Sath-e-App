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
class Otp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mobile: null,
			error: ""
		}

		this.onChangeText = this.onChangeText.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeText(value) {
		this.setState({
			mobile: value
		});
	}

	onSubmit() {
		if(!this.state.mobile) {
			this.setState({
				error: "It can't be blank"
			})
		}
		else {
			this.props.navigation.navigate('ValidateOtp', { mobile: this.state.mobile })
		}
	}

	render() {
		return (
			<View style={styles.fullscreen}>
				<View style={styles.logo}>
				<Image
					style={styles.image}
					source={require('../images/Mask.jpg')}
				/>
				</View>
				<View style={styles.container}>
					<View style={[styles.form, { width: '100%' }]}>
						<Text style={styles.label}>Enter Mobile Number</Text>
						<TextInput
							ref='mobileNo'
							keyboardType="numeric"
							placeholder=' '
							style={styles.textInput}
							onChangeText={(value) =>  this.onChangeText(value)} 
						/>
						<Text>{this.state.error}</Text>
					</View>
					<View style={styles.buttonWrapper}>
						<Button text="Get OTP" onPress={() => this.onSubmit()}></Button>
					</View>
				</View>
			</View>
		);
  	}
}

const styles = StyleSheet.create({
	fullscreen: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: height,
		width: width
	},	
	logo: {
		flex: 1,
		height: height / 2,
		width: width,
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	},
	container: {
		flex: 1,
		height: height / 2,
		width: width,
		alignContent: 'center'
	},
	form: {
		textAlign: "center",
		alignItems: "center",
	},
	label: {
		fontSize: 20,
		letterSpacing: 2,
		color: "#000",
		fontWeight: "bold"
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
	image: {
		height: height/4,
		width: width/2,
		borderRadius: 40
	}
});


export default Otp;