import * as React from 'react';
import { Text, View, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function Header({ title,navigation }) {
	return (
		<View style={styles.header}>
			<View style={styles.menu}>
				<TouchableOpacity onPress={() => navigation.toggleDrawer()}>	
					<Image style={styles.menuImage} source={require('../images/menu.png')} 
						resizeMode="contain"
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.title}>
				<Text>{title}</Text>
			</View>
			<View style={styles.logo}></View>
		</View>
	);
}
function HomeScreen({ navigation }) {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header title="Home" navigation={navigation} />
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text>Home!</Text>
			</View>
		</SafeAreaView>
	);
}

function SettingsScreen({ navigation}) {
	navigation.setOptions({
		tabBarVisible: false
	})
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Settings!</Text>
		</View>
	);
}

function NotificationsScreen({ navigation }) {
	return (
	  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Button onPress={() => navigation.goBack()} title="Go back home" />
	  </View>
	);
  }

function TabNavigator() {
	return (
		<Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
				let iconName;
				if (route.name === 'Home') {
					iconName = focused
						? require('../images/home-colored.png')
						: require('../images/home.png');
				} 
				
				else if(route.name === 'Map') {
					iconName = focused
						? require('../images/map-colored.png')
						: require('../images/map.png');
				}
				else if (route.name === 'Chat') {
					iconName = focused 
						? require('../images/chat-colored.png') 
						: require('../images/chat.png');
				}

				// You can return any component that you like here!
				return <Image source={iconName} style={{width: 20, height: 20}} />;
			},
			})}
			tabBarOptions={{
				activeTintColor: "#16a085",
				inactiveTintColor: 'gray',
		}}
		>
			<Tab.Screen name="Map" component={HomeScreen} />
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Chat" component={SettingsScreen}  />
		</Tab.Navigator>
	)
}

function drawerContent(props) {
	return (
		<SafeAreaView style={drawerStyle.container}>
			<View style={drawerStyle.profile}>
				<Image source={require('../images/profile.png')} style={drawerStyle.profileIcon} />
				<Text>Saptarshi Sinha</Text>
				<Text>+91-8293328</Text>
			</View>
			<View style={drawerStyle.menu}>
				<TouchableOpacity onPress={() => props.navigation.navigate('Chat')} >
					<Text style={drawerStyle.menuItem}>
						<Image source={require('../images/orders.png')} style={drawerStyle.menuIcon} />
						{'     '}
						<Text style={drawerStyle.menuText}>Your Orders </Text>
					</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => props.navigation.navigate('Chat')} >
					<Text style={drawerStyle.menuItem}>
						<Image source={require('../images/orders.png')} style={drawerStyle.menuIcon} />
						{'     '}
						<Text style={drawerStyle.menuText}>Add Resource </Text>
					</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => props.navigation.navigate('Chat')} >
					<Text style={drawerStyle.menuItem}>
						<Image source={require('../images/orders.png')} style={drawerStyle.menuIcon} />
						{'     '}
						<Text style={drawerStyle.menuText}>Your Resources </Text>
					</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => props.navigation.navigate('Chat')} >
					<Text style={drawerStyle.menuItem}>
						<Image source={require('../images/logout.png')} style={drawerStyle.menuIcon} />
						{'     '}
						<Text style={drawerStyle.menuText}>Logout</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
export default function App() {
	return (
		<NavigationContainer independent={ true }>
			<Drawer.Navigator initialRouteName="MenuTab" drawerContent={props => drawerContent(props)}>
				<Drawer.Screen name="MenuTab" component={TabNavigator} />
				<Drawer.Screen name="Notifications" component={NotificationsScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}


const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		height: 50,
		borderWidth: 1,
		borderColor: "#16a085"
	},
	menu: { 
		flex: 1,
		borderColor: "red",
		justifyContent: "center",
		borderWidth: 1
	},
	title: {
		flex: 1.5,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1
	},
	logo: {
		flex: 1,
		borderColor: "red",
		borderWidth: 1
	},
	menuImage: {
		width: 30,
		height: 30,
		marginLeft: 10,
		color: "#16a085"
	}
});

const drawerStyle = StyleSheet.create({
	container: {
		flex: 1
	},
	profile: {
		height: 150,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
		marginBottom: 30
	},
	profileIcon: {
		height: 100,
		width: 100,
		borderRadius: 60
	},
	menu: {
		flex: 1,
		height: 60,
		marginLeft: 30,
	},
	menuItem: {
		marginBottom: 30
	},	
	menuIcon: {
		height: 30,
		width: 30
	},
	menuText: {
		fontSize: 15,
	}
})