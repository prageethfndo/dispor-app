import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as React from 'react';
import Styles from './Styles';
import AppBar from './AppBar';
import Profile from './Profile';
import StatsCard from './StatsCard';
import { Subheading, FAB, Button } from 'react-native-paper';
import ItemCardCollector from './ItemCardCollector';

import { useEffect, useState, useContext } from 'react';
import ResponseData from '../temp/ResponseData'
import { transform } from '@babel/core';
import TabBar from './TabBar';
import { UserContext } from '../context/userContext';
import Spinner from './Spinner';

export default function CollectorMode({ accentColor, navigation, isUpdate, setIsUpdate }) {
    const [bidedItems, setBidedItems] = useState([])
    const [showSpinner, setShowSpinner]= useState("none")
    const [value1, setValue1]= useState(0)
    const [value2, setValue2] = useState(0)

    const userData = useContext(UserContext)
    const endpoint = `https://dispor-api.herokuapp.com/users/${userData.userid}/bids`
    // setBidedItems(ResponseData)
    
    const getUserBidList = async () => {
        setShowSpinner("flex")
        const response = await fetch(endpoint, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            }
        })
       
        const data = await response.json()

        setBidedItems(data)
        console.log(data)

        setShowSpinner("none")
      
      
    }


    useEffect(() => {
       


        getUserBidList().catch(console.log)


        console.log(bidedItems)
        setIsUpdate(false)

       
      
        
    }, [isUpdate])


    
  
   
     
        

    const computeStats = ()=>{
        bidedItems.forEach(element=>{
            sum+=element.amount
        })
        console.log("sum"+sum)
        setValue1(sum)

    }
    return (

        <View style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

            height: '100%'
        }} >
            <Profile username={userData.name} role={'collector'} toggle={true} value1={value1} value2={"200"}/>


            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', height: 80 }}>
                <Text style={{ marginTop: 20, fontSize: 20, color: '#000', marginBottom: 10 }} >Items you bid</Text>
                <Button icon="menu" mode="contained" onPress={() => navigation.navigate('Listings')} color={accentColor} style={Styles.newBtn}>
                    View all listings
                </Button>
            </View>

            <Spinner display={showSpinner}/>

            <ScrollView
                contentContainerStyle={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    minHeight: '100%',


                }}
                style={{ width: '100%', height: '90%' }}>

                {bidedItems.map((item) => {
                    return (
                        <ItemCardCollector key={item.id} title={item.listing.title} id={item.id}
                            amount={item.listing.weight} price={item.amount} status={item.status}
                            maxBid={item.maxBid}
                            listingId={item.listing.id}
                            isUpdate={isUpdate} setIsUpdate={setIsUpdate}
                            navigation={navigation}
                            newBid={false} setShowSpinner={setShowSpinner}/>)
                }
                )}



            </ScrollView>
            <TabBar navigation={navigation} role={'collector'} />

        </View>
    )
}