import { StyleSheet, Text, View, Image } from 'react-native';
import * as React from 'react';
import Styles from './Styles';
import AppBar from './AppBar';
import Profile from './Profile';
import StatsCard from './StatsCard';
import { Subheading, Card, Title, Button, Divider } from 'react-native-paper';
import { useEffect, useState } from 'react';

export default function ItemCardCollector({ id,title, amount, price, status, maxBid, navigation, newBid, listingId, unit, setIsUpdate, isUpdate, setShowSpinner }) {
    const _handleOnClick = () => {
        navigation.navigate("Bidding", {
            isEditing: false, 
            id: id,
            amount: amount,
            price: price,
            unit: unit,
            status: status,
            maxBid: maxBid
        })
    };
    const _handleOnClick2 = () => {
        navigation.navigate("Bidding", {
            isEditing: true,
           id:id,
           

        })
        console.log(id)
    };

    const [highestBid, setHighestBid] = useState(0)
    const cancelBid= async()=>{
       // setShowSpinner(true)
        const response = await fetch(`https://dispor-api.fly.dev/bids/${id}`,
        {
            method:'delete',
            headers:{
                'Content-Type': 'application/json',
            }
        })

        const data = await response.json();
        console.log(data);
        console.log(id)
        setIsUpdate(true)
        //setShowSpinner(false)

    }

    const getMaxBid= async()=>{
        console.log(id)
        const response = await fetch(`https://dispor-api.fly.dev/listings/${listingId}/bids`,
        {
            method:'get',
            headers:{
                'Content-Type': 'application/json',
            }
        })

        const data = await response.json();
        console.log("bids-> "+data)
        
        const maxValueOfY = Math.max(...data.map(o => o.amount), 0);
        console.log(maxValueOfY)
        setHighestBid(maxValueOfY)
        //setShowSpinner(false)
    } 


    useEffect(() => {
        
         getMaxBid().catch(console.log)
        
    }, [])
    return (
        <Card style={Styles.itemCard} onPress={() => { console.log('tapped') }}>

            <Card.Content>
                <Text style={Styles.itemCardTitle}>{title}</Text>

                <View style={{
                    display: 'flex', flexDirection: 'row', alignItems: 'flex-start',
                    justifyContent: 'space-between', marginBottom: 5
                }}>

                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>

                        <Text style={Styles.itemCardWeight}>{amount}{"g"}</Text>
                     
                       {(newBid==false)?<View><Text/><Text style={Styles.itemCardText}>Your bid:</Text></View>:null} 
                        <Text style={Styles.itemCardPrice}>{price} LKR</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Text style={Styles.itemCardText}>Status: {status}</Text>
                        <Text style={Styles.itemCardText}>Highest Bid: {highestBid} LKR</Text>

                    </View>
                </View>

            </Card.Content>
            <Card.Actions style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', width: '100%', justifyContent: 'flex-end' }}>

                {(newBid == true) ? <Button color='#48a7fa' icon={'bitcoin'}
                    onPress={_handleOnClick}>Bid Now</Button> :
                    <View style={{ display: 'flex', flexDirection: "row", justifyContent: "flex-end", alignItems: "center", width: "100%" }}>
                        <Button color='#48a7fa' icon={'playlist-edit'}
                            onPress={_handleOnClick2}>Edit</Button>
                            <Button color='#fa4848' icon={'cancel'} onPress={()=>{cancelBid()}}>Cancel</Button></View>}


            </Card.Actions>
          


        </Card>
    )
}