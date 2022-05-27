import * as React from 'react';
import styles from './Styles';
import { DataTable, Subheading, Appbar, Text, Avatar } from 'react-native-paper';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import user from '../assests/img/user.png';
import StatsCard from './StatsCard';
export default function PageHeader({heading, subheading , height, icon}) {
    return (
        <View style={{ backgroundColor: '#17AF82', 
        padding: 15, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, width:'100%', 
        }}>
         

         <Avatar.Icon icon={icon} color='#fff' size={90} style={{ backgroundColor: 'transparent' }} />
                <View style={{marginBottom:15 , width:"80%"}}>
                    <Text style={{color:"#fff", fontSize:30}}> {heading}</Text>
                    <Text style={{color:"#fff", fontSize:15, marginLeft:20}}>{subheading}</Text>
                </View>





           

            
        </View>
    )
}