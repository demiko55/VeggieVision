import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import auth from '../../firebase';
import { signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/core';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeTab from '../TabScreen/HomeTab';
import SearchTab from '../TabScreen/SearchTab';
import FavoritesTab from '../TabScreen/FavoritesTab';
import ProfileTab from '../TabScreen/ProfileTab';



const HomeScreen = () => {
  const navigation = useNavigation();

  const Tab = createBottomTabNavigator();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigation.navigate("Welcome");
    }).catch((error) => {
      // An error happened.
    });

  }
  return (
    // <View style={styles.container}>
    //   <Text>Email: {auth.currentUser?.email}</Text>
    //   <TouchableOpacity style={styles.button} onPress={handleSignOut}>
    //     <Text style={styles.buttonText}>Sign out</Text>
    //   </TouchableOpacity>

    //   <StatusBar style="auto" />
    // </View>
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'search' : 'search-outline';
        } else if(route.name === 'Favorites'){
          iconName = focused ? 'heart' : 'heart-outline';
        } else{
          iconName = focused ? 'person' : 'person-outline';
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'grey',
    })}
    >
      <Tab.Screen name="Home" component={HomeTab} options={{ headerShown: false }}/>
      <Tab.Screen name="Search" component={SearchTab} options={{ headerShown: false }}/>
      <Tab.Screen name="Favorites" component={FavoritesTab} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={ProfileTab} options={{ headerShown: false }}/>
    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782f9',
    width: '60%',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 40
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  }
});

export default HomeScreen;