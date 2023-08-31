import React, {useState} from 'react';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./components/screens/Home";
import SignIn from './components/screens/SignIn';
import Welcome from './components/screens/Welcome';
import SignUp from './components/screens/SignUp';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Welcome" component={ Welcome} options={{ headerShown: false }}/>
        <Stack.Screen name = "SignIn" component={SignIn} options={{ headerShown: false }}/>
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name = "SignUp" component={SignUp} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

