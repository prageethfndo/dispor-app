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

export default function Register({accentColor}) {
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
          />
          <TextInput
            style={styles.textBox}
            label="Email"
            placeholder="Enter Your Email"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
          />
          <TextInput
            style={styles.textBox}
            label="Address"
            placeholder="Enter Your Address"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
          />
          <TextInput
            style={styles.textBox}
            label="Contact"
            placeholder="Enter Your Contact Number"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
          />
          <TextInput
            style={styles.textBox}
            label="Password"
            secureTextEntry
            placeholder="Enter Password"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
          />
          <TextInput
            style={styles.textBox}
            label="Confirm Password"
            secureTextEntry
            placeholder="Enter Password Again"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
          />
          <Button
            mode="contained"
            onPress={() => console.log('Pressed')}
            style={styles.regBtn}
            color={accentColor}>
            Register
          </Button>

          <View style={styles.loginRow}>
            <Text style={styles.loginText}>Already a member?{''}</Text>
            <Button
              mode="text"
              onPress={() => console.log('Pressed')}
              color={accentColor}>
              LOGIN
            </Button>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
