import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as React from 'react';
import Styles from './Styles';
import AppBar from './AppBar';
import Profile from './Profile';
import StatsCard from './StatsCard';
import { Subheading, FAB, Button } from 'react-native-paper';

import ItemCard from './ItemCard';
import { useEffect, useState,useContext } from 'react';
import ResponseData from '../temp/ResponseData';
import TabBar from './TabBar';
import { UserContext } from '../context/userContext';


export default function SellerMode({ accentColor, navigation }) {

    const userData = useContext(UserContext)

    const [itemList, setItemList] = useState([])


    const userid=userData.userid;
    useEffect(() => {


        // setItemList(ResponseData)
        const getData = async () => {
            const endpoint = `https://dispor-api.herokuapp.com/users/${userid}/listings`;
            const response = await fetch(endpoint, {
                method: 'get', headers: {
                    'Content-Type': 'application/json',
                },
            })
               const data = await response.json()
               setItemList(data)
               console.log(data)
        }
            
        getData().catch(console.log)

    }, [itemList])

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

            height: '100%'
        }}>
            <Profile username={'Kumara'} role={'seller'} toggle={true} />


            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', height: 80 }}>
                <Text style={{ marginTop: 20, fontSize: 20, color: '#000', marginBottom: 10 }} >Your items on sale</Text>
                <Button icon="plus" mode="contained" onPress={() => navigation.navigate('NewListing', { isEditing: false })} color={accentColor} style={Styles.newBtn}>
                    New Item
                </Button>
            </View>



            <ScrollView
                contentContainerStyle={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: 100
                }}
                style={{ width: '100%' }}>

                {itemList.map((item) => {
                    return (
                        <ItemCard key={item.id} id={item.id} title={item.title}
                            amount={item.weight} price={item.price} status={item.status}
                            maxBid={item.maxBid} navigation={navigation}  />
                    )
                })}







            </ScrollView>
            <TabBar navigation={navigation} role={'seller'} />

        </View>
    )
}