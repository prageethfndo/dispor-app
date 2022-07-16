import { StyleSheet, Text, View, Image } from 'react-native';
import * as React from 'react';
import Styles from './Styles';
import AppBar from './AppBar';
import Profile from './Profile';
import StatsCard from './StatsCard';
import { Subheading, Card, Title, Button, Divider } from 'react-native-paper';
import {useState, useEffect} from 'react'

export default function ItemCard({ id, title, amount, price, status, navigation, editCard, isEditing, unit, setIsUpdate, isUpdate,showToast,setShowSpinner }) { 

    const editItem = () => {
        navigation.navigate('NewListing', {
            id:id,
            isEditing:true

        })                
    }
    const endpoint = `https://dispor-api.herokuapp.com/listings/${id}`;
    const [maxBid, setMaxBid] = useState()

    const deleteListing = async () => {
        setShowSpinner("flex")
        console.log(id)
        const response = await fetch(endpoint,
          {
            method: 'delete',
            headers: {
              'Content-Type': 'application/json',
            }
          }
    
        )
    
        const data = await response.json()
        console.log(data)
       showToast("Listing has been deleted")
        setIsUpdate(true)
        setShowSpinner("none")
      }

      useEffect(()=>{
       // getMaxBid().catch(console.log)
      },[id])
      
      const getMaxBid = async ()=>{
        const response = await fetch(`https://dispor-api.herokuapp.com/listings/${id}/bids`,
        {method:'get', headers:{
            'Content-Type': 'application/json',
        }})

        const data = response.json()
        
        console.log(data)
        const maxValueOfY = Math.max(...data.map(o => o.amount), 0);
        setMaxBid(maxValueOfY)
      }

      const ViewBids=()=>{
        navigation.navigate('Bids',{
            id:id, price:price, title:title, status:status, weight:amount
        })

        console.log("test")
      }

    return (
        <Card style={Styles.itemCard} onPress={()=>{ViewBids()}}>

            <Card.Content>
                <Text style={Styles.itemCardTitle}>{title}</Text>

                <View style={{
                    display: 'flex', flexDirection: 'row', alignItems: 'flex-start',
                    justifyContent: 'space-between', marginBottom: 5
                }}>

                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>

                        <Text style={Styles.itemCardWeight}>{amount}g</Text>
                        <Text style={Styles.itemCardPrice}>{price} LKR</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Text style={Styles.itemCardText}>Status: {status}</Text>
                      {/*  <Text style={Styles.itemCardText}>Highest Bid: {maxBid} LKR</Text>*/}

                    </View>
                </View>

            </Card.Content>

            <Card.Actions style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', width: '100%', justifyContent: 'flex-end' }}>
                <Button color='#fa4848' icon={'trash-can'} onPress={()=>{deleteListing()}}>Delete</Button>
                <Button color='#48a7fa' icon={'playlist-edit'}
                    onPress={() => editItem()}>Edit</Button>
            </Card.Actions>
         
        </Card>
    )
}