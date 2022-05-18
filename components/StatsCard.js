import * as React from 'react';
import styles from './Styles';
import { DataTable, Subheading, Appbar, Text, Avatar, Card, Paragraph, Title } from 'react-native-paper';
import Styles from './Styles';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

export default function StatsCard({ title, value, unit, type }) {
    return (
        <Card style={Styles.statsCard}>
            {type == 'earnings' ? <Avatar.Icon icon="currency-usd" style={{ backgroundColor: 'transparent' }} /> :
                <Avatar.Icon icon="package" style={{ backgroundColor: 'transparent' }} />}


            <Card.Content>
                <Title style={Styles.statCardTitle} >{title}</Title>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                    <Title style={Styles.statCardValue}>{value} </Title>
                    <Title style={Styles.statCardUnit}>{unit}</Title>
                </View>

            </Card.Content>


        </Card>
    )
}