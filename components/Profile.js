import * as React from 'react';
import styles from './Styles';
import { DataTable, Subheading, Appbar, Text, Avatar, Button, IconButton } from 'react-native-paper';
import { StyleSheet, View, Image, ScrollView, Animated } from 'react-native';
import { useState, useContext,useEffect, useRef } from 'react';
import user from '../assests/img/user.png';
import StatsCard from './StatsCard';
import { UserContext } from '../context/userContext';
export default function Profile({ username, role, toggle, }) {

    const [isMinimized, setIsMinimized] = useState(true)
    const [value1, setValue1]= useState(0)
    const [value2, setValue2]= useState(0)

    const userData = useContext(UserContext)

    useEffect(() => {
        setIsMinimized(toggle)
    }, [toggle])

    useEffect(()=>{
        const computeStats= async()=>{
            if(role==='collector')
            {
                const response = await fetch(`https://dispor-api.fly.dev/users/${userData.userid}/bids`,
                {
                    method:'get',
                    headers:{
                        'Content-Type': 'application/json',
                    }
                },
                
                )
    
                const data = await response.json()
                console.log(data)
                var sumOfVal1 = 0;
                var sumofVal2 = 0;
                data.forEach(element => {
                    sumOfVal1 = sumOfVal1+element.amount
                    sumofVal2 = sumofVal2 + element.listing.weight
                });
                setValue1(sumOfVal1)
                setValue2(sumofVal2)
                console.log("sum"+sumOfVal1)
            }
            else
            {
                const response = await fetch(`https://dispor-api.fly.dev/users/${userData.userid}/listings`,
                {
                    method:'get',
                    headers:{
                        'Content-Type': 'application/json',
                    }
                },
                
                )
    
                const data = await response.json()
                console.log(data)
                var sumOfVal1 = 0;
                var sumofVal2 = 0;
                data.forEach(element => {
                    sumOfVal1 = sumOfVal1+element.price
                    sumofVal2 = sumofVal2 + element.weight
                });
                setValue1(sumOfVal1)
                setValue2(sumofVal2)
                console.log("sum"+sumOfVal1)
            }
           
        }

        computeStats().catch(console.log)
    },[])
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
                        <StatsCard title={'Estimated Earnings'} value={value1} unit={'LKR'} type={'earnings'} />
                        <StatsCard title={'Estimated Sales'} value={value2} unit={'KG'} />
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