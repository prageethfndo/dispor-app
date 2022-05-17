import * as React from 'react';
import styles from './Styles';
import { DataTable, Subheading, Appbar, Text,Avatar } from 'react-native-paper';
import user from '../assests/img/user.png';
export default function Profile({ username }) {
    return (
        <Appbar style={styles.profileBar}>
           
           <Avatar.Image size={60} source={require('../assests/img/user.png')} style={styles.avatar} />

            <Appbar.Content title={'Welcome'} subtitle={'Kumara'} />
        </Appbar>
    )
}