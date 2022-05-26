import { StyleSheet, Text, View, Image } from 'react-native';
import * as React from 'react';
import Styles from './Styles';
import AppBar from './AppBar';
import Profile from './Profile';
import StatsCard from './StatsCard';
import { Subheading, Card, Title, Button, Divider } from 'react-native-paper';

export default function ItemCard({ title, amount, price, status, maxBid, navigation, editCard, isEditing }) {    
    return (
        <Card style={Styles.itemCard} onPress={() => { console.log('tapped') }}>

            <Card.Content>
                <Text style={Styles.itemCardTitle}>{title}</Text>

                <View style={{
                    display: 'flex', flexDirection: 'row', alignItems: 'flex-start',
                    justifyContent: 'space-between', marginBottom: 5
                }}>

                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>

                        <Text style={Styles.itemCardWeight}>{amount}</Text>
                        <Text style={Styles.itemCardPrice}>{price} LKR</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Text style={Styles.itemCardText}>Status: {status}</Text>
                        <Text style={Styles.itemCardText}>Highest Bid: {maxBid} LKR</Text>

                    </View>
                </View>

            </Card.Content>

            <Card.Actions style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', width: '100%', justifyContent: 'flex-end' }}>
                <Button color='#fa4848' icon={'trash-can'} >Delete</Button>
                <Button color='#48a7fa' icon={'playlist-edit'}
                    onPress={() => editCard(true)}>Edit</Button>
            </Card.Actions>
            <Divider style={{ backgroundColor: '#a6a6a6' }} />
        </Card>
    )
}