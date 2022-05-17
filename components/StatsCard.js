import * as React from 'react';
import styles from './Styles';
import { DataTable, Subheading, Appbar, Text, Avatar, Card, Paragraph, Title } from 'react-native-paper';
import Styles from './Styles';
export default function StatsCard({title, value}) {
    return (
        <Card style={Styles.statsCard}>



            <Card.Content>
                <Title style={Styles.statCardTitle}>{title}</Title>
                <Title style={Styles.statCardValue}>{value} </Title>
            </Card.Content>


        </Card>
    )
}