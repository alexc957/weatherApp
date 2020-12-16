import React, {useEffect, useState} from 'react'

import { Button, LogBox, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import WeatherContainer from '../components/WeatherContainer';

export default function HomeScreen({coordinates, setCoordinates}) {
    
  
  
  
     
     
      return (
        <WeatherContainer lat={coordinates.lat} lon={coordinates.lon} setCoordinates={setCoordinates}/>   
      );
   
    
  }