
import React, {createContext, useEffect, useState} from 'react';
import {  Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import MapScreen from './Screens/MapScreen';

import * as Location from 'expo-location';


const Tab = createBottomTabNavigator();
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
 
  }

  useEffect(()=>{
    getPermisions()
  },[])

  if(coordinates){
    return (
    
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" children={()=> <HomeScreen coordinates={coordinates} setCoordinates={setCoordinates} />} />
          <Tab.Screen name="Map" children={()=> <MapScreen lat={coordinates.lat} lon={coordinates.lon} />} />
        </Tab.Navigator>
      </NavigationContainer>
    
  ) 

  }

  return <Text>
          {errorMessage}
          </Text>



  
}


/*export default function App() {
  return (<Navigation />)
  
    
  
}
*/
