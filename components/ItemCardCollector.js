import { StyleSheet, Text, View, Image } from 'react-native';
import * as React from 'react';
import Styles from './Styles';
import AppBar from './AppBar';
import Profile from './Profile';
import StatsCard from './StatsCard';
import { Subheading, Card, Title, Button, Divider } from 'react-native-paper';

export default function ItemCardCollector({ title, amount, price, status, maxBid, navigation, newBid, unit }) {
    const _handleOnClick = () => {
        navigation.navigate("Bidding", {
            isEditing: false, 
            title: title,
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
            title: title,
            amount: amount,
            price: price,
            unit: unit,
            status: status,
            maxBid: maxBid

        })
    };

    return (
        <Card style={Styles.itemCard} onPress={() => { console.log('tapped') }}>

            <Card.Content>
                <Text style={Styles.itemCardTitle}>{title}</Text>

                <View style={{
                    display: 'flex', flexDirection: 'row', alignItems: 'flex-start',
                    justifyContent: 'space-between', marginBottom: 5
                }}>

                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>

                        <Text style={Styles.itemCardWeight}>{amount}{unit}</Text>
                        <Text style={Styles.itemCardPrice}>{price} LKR</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Text style={Styles.itemCardText}>Status: {status}</Text>
                        <Text style={Styles.itemCardText}>Highest Bid: {maxBid} LKR</Text>

                    </View>
                </View>

            </Card.Content>
            <Card.Actions style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', width: '100%', justifyContent: 'flex-end' }}>

                {(newBid == true) ? <Button color='#48a7fa' icon={'bitcoin'}
                    onPress={_handleOnClick}>Bid Now</Button> :
                    <View style={{ display: 'flex', flexDirection: "row", justifyContent: "flex-end", alignItems: "center", width: "100%" }}>
                        <Button color='#48a7fa' icon={'playlist-edit'}
                            onPress={_handleOnClick2}>Edit</Button><Button color='#fa4848' icon={'cancel'} >Cancel</Button></View>}


            </Card.Actions>
          


        </Card>
    )
}