import * as React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import logo from '../assests/img/logo.png';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import type {Node} from 'react';
import {List} from 'react-native-paper';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import styles from './Styles';
import {useState} from 'react/cjs/react.production.min';
import {Switch} from 'react-native-paper';
import {Subheading} from 'react-native-paper';

export default function Register({accentColor}) {
  //dropdown list variables
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  //switch  variables
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    console.log(isSwitchOn);
  };

  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '30%',
        }}>
        <Image source={logo} style={styles.logo} />

        <Text style={styles.textHeading}>Create a listing</Text>

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
            label="Title"
            placeholder="Tell us what you are disposing"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
          />

          {/* savendra meka poddk awul oi */}
          <List.Accordion
            title="Type"
            expanded={expanded}
            onPress={handlePress}                                    
            style={styles.dropList}>
            <List.Item title="Plastic" />
            <List.Item title="Glass" />
          </List.Accordion>

          <View style={styles.loginRow}>
            <Text style={styles.loginText}>Units &nbsp;</Text>
            <Switch
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
              color={accentColor}
            />
            <Text style={styles.loginText}>&nbsp; Weight</Text>
          </View>

          <TextInput
            style={styles.textBox}
            label="Quantity"
            placeholder="Enter Waste Quantity"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
          />
          <Text style={{marginTop: 20}}>You will earn</Text>
          <Subheading>AMOUNT</Subheading>
          <Button
            mode="contained"
            onPress={() => console.log('Pressed')}
            style={styles.regBtn}
            color={accentColor}>
            Create Listing
          </Button>
        </ScrollView>
      </View>
    </>
  );
}
