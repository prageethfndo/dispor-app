import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import logo from '../assests/img/logo.png';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import type { Node } from 'react';
import { List } from 'react-native-paper';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styles from './Styles';
import { useState } from 'react/cjs/react.production.min';
import { Switch } from 'react-native-paper';
import { Subheading } from 'react-native-paper';
import { NavigationContainer, useLinkProps, route } from '@react-navigation/native';

export default function NewListing({ accentColor, navigation, route }) {
  //dropdown list variables
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  //switch  variables
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    console.log(isSwitchOn);
  };
  const { isEditing,
    id,
    title,
    amount,
    price,
    status,
    maxBid, unit } = route.params;
    console.log(id)
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
         
        }}>
        
        <Text style={styles.textHeading}> {(isEditing)? 'Edit your listing' : 'Create a new Listing'}</Text>

        {/*textinputs*/}
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          style={{ width: '100%' }}>
          <TextInput
            style={styles.textBox}
            label="Title"
            placeholder="Tell us what you are disposing"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
            value={title}
          />

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
            value={amount}
          />
          <Text style={{ marginTop: 20 }}>You will earn</Text>
          <Subheading>{price} LKR</Subheading>

          {(isEditing == true) ?
            <Button
              mode="contained"
              onPress={() => navigation.navigate("SellerMode")}
              style={styles.regBtn}
              color={accentColor}>
              Edit Listing
            </Button> : <Button
              mode="contained"
              onPress={() => navigation.navigate("SellerMode")}
              style={styles.regBtn}
              color={accentColor}>
              Create Listing
            </Button>}

        </ScrollView>
      </View>
    </>
  );
}
