import * as React from 'react';
import { AppRegistry, ToastAndroid } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import logo from '../assests/img/logo.png';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import type { Node } from 'react';
import { List } from 'react-native-paper';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styles from './Styles';
import { useState, useEffect, useContext } from 'react';
import { Switch } from 'react-native-paper';
import { Subheading, Avatar } from 'react-native-paper';
import AppBar from './AppBar';
import PageHeader from './PageHeader';
import Toast from './Toast';
import { UserContext } from '../context/userContext';




export default function NewListing({ accentColor, navigation, route, showToast, setIsUpdate }) {

  const userData = useContext(UserContext)
  //dropdown list variables


  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [itemData, setItemData] = useState({ title: "", weight: "0", amount: 0, listing: { title: "" } })

  const [ItemMaxBid, setItemMaxBid] = useState("KG")

  //new bid amount 
  const [bid, setBid] = useState()

  //current bid set by the user
  const [currentBid, setCurrentBid] = useState("545")

  //switch  variables
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    console.log(isSwitchOn);
  };
  const { isEditing, id, } = route.params;
  //const { itemData } = route.params;

  useEffect(() => {
    console.log("item" + id)
    const getData = async () => {
      const endpoint = `https://dispor-api.herokuapp.com/listings/${id}`
      const response = await fetch(endpoint, {
        method: "get",
        headers: {
          'Content-Type': 'application/json',
        }
      })

      const data = await response.json()
      setItemData(data)
      console.log(data)

    }

    /* 
     setItemTitle(title)
     setItemAmount(amount)
     setItemMaxBid(maxBid)
     setItemUnit(unit)
     setBid(currentBid)
     if (isEditing === true) {
       setBid(currentBid)
     }
     else {
       setBid(maxBid + 1)
     } */
    if (isEditing === false) {
      console.log(id)
      getData().catch(console.log)
      getBidData().catch(console.log)
    }
    else {
      editBidData().catch(console.log)
      getBidData().catch(console.log)

    }

  }, [])

  const editBidData = async () => {
    const response = await fetch(`https://dispor-api.herokuapp.com/bids/${id}`,
      {
        method: 'get', headers: {
          'Content-Type': 'application/json',
        }
      })
    const data = await response.json();
    console.log(data)
    setItemData(data)
    setBid(data.amount.toString())


  }
  //function for save edit data
  const handleSaveEdit = async () => {
    const response = await fetch(`https://dispor-api.herokuapp.com/bids/${id}`, {
      method: 'put', headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        listingId: itemData.listingId,
        userId: userData.userid,
        amount: bid,
        status: "ACTIVE",
      })


    })
    const data = await response.json()
    console.log(data)
    setIsUpdate(true)
    navigation.navigate("CollectorMode")
    showToast("Your changes has been saved")
  }

  const getBidData = async () => {
    const response = await fetch(`https://dispor-api.herokuapp.com/listings/${id}/bids`,
      {
        method: 'get', headers: {
          'Content-Type': 'application/json',
        }
      })

    const data = await response.json()
    console.log(data)
    const maxValueOfY = Math.max(...data.map(o => o.amount), 0);
    setItemMaxBid(maxValueOfY)
  }

  const handleNewBid = async () => {
    console.log("user id" + userData.userid)
    console.log("listing id" + id)
    const response = await fetch("https://dispor-api.herokuapp.com/bids", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        listingId: id,
        userId: userData.userid,
        amount: bid,
      })
    })

    const data = await response.json()
    console.log(data)
    navigation.navigate("CollectorMode")
    setIsUpdate(true)
    showToast("Your bid has been saved")
  }
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',

          height: "100%"

        }}>

        <PageHeader heading={" Your Bid"} subheading={"Put maximum bid amount you can to win"}
          height={"40%"} icon={"briefcase-upload"} />



        {/*textinputs*/}
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            margin: "5%",
            padding: '5%',


            backgroundColor: '#ededed',
            borderRadius: 30,



          }}

        >
          <Subheading style={{ fontSize: 20 }}>{(isEditing === true) ? itemData.listing.title : itemData.title}</Subheading>

          <Subheading style={{ fontSize: 20, fontWeight: '800' }}>{(isEditing === true) ? itemData.listing.weight : itemData.weight}g</Subheading>

          {(isEditing === false) ? <View><Subheading style={{ fontSize: 15, marginTop: 10 }}>Max Bid
          </Subheading>


            <Subheading style={{ color: accentColor, fontSize: 25, marginTop: 10, }}>
              {ItemMaxBid}LKR  <Avatar.Icon icon={"arrow-up-bold"} color={accentColor}
                size={40} style={{ backgroundColor: 'transparent' }} />
            </Subheading></View> : null}


          <TextInput
            style={styles.textBox} style={{ width: '100%', marginTop: '10%' }}
            label="Amount"
            placeholder="Enter your bid amount"
            underlineColor={accentColor}
            activeUnderlineColor={accentColor}
            value={bid}
            onChangeText={(text) => { setBid(text) }}
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
              onPress={() => handleSaveEdit()}
              style={styles.bidBtn}

              color={accentColor}>
              Edit Your Bid
            </Button> : <Button
              mode="contained"
              onPress={() => handleNewBid()}
              style={styles.bidBtn}
              color={accentColor}>
              Bid Now
            </Button>}
          </View>


        </ScrollView>

      </View>
    </>
  );
}
