import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import auth from '../../firebase';
import { signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/core';


const Home = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigation.navigate("Welcome");
    }).catch((error) => {
      // An error happened.
    });

  }
  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
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

export default Home;