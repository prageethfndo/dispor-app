import * as React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import logo from '../assests/img/logo.png';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import type {Node} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import styles from './Styles';
import { useState } from 'react';

export default function Register({accentColor, navigation,showToast}) {
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [contact, setContact] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const emailValidation = emailRegex.test(email);
  const passwordValidation = () => {
    if (password != confirmPassword || password.length < 10) {
      showToast("Check your password again")
      console.log(password.length)
      return false}
    else return true
  }
  const contactValidation=()=>{
    if(contact.length!=10 && isNaN(contact))
    {
      showToast("Invalid contact number")
      return false
    }
    else return true
  }

  
  const handleRegistration=async()=>{
  var passwordStatus = passwordValidation()
  var contactStatus = contactValidation()
    if(emailValidation && passwordStatus && contactStatus )
    {
      const response = await fetch("https://dispor-api.herokuapp.com/users",{
        method:"post",
        headers:{
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
          email: email,
          address: address,
          contact: contact,
          password:password
      })
      })

      const data = await response.json()
      console.log(data)
      showToast("Please Wait...")
      if(data.error)
      {
        showToast("Oops, Something went wrong")
      }
      else
      {
        navigation.navigate('Login')
      }

     
    }

    else
    {
      showToast("Oops! Please Check your inputs again")
    }
   
  }
  //styles are moved into Styles.js (global)
  return (
    <>
      <View
        style={styles.viewContainer}>
        <Image source={logo} style={styles.logo} />

        <Text style={styles.textHeading}>Get Registered!</Text>

        {/*textinputs*/}
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          style={{width: '100%'}}>
          <TextInput
            style={styles.textBox}
            label="Name"
            placeholder="Enter Your Name"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
            value={name}
            onChangeText={(text)=>{setName(text)}}
          />
          <TextInput
            style={styles.textBox}
            label="Email"
            placeholder="Enter Your Email"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
            value={email}
            onChangeText={(text)=>{setEmail(text)}}
          />
          <TextInput
            style={styles.textBox}
            label="Address"
            placeholder="Enter Your Address"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
            value={address}
            onChangeText={(text)=>{setAddress(text)}}
          />
          <TextInput
            style={styles.textBox}
            label="Contact"
            placeholder="Enter Your Contact Number"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
            value={contact}
            onChangeText={(text)=>{setContact(text)}}
    
          />
          <TextInput
            style={styles.textBox}
            label="Password (10 characters or more)"
            secureTextEntry
            placeholder="Enter Password"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
            value={password}
            onChangeText={(text)=>{setPassword(text)}}
          />
          <TextInput
            style={styles.textBox}
            label="Confirm Password"
            secureTextEntry
            placeholder="Enter Password Again"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
            value={confirmPassword}
            onChangeText={(text)=>{setConfirmPassword(text)}}
          />
          <Button
            mode="contained"
            onPress={() => handleRegistration()}
            style={styles.regBtn}
            color={accentColor}>
            Register
          </Button>

          <View style={styles.loginRow}>
            <Text style={styles.loginText}>Already a member?{''}</Text>
            <Button
              mode="text"
              onPress={() => navigation.navigate('Login')}
              color={accentColor}>
              LOGIN
            </Button>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
