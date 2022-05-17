import * as React from 'react';

import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import logo from '../assests/img/logo.png';
import { Button, Switch, TextInput } from 'react-native-paper';
import type { Node } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './Styles'
import { useState } from 'react';

export default function Register({ accentColor }) {


  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [mode, setMode] = useState("collector")
  const [collectorMode, setCollectorMode] = useState("black")
  const [buyerMode, setbuyerMode] = useState("black")


  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn)

    if (mode === "collector") {
      setMode("buyer")
      setbuyerMode(accentColor)
      setCollectorMode('black')
    }
    else if (mode === "buyer") {
      setMode("collector")
      setCollectorMode(accentColor)
      setbuyerMode('black')
    }
    
  };


  //styles are moved into Styles.js (global) 
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

        <View style={styles.loginRow}>

          <Text style={styles.loginText} style={{color:collectorMode}}>
            Collector Mode &nbsp;
          </Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={accentColor} />
          <Text style={styles.loginText} style={{color:buyerMode}}>
            &nbsp; Buyer Mode
          </Text>
        </View>


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
