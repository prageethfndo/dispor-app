import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as React from 'react';
import Styles from './Styles';
import AppBar from './AppBar';
import Profile from './Profile';
import StatsCard from './StatsCard';
import { Subheading, FAB, Button } from 'react-native-paper';
import ItemCardCollector from './ItemCardCollector';
export default function CollectorMode({ accentColor, navigation }) {
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
                <ItemCardCollector title={'50 bottles for in Pannipitiya'}
                    amount={'50 KG'} price={'5000'} status={'Active'}                    
                    maxBid={'5963'}
                    navigation = {navigation} 
                    newBid={false}/>
                <ItemCardCollector title={'50 bottles for in Pannipitiya'}
                    amount={'50 KG'} price={'5000'} status={'Active'}
                    maxBid={'5963'} 
                    navigation = {navigation}
                    newBid={false}/>
                <ItemCardCollector title={'50 bottles for in Pannipitiya'}
                    amount={'50 KG'} price={'5000'} status={'Active'}
                    maxBid={'5963'} 
                    navigation = {navigation}
                    newBid={false}/>
                <ItemCardCollector title={'50 bottles for in Pannipitiya'}
                    amount={'50 KG'} price={'5000'} status={'Active'}
                    maxBid={'5963'} 
                    navigation = {navigation}
                    newBid={false}/>
                <ItemCardCollector title={'50 bottles for in Pannipitiya'}
                    amount={'50 KG'} price={'5000'} status={'Active'}
                    maxBid={'5963'} 
                    navigation = {navigation}
                    newBid={false}/>

            </ScrollView>

        </View>
    )
}