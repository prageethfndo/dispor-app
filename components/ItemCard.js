import { StyleSheet, Text, View, Image } from 'react-native';
import * as React from 'react';
import Styles from './Styles';
import AppBar from './AppBar';
import Profile from './Profile';
import StatsCard from './StatsCard';
import { Subheading, Card, Title, Button, Divider } from 'react-native-paper';

export default function ItemCard({ id, title, amount, price, status, maxBid, navigation, editCard, isEditing, unit, setIsUpdate, isUpdate,showToast }) { 

    const editItem = () => {
        navigation.navigate('NewListing', {
            id:id,
            isEditing:true

        })                
    }
    const endpoint = `https://dispor-api.herokuapp.com/listings/${id}`;

    const deleteListing = async () => {
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
        
      }

    return (
        <Card style={Styles.itemCard} onPress={() => { console.log('tapped') }}>

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
                        <Text style={Styles.itemCardText}>Highest Bid: {maxBid} LKR</Text>

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