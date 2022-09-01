import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as React from 'react';
import styles from './Styles';
import AppBar from './AppBar';
import Profile from './Profile';
import StatsCard from './StatsCard';
import { Subheading, FAB, Button, DataTable, TextInput } from 'react-native-paper';
import ItemCardCollector from './ItemCardCollector';
import ResponseData from '../temp/ResponseData';
import { useState, useEffect } from 'react';


export default function Bids({accentColor,  route}){
    const { id,title, weight, price, status } = route.params;
    const [bidData, setBidData]= useState([{amount:"", user:{name:""}}])


    useEffect(()=>{
        const getBids= async()=>{
            const response =await fetch(`https://dispor-api.fly.dev/listings/${id}/bids`,{
                method:'get',
                headers:{
                    'Content-Type': 'application/json',
                }

            })

            const data = await response.json()
            console.log(data)
            setBidData(data)

        }

        getBids().catch(console.log)
    },[])
    return(
        <View
        style={styles.viewContainer}>
        
        <DataTable style={styles.dataTable}>
          <DataTable.Row>
            <DataTable.Cell>ITEM NAME: {title}</DataTable.Cell>
           
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>ITEM WEIGHT: {weight} G</DataTable.Cell>
            
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>PRICE: {price}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>

        <Subheading style={{ marginTop: 20, fontWeight:'900' }}>BIDS</Subheading>
        {/*bids*/}
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          style={{ width: '100%' }}>
           
          <DataTable style={styles.dataTable}>
          {bidData.map((item)=>{
                return(
                    <View key={item.id}>
                        <DataTable.Row key={item.id}>
                            <DataTable.Cell>{item.user.name}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.amount} LKR</DataTable.Cell>
                        </DataTable.Row>
                    </View>
                  
                )
            })}
           
        
          </DataTable>
        </ScrollView>
        
      </View>
    )
}