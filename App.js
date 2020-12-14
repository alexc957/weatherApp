
import React, { useEffect, useReducer, useState } from 'react';
import { Button, LogBox, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Weather from './components/weather';
import { FontAwesome5 } from '@expo/vector-icons'; 
import * as Location from 'expo-location';
import Forecast from './components/Forecast';
import WeatherContainer from './components/WeatherContainer';

const API_URL = 'http://192.168.100.19:5000/weather';

const defaultState = {
  location: 'Quito',
  temperature: '',
  weather: 'light rain',
  tempMax: '',
  tempMin: '',
  humidity: '',
  icon: '',
  lon: '',
  lat: '',
  ready: false,

}



export default function App() {
  

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

