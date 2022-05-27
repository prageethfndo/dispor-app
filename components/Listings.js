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
    })
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
                        <ItemCardCollector key={item.id} title={item.title}
                            amount={item.amount + item.unit} price={item.price} 
                            maxBid={item.maxBid}
                            status={item.status}
                            navigation={navigation}
                            newBid={true}
                        />)

                })}




            

            </ScrollView>
        </View>
    )
}