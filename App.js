import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, StatusBar, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import HomeScreen from './src/screens/Home';
import Login from './src/screens/Login';
import Otp from './src/screens/Otp';
import ValidateOtp from './src/screens/ValidateOtp';
import Register from './src/screens/Register';

// Authenticated Screens
import Dashboard from './src/screens/Dashboard';

const Stack = createStackNavigator();

var isLoggedIn = null;
class AuthLoadingScreen extends React.Component {

    componentDidMount() {
        this.loadData();
    }
  
    // Fetch the token from storage then navigate to our appropriate place
    loadData = async () => {
        const token = await AsyncStorage.getItem('token');
        if(token == null) {
            isLoggedIn = false;
            this.props.navigation.navigate('Home');
        }
        else {
            isLoggedIn = true;
            this.props.navigation.navigate('Dashboard');
        }
        // this.props.navigation.navigate('Home');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
  }
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AuthLoading" screenOptions={{ headerShown: false}} >
                <Stack.Screen name="Otp" component={Otp} />
                <Stack.Screen name="ValidateOtp" component={ValidateOtp} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Dashboard" component={Dashboard} screenOptions={{ headerShown: true}}/>                
                <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});