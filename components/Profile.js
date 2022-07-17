import * as React from 'react';
import styles from './Styles';
import { DataTable, Subheading, Appbar, Text, Avatar, Button, IconButton } from 'react-native-paper';
import { StyleSheet, View, Image, ScrollView, Animated } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import user from '../assests/img/user.png';
import StatsCard from './StatsCard';

export default function Profile({ username, role, toggle, value1, value2 }) {

    const [isMinimized, setIsMinimized] = useState(true)

    useEffect(() => {
        setIsMinimized(toggle)
    }, [toggle])

    const fadeAnim = useRef(new Animated.Value(-0)).current  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }
        ).start();
    }, [toggle])

    return (

        <View style={{
            backgroundColor: '#17AF82', padding: 5, borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30, width: "100%"
        }}>
            <View style={styles.profileBar}>


                <Avatar.Text size={60} label={username.substring(0, 2)} style={styles.avatar} />
                <View>
                    <Text style={styles.profileText}> Welcome Back! </Text>
                    <Text style={styles.profileUsername}> {`${username} (${role})`} </Text>
                </View>





            </View>
            <Animated.View                 // Special animatable View
                style={{ scaleY: fadeAnim }}>

                {(isMinimized === true) ? (role.toLowerCase()) === 'collector' && <View style={styles.cardRow}>
                    <StatsCard title={'Spent'} value={value1} unit={'LKR'} type={'earnings'} />
                    <StatsCard title={'Bought'} value={value2} unit={'KG'} />
                </View> ||
                    <View style={styles.cardRow}>
                        <StatsCard title={'Earnings'} value={'574545 '} unit={'LKR'} type={'earnings'} />
                        <StatsCard title={'Sold'} value={'500 '} unit={'KG'} />
                    </View> : null
                }
                {/** toggle cards. Change the button icon according to the state*/}
                <IconButton icon={(isMinimized) ? 'chevron-double-up' : 'chevron-double-down'}
                    onPress={() => { (isMinimized) ? setIsMinimized(false) : setIsMinimized(true) }}
                    color={'#fff'} size={30} style={{ width: '100%' }} />
            </Animated.View>
        </View>

    )
}