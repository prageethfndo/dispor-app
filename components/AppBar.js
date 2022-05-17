import * as React from 'react';
import styles from './Styles';
import { DataTable, Subheading, Appbar } from 'react-native-paper';

export default function AppBar({title, backAction}) {
    return (
        <Appbar style={styles.appBar}>
            <Appbar.BackAction onPress={backAction} />
            <Appbar.Content title={title} />
        </Appbar>
    )
}