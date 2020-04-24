import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Swiper from './Swiper';
class Welcome extends Component {
	render() {
		return(
			<Swiper navigation={this.props.navigation}>
				{/* First screen */}
				<View style={styles.slide}>
					<Text style={styles.header}>one</Text>
					<Text style={styles.text}>one</Text>
				</View>
				{/* Second screen */}
				<View style={styles.slide}>
					<Text style={styles.header}>two</Text>
					<Text style={styles.text}>two</Text>
				</View>
				{/* Third screen */}
				<View style={styles.slide}>
					<Text style={styles.header}>three</Text>
					<Text style={styles.text}>three</Text>
				</View>
			</Swiper>
		);
	}
}

const iconStyles = {
	size: 100,
	color: "#FFFFFF"
  };
  const styles = StyleSheet.create({
	// Slide styles
	slide: {
	  flex: 1, // Take up all screen
	  justifyContent: "center", // Center vertically
	  alignItems: "center", // Center horizontally
	  backgroundColor: "#16a085"
	},
	// Header styles
	header: {
	  color: "#FFFFFF",
	  fontFamily: "Avenir",
	  fontSize: 30,
	  fontWeight: "bold",
	  marginVertical: 15
	},
	// Text below header
	text: {
	  color: "#FFFFFF",
	  fontFamily: "Avenir",
	  fontSize: 18,
	  marginHorizontal: 40,
	  textAlign: "center"
	}
});

export default Welcome;