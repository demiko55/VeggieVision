import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { useNavigation } from '@react-navigation/core';
import auth from '../../firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IOS_CLIENT_ID, WEB_CLIENT_ID, ANDRIOD_CLIENT_ID } from '@env'




WebBrowser.maybeCompleteAuthSession();

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [userInfo, setUserInfo] = useState(null);

  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   androidClientId: ANDRIOD_CLIENT_ID,
  //   iosClientId: IOS_CLIENT_ID,
  //   webClientId: WEB_CLIENT_ID
  // })


  const navigation = useNavigation();


  useEffect(() => {
    // email pw sign in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('user', user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        //const uid = user.uid;
        navigation.navigate("HomeScreen");
      } else {
        // User is signed out
        // ...
      }
      return unsubscribe;
    });

  }, []);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Sign in with:', user.email);
        // ...
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage.split(':')[1]);
      });
  }

  // useEffect(() => {
  //   handleSignInWithGoogle();
  // }, [response]);

  // const handleSignInWithGoogle = async () => {
  //   const user = await AsyncStorage.getItem("@user");
  //   if (!user) {
  //     if (response?.type === "success") {
  //       await getUserInfo(response.authentication?.accessToken);
  //     }
  //   } else {
  //     setUserInfo(JSON.parse(user));
  //   }
  // }
  // //delete local storage
  // const handleDeleteLocalStorage = async () => {
  //   console.log('here???');
  //   const user = await AsyncStorage.removeItem("@user");
  //   console.log("user after delete local storage", user);
  // }
  // const getUserInfo = async (token: any) => {
  //   if (!token) return;
  //   try {
  //     const response = await fetch(
  //       "https://www.googleapis.com/userinfo/v2/me", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //     );
  //     const user = await response.json();
  //     await AsyncStorage.setItem("@user", JSON.stringify(user));
  //     setUserInfo(user);
  //   } catch (error) {

  //   }
  // }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={require('../../assets/logo.png')} style={{ width: 40, height: 40, borderRadius: 15 }} />
      <Text style={styles.textMargin}>Welcome Back</Text>
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
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ textAlign: 'center', marginTop: 12 }}>Don't have an account?{' '}
          <Text onPress={() => { navigation.navigate("SignUp"); }} style={{ color: 'blue' }}>Sign up</Text>
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
        <Text>{JSON.stringify(userInfo)}</Text>
        <TouchableOpacity onPress={() => promptAsync()} style={{ backgroundColor: '#db4a39', borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: 8, marginTop: 15, width: 230 }}>
          <Icon name="google" size={15} color="#fff" style={{ marginRight: 22 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#4267B2', borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: 8, marginTop: 15, width: 230 }}>
          <Icon name="facebook" size={15} color="#fff" style={{ marginRight: 22 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>Sign in with Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#1DA1F2', borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: 8, width: 230, marginTop: 15 }}>
          <Icon name="twitter" size={15} color="#fff" style={{ marginRight: 22 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>Sign in with Twitter</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSignOutWithGoogle()}><Text>sign out with google</Text></TouchableOpacity>

      </View>


    </KeyboardAvoidingView >

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
  textMargin: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 20
  }


});
export default SignIn;