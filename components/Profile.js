import * as React from 'react';
import styles from './Styles';
import { DataTable, Subheading, Appbar, Text,Avatar } from 'react-native-paper';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import user from '../assests/img/user.png';
export default function Profile({ username, role }) {
    return (
        <View style={styles.profileBar}>
           
         
           <Avatar.Text size={60} label={username.substring(0,2)} style={styles.avatar}/>
            <View>
            <Text style={styles.profileText}> Welcome Back! </Text>
            <Text style={styles.profileUsername}> {`${username} (${role})`} </Text>
            </View>
          
        </View>
    )
}