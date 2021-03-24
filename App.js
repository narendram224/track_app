// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './src/screen/SignupScreen';
import SigninScreen from './src/screen/SignInScreen';
import DashBoardScreen from './src/screen/DashBoardScreen';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={SignupScreen}  />
        <Stack.Screen name="Signin" component={SigninScreen} />
        {/* options={{headerShown: false}} */}
        <Stack.Screen name="DashBoard" component={DashBoardScreen} options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;