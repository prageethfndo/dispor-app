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
import { Subheading } from 'react-native-paper';
import { NavigationContainer, useLinkProps, route } from '@react-navigation/native';

export default function NewListing({ accentColor, navigation, route }) {
  //dropdown list variables
  const [expanded, setExpanded] = useState(false);
  const [type,setType] = useState('Plastic')
  const handlePress = () => setExpanded(!expanded);
  const [typeList, setTypeList] =useState(['Plastic', 'Metal', 'Glass'])

  const handleUnitOptionSelection = (type) => {
    console.log(type.item)
    setType(type.item)
    setExpanded(false)
  }
  //switch  variables
  const [isSwitchOn, setIsSwitchOn] =useState(false);
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
          width:"100%"
         
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

          <List.Section style={{width:'100%', }}>
            <List.Accordion
              title={type}
              expanded={expanded}
              onPress={handlePress}
              style={styles.dropList}>
                

                
                {typeList.map((item)=>{
                  return(
                  <List.Item title={item} key={Math.random()} 
                  onPress={()=>{handleUnitOptionSelection({item})}} />)
                })}
             
            
            </List.Accordion>
          </List.Section>

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
