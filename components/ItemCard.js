import { StyleSheet, Text, View, Image } from 'react-native';
import * as React from 'react';
import Styles from './Styles';
import AppBar from './AppBar';
import Profile from './Profile';
import StatsCard from './StatsCard';
import { Subheading, Card, Title, Button } from 'react-native-paper';

export default function ItemCard() {
    return (
        <Card style={Styles.itemCard}>
            <Card.Content>
                <View style={{ display: 'flex', flexDirection: 'row',alignItems:'flex-start',
                 justifyContent:'space-between' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent:'flex-start' }}>
                        <Text style={Styles.itemCardTitle}>50 bottles</Text>
                        <Text style={Styles.itemCardText}>50 KG</Text>
                        <Text style={Styles.itemCardText}>5000LKR</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent:'flex-start' }}>
                        <Text style={Styles.itemCardText}>Status: Active</Text>
                        <Text style={Styles.itemCardText}>Highest Bid: 8623LKR</Text>
                      
                    </View>
                </View>

            </Card.Content>
        </Card>
    )
}