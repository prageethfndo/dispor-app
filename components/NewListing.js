import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { List } from 'react-native-paper';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styles from './Styles';
import { useEffect, useState, useContext } from 'react';
import { Switch } from 'react-native-paper';
import { Subheading } from 'react-native-paper';

import { UserContext } from '../context/userContext';


export default function NewListing({ accentColor, navigation, route, showToast, setIsUpdate }) {

  const userData = useContext(UserContext)

  //dropdown list variables
  const [expanded, setExpanded] = useState(false);
  const [type, setType] = useState('Select ')
  const handlePress = () => setExpanded(!expanded);
  const [typeList, setTypeList] = useState(['Jar'])

  
  const [title, setTitle]= useState("")
  const [weight, setWeight]= useState(0)
  const [price, setPrice] = useState(0)
  const [qtyMode, setQtyMode] = useState("units")
  const [unitPrice, setUnitPrice] = useState(0)

  const handleUnitOptionSelection = (type, unitPrice) => {
    console.log(type + unitPrice)
    setType(type)
    setUnitPrice(unitPrice)
    setExpanded(false)
  }
  //switch  variables
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  if(isSwitchOn) setQtyMode("weight")
  else setQtyMode("units")
    //console.log(isSwitchOn);
    //console.log(qtyMode)
  };

  const {
    isEditing,
    id } = route.params;
  
  const endpoint = `https://dispor-api.herokuapp.com/listings/${id}`;
  useEffect(() => {
    console.log(isSwitchOn)
    const getData = async () => {
     
      const response = await fetch(endpoint, {
        method: 'get', headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      //setItemList(data)
      setTitle(data.title)
      setWeight(data.weight)
      setPrice(data.price)
      console.log(data)
      
    }

    const getItems = async()=>{

      const response = await fetch("https://dispor-api.herokuapp.com/items", {
        method: 'get', headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      //setItemList(data)
      setTypeList(data)
      
      console.log(data)
    }

    if(isEditing)getData().catch(console.log)
    getItems().catch(console.log)
  },[])

  const editItem= async ()=>{
   
    const response = await fetch(endpoint,{
      method:'put',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        userId: userData.userid,
				title: title,
				description: "",
				weight: weight,
				price: price
      })
    })

    const data = await response.json()
    console.log(data)
    //console.log(weight)
    showToast("Item Updated")
    navigation.navigate("SellerMode")
    setIsUpdate(true)
  }


  const createListing= async()=>{
    const response = await fetch("https://dispor-api.herokuapp.com/listings",{
      method:'post',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userData.userid,
				title: title,
				description: "",
				weight: weight,
				price: price
      })
    })

    const data = await response.json()
    console.log(data)
    navigation.navigate("SellerMode")
    showToast("Listing has been created")
    setIsUpdate(true)
  }

  useEffect(()=>{
    const computePrice=(text)=>{
      //setWeight(text)
     var finalPrice = unitPrice*weight;
     console.log(finalPrice)
     //console.log(weight)
      setPrice(finalPrice)    
  
    }

    computePrice()
  },[weight])
  

  

  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: "100%"

        }}>

        <Text style={styles.textHeading}> {(isEditing) ? 'Edit your listing' : 'Create a new Listing'}</Text>

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
            onChangeText={text=>{setTitle(text)}}
            
          />

          <List.Section style={{ width: '100%', }}>
            <List.Accordion
              title={type}
              expanded={expanded}
              onPress={handlePress}
              style={styles.dropList}>



              {typeList.map((item) => {
                return (
                  <List.Item title={item.name} key={Math.random()}
                    onPress={() => { handleUnitOptionSelection(item.name, item.unitPrice) }} />)
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
            <Text style={styles.loginText}>&nbsp; Weight (grams)</Text>
          </View>

          <TextInput
            style={styles.textBox}
            label={`Quantity`}
            placeholder="Enter Waste Quantity"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
            value={weight.toString()}
            onChangeText={text=>{setWeight(text)}}
          />
          <Text style={{ marginTop: 20 }}>You will earn</Text>
          <Subheading>{price} LKR</Subheading>

          {(isEditing == true) ?
            <Button
              mode="contained"
              onPress={() => editItem()}
              style={styles.regBtn}
              color={accentColor}>
              Edit Listing
            </Button> : <Button
              mode="contained"
              onPress={() => createListing()}
              style={styles.regBtn}
              color={accentColor}>
              Create Listing
            </Button>}

        </ScrollView>
      </View>
    </>
  );
}
