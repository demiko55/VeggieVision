import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import auth from '../../firebase';
import { signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/core';


const Welcome = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigation.navigate("SignIn");
    }).catch((error) => {
      // An error happened.
    });

  }

  return (
    <View style={styles.container}>
      <Image source = {require('../../assets/logo.png')} style = {{width:40, height:40, borderRadius:15}}/>
      <Text style={styles.textMargin}>Welcome to VeggieVersion</Text>
      <Text style={styles.textMargin}>Log in with your VeggieVersion account to continue</Text>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Login in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity> */}

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
    // backgroundColor: '#0782f9',
    backgroundColor: '#0ECC83',
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
  },
  textMargin:{
    marginTop:20,
    fontSize: 15,
    fontWeight:'500'
  }
});

export default Welcome;