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
import { useState, useEffect } from 'react';
import { Switch } from 'react-native-paper';
import { Subheading } from 'react-native-paper';






export default function NewListing({ accentColor, navigation, route }) {


  //dropdown list variables

  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [ItemTitle, setItemTitle] = useState("")
  const [ItemAmount, setItemAmount] = useState(0)

  const [ItemUnit, setItemUnit] = useState("KG")
  const [ItemMaxBid, setItemMaxBid] = useState("KG")

  //new bid amount 
  const [bid, setBid] = useState("0")

  //current bid set by the user
  const [currentBid, setCurrentBid] = useState("545")

  //switch  variables
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    console.log(isSwitchOn);
  };
  const { isEditing,
    title,
    amount,
    price,
    unit,
    status,
    maxBid } = route.params;
  //const { itemData } = route.params;

  useEffect(() => {
    if (isEditing === true) {
      setItemTitle(title)
      setItemAmount(amount)
      setItemMaxBid(maxBid)
      setItemUnit(unit)
      setBid(currentBid)
    }
  }, [])
  console.log(title)
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



        {/*textinputs*/}
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: 15,
            height: '100%',

          }}
          style={{ width: '100%' }}>
          <Subheading style={{ fontSize: 20 }}>{ItemTitle}</Subheading>

          <Subheading style={{ fontSize: 20, fontWeight: '800' }}>{ItemAmount} {ItemUnit}</Subheading>

          <Subheading style={{ fontSize: 15, marginTop: 10 }}>Max Bid</Subheading>
          <Subheading style={{ color: accentColor, fontSize: 25, marginTop: 10 }}>{ItemMaxBid}LKR</Subheading>


          <TextInput
            style={styles.textBox} style={{ width: '100%', marginTop:'10%' }}
            label="Amount"
            placeholder="Enter your bid amount"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
            value={bid}
          />
          <View style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'

          }}>
            {(isEditing == true) ? <Button
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
          </View>
        </ScrollView>
      </View>
    </>
  );
}
