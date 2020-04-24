import React, { Component } from "react";
import { Text, View,  TextInput, StyleSheet, Dimensions, SafeAreaView, ScrollView,
	AsyncStorage } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import { SERVER_URL } from 'react-native-dotenv';

import Button from '../components/Button';

const serverUrl = SERVER_URL;
const { height, width } = Dimensions.get("window");

class Register extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mobile: this.props.route.params.mobile,
			name: '', password: '', email: '', 
			address_street: '', address_city: '', address_state: '', address_country: '',
			address_pin: null, type: '',

			errors: {
				email: '', address_pin: '', message: ''
			},

			screenHeight: 0,
		}

		this.onChangeText = this.onChangeText.bind(this);
		this.signUp = this.signUp.bind(this);
	}
	 
	onContentSizeChange = (contentWidth, contentHeight) => {
		// Save the content height in state
		this.setState({ screenHeight: contentHeight });
	};

	onChangeText = (key, val) => {
		const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		this.setState({ [key]: val })
		if(key == 'email' && !emailregex.test(val))
		{
			this.setState({
				errors: {
					email: "Email is not formatted correctly"
				}
			})
		}
		else {
			this.setState({
				errors: {
					email: ""
				}
			})
		}

		if(key == 'address_pin' && typeof(address_pin) != 'number') {
			this.setState({
				errors: {
					address_pin: "Pin must be a number"
				}
			})
		}
		else {
			this.setState({
				errors: {
					address_pin: ""
				}
			})
		}
	}

	signUp = async () => {
		const response = await fetch(`${serverUrl}/api/user/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				mobile: parseInt(this.state.mobile),
				name: this.state.name,
				password: this.state.password,
				email: this.state.email,
				type: this.state.type,
				address_street: this.state.address_street,
				address_city: this.state.address_city,
				address_state: this.state.address_state,
				address_country: this.state.address_country,
				address_pin: parseInt(this.state.address_pin)
			})
		});
		const responseJson = await response.json();
		if(responseJson.success) {
			AsyncStorage.setItem({ 'token': this.props.route.params.mobile })
			this.props.navigation.navigate("Dashboard");
		}
		else {
			alert(responseJson.error);
		}
	}
	render() {
		const scrollEnabled = this.state.screenHeight > height;
		return(
			<SafeAreaView style={styles.container}>
      			<ScrollView style={{ flex: 1 }}
					contentContainerStyle={styles.scrollview}
					scrollEnabled={scrollEnabled}
					onContentSizeChange={this.onContentSizeChange}>

					<Text style={{ textAlign: "center", fontSize: 20, color: "#16a085"}}>
						Welcome to Sath-e. Signup here.
					</Text>
				  	{/* <View style={styles.container}> */}
						<View >
							<Text>Your Name</Text>
							<TextInput
								style={styles.input}
								placeholder=' '
								autoCapitalize="none"
								placeholderTextColor='white'
								onChangeText={val => this.onChangeText('name', val)}
							/>
						</View>

						<View>
							<Text>Your Email</Text>
							<TextInput
								style={styles.input}
								placeholder=' '
								autoCapitalize="none"
								onChangeText={val => this.onChangeText('email', val)}
							/>
							<Text>{ this.state.errors.email }</Text>
						</View>
				
						<View>
							<Text>Give a Password</Text>
							<TextInput
								style={styles.input}
								placeholder=' '
								secureTextEntry={true}
								autoCapitalize="none"
								onChangeText={val => this.onChangeText('password', val)}
							/>
						</View>
						
						<View>
							<Text>Buyer/Seller</Text>
							<TextInput
								style={styles.input}
								placeholder=' '
								autoCapitalize="none"
								onChangeText={val => this.onChangeText('type', val)}
							/>
						</View>

						<View>
							<Text>Give your address</Text>
							<TextInput
								style={styles.input}
								placeholder=' '
								autoCapitalize="none"
								onChangeText={val => this.onChangeText('address_street', val)}
							/>
						</View>

						<View>
							<Text>Enter your city</Text>
							<TextInput
								style={styles.input}
								placeholder=' '
								autoCapitalize="none"
								onChangeText={val => this.onChangeText('address_city', val)}
							/>
						</View>

						<View>
							<Text>Enter your state</Text>
							<TextInput
								style={styles.input}
								placeholder=' '
								autoCapitalize="none"
								onChangeText={val => this.onChangeText('address_state', val)}
							/>
						</View>

						<View>
							<Text>Enter your country</Text>
							<TextInput
								style={styles.input}
								placeholder=' '
								autoCapitalize="none"
								onChangeText={val => this.onChangeText('address_country', val)}
							/>
						</View>

						<View>
							<Text>Enter your pin</Text>
							<TextInput
								style={styles.input}
								placeholder=' '
								autoCapitalize="none"
								keyboardType="numeric"
								onChangeText={val => this.onChangeText('address_pin', val)}
							/>
							
							<Text>{ this.state.errors.address_pin}</Text>
						</View>
						
						<View style={styles.buttonWrapper}>
							<Button	text='Sign Up' onPress={this.signUp} />
						</View>
					{/* </View> */}
				</ScrollView>
			</SafeAreaView>
			
		);
	}
}

const styles = StyleSheet.create({
	input: {
		color: "#16a085",
		borderColor: "grey",
		borderWidth: 1,
		width: width - (0.25 * width),
		marginBottom: 25,
		zIndex: 2,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 1,
		borderRadius: 5,
		textAlign: "center",
		fontSize: 20
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
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	scrollview: {
		flexGrow: 1
	}
})
export default Register;