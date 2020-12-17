
import React, { useEffect, useState} from 'react';
import {  Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import MapScreen from './Screens/MapScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';

const styles = StyleSheet.create({
  error: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    
  }
})

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
        <Tab.Navigator screenOptions={({route})=>({
          tabBarIcon: ({focused, color,size}) => {
            let iconName;
            if(route.name === 'Home'){
              
              iconName = 'weather-partly-snowy-rainy';
            } else if(route.name === 'Map') {
              iconName = 'map-marker-check';
              
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />
          }
        })} 
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
         }} >
          <Tab.Screen name="Home" children={()=> <HomeScreen coordinates={coordinates} setCoordinates={setCoordinates} />} />
          <Tab.Screen name="Map" children={()=> <MapScreen lat={coordinates.lat} lon={coordinates.lon} />} />
        </Tab.Navigator>
      </NavigationContainer>
    
  ) 

  }

  return <View style={styles.error}>
          <Text>
           {errorMessage}
          </Text>
          <MaterialIcons name="error-outline" size={100} color="red" />
    </View>



  
}


/*export default function App() {
  return (<Navigation />)
  
    
  
}
*/
