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
import { useState } from 'react';
import { Switch } from 'react-native-paper';
import { DataTable, Subheading, Appbar,FAB } from 'react-native-paper';
import AppBar from './AppBar';



export default function Register({ accentColor }) {
  //dropdown state
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);

  //switch  state
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    console.log(isSwitchOn);
  };

  return (
    <>
      <View
        style={styles.viewContainer}>
        <AppBar title={'Item Details'} backAction={()=>{console.log('bac')}} />
        <DataTable style={styles.dataTable}>
          <DataTable.Row>
            <DataTable.Cell>ITEM NAME</DataTable.Cell>
            <DataTable.Cell numeric>Status: STATUS</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>ITEM WEIGHT</DataTable.Cell>
            <DataTable.Cell numeric>Highest Bid: 1000000LKR</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>PRICE</DataTable.Cell>
          </DataTable.Row>
        </DataTable>

        <Subheading style={{ marginTop: 20, fontWeight:'900' }}>BIDS</Subheading>
        {/*bids*/}
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          style={{ width: '100%' }}>
          <DataTable style={styles.dataTable}>
            <DataTable.Row>
              <DataTable.Cell>BIDDER NAME</DataTable.Cell>
              <DataTable.Cell numeric>VALUE</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>BIDDER NAME</DataTable.Cell>
              <DataTable.Cell numeric>VALUE</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>BIDDER NAME</DataTable.Cell>
              <DataTable.Cell numeric>VALUE</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>BIDDER NAME</DataTable.Cell>
              <DataTable.Cell numeric>VALUE</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>BIDDER NAME</DataTable.Cell>
              <DataTable.Cell numeric>VALUE</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </ScrollView>
        <TextInput
          style={styles.textBox}
          label="Amount"
          placeholder="Place Your Bid"
          underlineColor={accentColor}
          activeUnderlineColor={accentColor}
        />
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.regBtn}
          color={accentColor}>
          Bid Now
        </Button>
      </View>
    </>
  );
}
