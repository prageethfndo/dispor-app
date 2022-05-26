import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as React from 'react';
import Styles from './Styles';
import AppBar from './AppBar';
import Profile from './Profile';
import StatsCard from './StatsCard';
import { Subheading, FAB, Button } from 'react-native-paper';
import ItemCard from './ItemCard';
import { useState } from 'react/cjs/react.production.min';
export default function SellerMode({ accentColor, navigation }) {

    const editItem = (isEditing) => {
        navigation.navigate('NewListing', {isEditing:isEditing})                
    }


    return (
        <View style={Styles.viewContainer}>
            <Profile username={'Kumara'} role={'seller'} />


            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', height: 80 }}>
                <Text style={{ marginTop: 20, fontSize: 20, color: '#000', marginBottom: 10 }} >Your items on sale</Text>
                <Button icon="plus" mode="contained" onPress={() => navigation.navigate('NewListing', {isEditing:false})} color={accentColor} style={Styles.newBtn}>
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
                <ItemCard title={'5 bottles for in Pannipitiya'}
                    amount={'50 KG'} price={'5000'} status={'Active'}
                    maxBid={'5963'} editCard={editItem} />

                <ItemCard title={'50 bottles for in Pannipitiya'}
                    amount={'50 KG'} price={'5000'} status={'Active'}
                    maxBid={'5963'} editCard={editItem}/>

                <ItemCard title={'50 bottles for in Pannipitiya'}
                    amount={'50 KG'} price={'5000'} status={'Active'}
                    maxBid={'5963'} editCard={editItem} />

                <ItemCard title={'50 bottles for in Pannipitiya'}
                    amount={'50 KG'} price={'5000'} status={'Active'}
                    maxBid={'5963'} editCard={editItem} />

                <ItemCard title={'50 bottles for in Pannipitiya'}
                    amount={'50 KG'} price={'5000'} status={'Active'}
                    maxBid={'5963'} editCard={editItem} />





            </ScrollView>

        </View>
    )
}