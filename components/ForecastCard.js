import React from 'react';
import {View,Text,  StyleSheet, Image} from 'react-native';

export default function Forecast({dt,tempMin,tempMax,weather,icon}){

    const url = 'http://openweathermap.org/img/wn/'+icon+'@2x.png';



    return (
        <View style={styles.card}>
            <Text style={styles.text}>{dt}</Text>
            <Image
            source={{uri: url}}
            style={styles.image}

             />
            <Text style={styles.text}>{weather}</Text>
            <Text style={styles.text}>Min: {tempMin} - Max: {tempMax}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: 'gray',
        width: 140,
        height: 140,
        margin: 5,
        borderRadius: 20
      
        
    },
    image: {
        width: 45,
        height: 45,
        marginLeft: 42,    
    },
    text: {
        textAlign: "center",
        fontSize: 13
    }
})
