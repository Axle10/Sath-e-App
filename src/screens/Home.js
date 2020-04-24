import React from 'react';
import { View, Text, Button } from 'react-native';

import Welcome from '../components/Welcome';

function HomeScreen({ navigation }) {
    return (
        <View style={{ height: 100 }}>
            <Welcome navigation={navigation} />
        </View>
    );
}


export default HomeScreen;