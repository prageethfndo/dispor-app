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

export default function NewListing({accentColor, navigation, route}) {
  //dropdown list variables
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  //switch  variables
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    console.log(isSwitchOn);
  };
  const {isEditing} = route.params;
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '15%',
        }}>
        <Image source={logo} style={styles.logo} />

        <Text style={styles.textHeading}>Create an offer</Text>

        {/*textinputs*/}
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          style={{width: '100%'}}>
          <Subheading>Title</Subheading>
          <Text>'Waste item title here'</Text>
          <Subheading>Weight</Subheading>
          <Text>'weight here'</Text>
          <Subheading>Highest Bid Amount</Subheading>
          <Text>'Highest bid amount here'</Text>

          <TextInput
            style={styles.textBox}
            label="Amount"
            placeholder="Enter your bid amount"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
          />         
          
          {(isEditing==true) ? <Button
            mode="contained"
            onPress={() => navigation.navigate("CollectorMode")}
            style={styles.regBtn}
            color={accentColor}>
            Edit Your Bid
          </Button> : <Button
            mode="contained"
            onPress={() => navigation.navigate("CollectorMode")}
            style={styles.regBtn}
            color={accentColor}>
            Bid Now
          </Button>}
        </ScrollView>
      </View>
    </>
  );
}
