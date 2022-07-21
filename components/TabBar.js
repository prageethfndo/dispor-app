

import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as React from 'react';
import Styles from './Styles';
import AppBar from './AppBar';
import Profile from './Profile';
import StatsCard from './StatsCard';
import { Subheading, FAB, Button, IconButton } from 'react-native-paper';
import ItemCardCollector from './ItemCardCollector';

import { useEffect, useState } from 'react';
import ResponseData from '../temp/ResponseData'
import { transform } from '@babel/core';

export default function TabBar({ navigation, role, route,setUserContext }) {
    const handelNavigation = (comp) => {

        navigation.navigate(comp)
        //check the user role to navigate to home 
        const homeNavigation=()=>{
            (role==='collector') ? navigation.navigate("CollectorMode"):navigation.navigate("SellerMode")
        }
    }

    const logout=()=>{
        navigation.navigate("Login")
        setUserContext("","")
    }
    return (
        <View style={Styles.TabBar}>
         {/*    <IconButton icon={'home-variant'} color={'#fff'} size={30} style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexDirection: 'column', height: "100%"
            }} /> */}
            {(role === 'collector') ? <IconButton icon={'view-list'} color={'#fff'} size={30}
                onPress={() => { handelNavigation("Listings") }} /> :
                <IconButton icon={'tab-plus'} color={'#fff'} size={30}
                    onPress={() => {
                        navigation.navigate('NewListing', { isEditing: false })
                    }} />}

           {/* <IconButton icon={'account'} color={'#fff'} size={30} />*/}
            <IconButton icon={'logout'} color={'#fff'} size={30} onPress={()=>{logout()}}/>

        </View>
    )
}