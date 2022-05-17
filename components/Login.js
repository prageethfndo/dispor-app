import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import logo from '../assests/img/logo.png';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import type { Node } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Register({accentColor}) {
  
  const styles = StyleSheet.create({
    logo: {
      //styles for logo here
      margin: 40,
    },
    textBox: {
      height: 60,
      width: '90%',
      marginTop: 15,
    },
    regBtn: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: '90%',
      marginTop: 15,
    },
    loginText: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      

    },
    loginRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:20

    },
    link:{
      color:'#038a37'
    },
    textHeading:{
      fontSize:25
    }
  });

  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image source={logo} style={styles.logo} />

        <Text style={styles.textHeading}>Login</Text>


        {/*textinputs*/}
        <TextInput
          style={styles.textBox}
          label="Email"
          placeholder="Enter Your Email"
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
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.regBtn} color={accentColor}>
          LOGIN
        </Button>

        <View style={styles.loginRow}>

          <Text style={styles.loginText}>
            Not a registered member?{''}

          </Text>
          <Button mode="text" onPress={() => console.log('Pressed')} color={accentColor}>
            Register
          </Button>
        </View>


      </View>
    </>
  );
}
