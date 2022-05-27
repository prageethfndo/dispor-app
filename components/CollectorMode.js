import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as React from 'react';
import Styles from './Styles';
import AppBar from './AppBar';
import Profile from './Profile';
import StatsCard from './StatsCard';
import { Subheading, FAB, Button } from 'react-native-paper';
import ItemCardCollector from './ItemCardCollector';

import { useEffect, useState } from 'react';
import ResponseData from '../temp/ResponseData'

export default function CollectorMode({ accentColor, navigation }) {
    const [bidedItems, setBidedItems] = useState([])

    useEffect(() => {
        setBidedItems(ResponseData)

    }, [])

    return (

        <View style={Styles.viewContainer}>
            <Profile username={'Kumara'} role={'collector'} />


            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', height: 80 }}>
                <Text style={{ marginTop: 20, fontSize: 20, color: '#000', marginBottom: 10 }} >Items you bid</Text>
                <Button icon="menu" mode="contained" onPress={() => navigation.navigate('Listings')} color={accentColor} style={Styles.newBtn}>
                    View all listings
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

                {bidedItems.map((card) => {
                    return (
                        <ItemCardCollector key={card.id} title={card.title}
                            amount={card.amount} price={card.price} status={card.status}
                            maxBid={card.maxBid}
                            unit={card.unit}
                            navigation={navigation}
                            newBid={false} />)
                }
                )}



            </ScrollView>
          
        </View>
    )
}