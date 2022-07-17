import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as React from 'react';
import Styles from './Styles';
import AppBar from './AppBar';
import Profile from './Profile';
import StatsCard from './StatsCard';
import { Subheading, FAB, Button } from 'react-native-paper';
import ItemCardCollector from './ItemCardCollector';
import ResponseData from '../temp/ResponseData';
import { useState, useEffect } from 'react';



export default function Listings({ navigation }) {
    const [itemList, setItemList] = useState([])
    useEffect(() => {
        setItemList(ResponseData)
        const endpoint="https://dispor-api.herokuapp.com/listings";

        const getListings= async()=>{
            const response = await fetch(endpoint,{
                headers:{
                    'Content-Type': 'application/json',
                },
                method:'get'
            })

            const data = await response.json()
            console.log(data)
            setItemList(data)


        }
        getListings().catch(console.log)
    },[])
    return (
        <View
            style={Styles.viewContainer} style={{ paddingBottom: '2%' }}>
        
            <ScrollView contentContainerStyle={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',

            }} style={{ width: '100%' }}>


                {itemList.map((item) => {
                    return (
                        <ItemCardCollector key={item.id} id={item.id} title={item.title}
                            amount={item.weight} price={item.price} 
                            maxBid={item.maxBid}
                            status={item.status}
                            navigation={navigation}
                            listingId={item.id}
                            newBid={true}
                        />)

                })}




            

            </ScrollView>
        </View>
    )
}