import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {useNavigation } from '@react-navigation/core';
import auth from '../../firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        //const uid = user.uid;
        navigation.navigate("Home");
      } else {
        // User is signed out
        // ...
      }
      return unsubscribe;
    });

  }, []);

  const handleSignUp = () => {
    console.log('here???');
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log('sign up with email:', user.email);
        // ...
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage.split(':')[1]);
      });
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={require('../../assets/logo.png')} style={{ width: 40, height: 40, borderRadius: 15}} />
      <Text style={styles.textMargin}>Create your account</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder='Password'
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

      </View>
      <View>
        <Text style={{ textAlign: 'center', marginTop:12 }}>Already have an account?{' '}
          <Text onPress={() => { navigation.navigate("SignIn"); }} style={{ color: 'blue' }}>Log in</Text>
        </Text>

      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '60%', justifyContent: 'center', marginTop: 35, marginBottom: 20 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        <View>
          <Text style={{ textAlign: 'center' }}>OR</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
      </View>

      <View>
        <TouchableOpacity style={{ backgroundColor: '#db4a39', borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: 8, marginTop: 15, width:230 }}>
          <Icon name="google" size={15} color="#fff" style={{ marginRight: 22 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#4267B2', borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: 8, marginTop: 15, width:230 }}>
          <Icon name="facebook" size={15} color="#fff" style={{ marginRight: 22 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: '#1DA1F2', borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: 8, width: 230, marginTop: 15 }}>
          <Icon name="twitter" size={15} color="#fff" style={{ marginRight: 22 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>Continue with Twitter</Text>
          </View>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '60%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0ECC83',
    width: '100%',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
  textMargin:{
    marginTop: 10,
    fontSize: 15,
    fontWeight:'500',
    marginBottom: 20
  }


});
export default SignUp;