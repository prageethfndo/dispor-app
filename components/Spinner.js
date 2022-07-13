
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as React from 'react';
import Styles from './Styles';
import AppBar from './AppBar';
import Profile from './Profile';
import StatsCard from './StatsCard';
import { Subheading, FAB, Button, ActivityIndicator, MD2Colors } from 'react-native-paper';


export default function Spinner({display}){
    return(
      
        <ActivityIndicator animating={true} color={"green"} size={"large"} hidesWhenStopped={true} style={{display:display}}/>
        
    )
}