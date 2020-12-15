import React, {useEffect, useState} from 'react'
import * as Location from 'expo-location';
import { Button, LogBox, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import WeatherContainer from '../components/WeatherContainer';

export default function HomeScreen(params) {
    const [errorMessage, setErrorMessage] = useState('')
    const [coordinates,setCoordinates] = useState(null)
  
    const getPermisions = async ()=> {
      let {status} = await Location.requestPermissionsAsync();
      if(status !== 'granted'){
        setErrorMessage('Permision to access location was denied');
        return
      }
      let location = await Location.getCurrentPositionAsync({});
      setCoordinates({lat: location.coords.latitude,lon: location.coords.longitude})
      console.log(coordinates)
      
  
  
    }
  
    useEffect(()=>{
      getPermisions()
    },[])
  
  
    if(coordinates){
     
     
      return (
        <WeatherContainer lat={coordinates.lat} lon={coordinates.lon}/>   
      );
    }
    return (
      <Text>
        {errorMessage}
      </Text>
    )
    
  }