import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



     
export default function Weather({location, weather,temperature, tempMax,tempMin,humidity,icon}) {
    
    const url = 'http://openweathermap.org/img/wn/'+icon+'@2x.png';

  


    return(<View>
       <Image 
            style={styles.icon}
            source={{
                uri: url
            }} />
      <View style={styles.textContainer}>

      
        <Text>Weather: {weather}</Text>
        <Text>Temperature: {temperature}° C</Text>
        <Text>Max temperature {tempMax}° C</Text>
        <Text>Min temperature {tempMin}° C</Text>
        <Text>humidity {humidity}%</Text>

      </View>


    </View> )
}

const styles = StyleSheet.create({
    icon: {
        
        borderColor: 'gray',
        borderRadius: 25,
        borderWidth: 2,
        width: 160,
        height: 195,
        backgroundColor: '#87CEFA'
    },
    textContainer: {
        paddingTop: 5,
        
    }
})