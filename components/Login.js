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

export default function Register({ accentColor, navigation }) {


  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [mode, setMode] = useState("collector")

  const [collectorMode, setCollectorMode] = useState("black")
  const [sellerMode, setSellerMode] = useState("black")


  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn)

    if (mode === "collector") {
      setMode("seller")
      setSellerMode(accentColor)
      setCollectorMode('black')
    }
    else if (mode === "seller") {
      setMode("collector")
      setCollectorMode(accentColor)
      setSellerMode('black')
    }

  };

  const LoginRouter=()=>{
    console.log(mode)
    if(mode==='collector')
    {navigation.navigate('CollectorMode')}
    else if (mode==='seller'){navigation.navigate('SellerMode')}
  }


  //styles are moved into Styles.js (global) 
  return (
    <>
      <View
        style={styles.viewContainer}>

        <Image source={logo} style={styles.logo} />

        <Text style={styles.textHeading}>Login</Text>

        <View style={styles.loginRow}>

          <Text style={styles.loginText} style={{ color: collectorMode }}>
            Collector Mode &nbsp;
          </Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={accentColor} />
          <Text style={styles.loginText} style={{ color: sellerMode }}>
            &nbsp; Seller Mode
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
          underlineColor={'transparent'}
          activeUnderlineColor={accentColor}
        />
        <Button
          mode="contained"
          onPress={() => LoginRouter()}
          style={styles.regBtn} color={accentColor}>
          LOGIN
        </Button>

        <View style={styles.loginRow}>

          <Text style={styles.loginText}>
            Not a registered member?{''}

          </Text>
          <Button 
          onPress={() => (navigation.navigate('Register'))}
          mode="text" color={accentColor}>
            Register
          </Button>
        </View>


      </View>
    </>
  );
}
