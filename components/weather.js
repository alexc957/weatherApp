import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function Weather() {


    return(<View>
       <MaterialCommunityIcons name="weather-cloudy" size={100} color="black" />
       <Text>City: </Text>
       <Text>Temperature: 15° C</Text>


    </View> )
}