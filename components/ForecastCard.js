import React from 'react';
import {View,Text,  StyleSheet} from 'react-native';

export default function Forecast(){



    return (
        <View style={styles.card}>
            <Text>icon</Text>
            <Text>weather</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: 'gray',
        width: 100,
        height: 100,
        margin: 5,
    }
})
