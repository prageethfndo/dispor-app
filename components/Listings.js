import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as React from 'react';
import Styles from './Styles';
import AppBar from './AppBar';
import Profile from './Profile';
import StatsCard from './StatsCard';
import { Subheading, FAB, Button } from 'react-native-paper';
import ItemCardCollector from './ItemCardCollector';

export default function Listings({navigation}) {
    return (
        <View
            style={Styles.viewContainer} style={{paddingBottom:'15%'}}>
            <AppBar title={'All Listings '} backAction={() => { console.log('pressed') }} />
            <ScrollView contentContainerStyle={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            
            }} style={{ width: '100%' }}>

                <ItemCardCollector title={'50 bottles for in Pannipitiya'}
                    amount={'50 KG'} price={'5000'} status={'Active'}
                    maxBid={'5963'}  
                    navigation = {navigation} 
                    newBid={true}             
                    />
                    

                <ItemCardCollector title={'50 bottles for in Pannipitiya'}
                    amount={'50 KG'} price={'5000'} status={'Active'}
                    maxBid={'5963'} 
                    navigation = {navigation} 
                    newBid={true}  
                    />

                <ItemCardCollector title={'50 bottles for in Pannipitiya'}
                    amount={'50 KG'} price={'5000'} status={'Active'}
                    maxBid={'5963'} 
                    navigation = {navigation} 
                    newBid={true}  
                    />

                <ItemCardCollector title={'50 bottles for in Pannipitiya'}
                    amount={'50 KG'} price={'5000'} status={'Active'}
                    maxBid={'5963'} 
                    navigation = {navigation} 
                    newBid={true}  
                    />

                <ItemCardCollector title={'50 bottles for in Pannipitiya'}
                    amount={'50 KG'} price={'5000'} status={'Active'}
                    maxBid={'5963'} 
                    navigation = {navigation} 
                    newBid={true}  
                    />

                <ItemCardCollector title={'50 bottles for in Pannipitiya'}
                    amount={'50 KG'} price={'5000'} status={'Active'}
                    maxBid={'5963'} 
                    navigation = {navigation} 
                    newBid={true}  
                    />

            </ScrollView>
        </View>
    )
}