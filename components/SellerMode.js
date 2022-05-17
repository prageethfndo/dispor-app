import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as React from 'react';
import Styles from './Styles';
import AppBar from './AppBar';
import Profile from './Profile';
import StatsCard from './StatsCard';
import { Subheading, } from 'react-native-paper';
import ItemCard from './ItemCard';
export default function SellerMode() {
    return (
        <View style={Styles.viewContainer}>
            <Profile username={'Kumara'} />

            <View style={Styles.cardRow}>
                <StatsCard title={'Earnings'} value={'546574545 LKR'} />
                <StatsCard title={'Sold'} value={'500 KG'} />
            </View>


            <Subheading style={{ marginTop: 20 }} >You items on sale</Subheading>

            <ScrollView
                contentContainerStyle={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                style={{ width: '100%' }}>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
            </ScrollView>

        </View>
    )
}