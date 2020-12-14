
import React, { useEffect, useState } from 'react';
import { Button, LogBox, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import WeatherContainer from './components/WeatherContainer';
import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen(params) {
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

function MapScreen(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
  
 
}

