
import React, { useEffect, useReducer, useState } from 'react';
import { Button, LogBox, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Weather from './components/weather';
import { FontAwesome5 } from '@expo/vector-icons'; 

import Forecast from './components/Forecast';

const API_URL = 'http://192.168.100.19:5000/weather?location=';

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
  
  const [state, setState] = useState(defaultState)
  const [searchCity, setSearchCity] = useState('')
  const [errorMessage, setErrorMessage] = useState('')




 

  const fetchData = async () => {
    
    try{
      console.log('sfd? ',`${API_URL}${state.location}`);
      const data = await fetch(
        `${API_URL}${state.location}`
      )
      console.log(data.status);
      if(data.status===200){
        const jsonData = await data.json()
      
      setState({
        ...jsonData,
        ready: true
   
      })
      setErrorMessage('')

      }else {
        const message = await data.json()
        setState({
          ...state,
          ready: false,
        })
        setErrorMessage(message.message)
      }


      
     
  

    } catch (error){
      console.log(error);
      setErrorMessage('error')

    }
   
    
    
    
  }

  const submit = () => {
    console.log(searchCity);
    setState( {
      
        ...state,
   
        location: searchCity
      
    })
  }
  
  useEffect(()=> {    

    fetchData();    


  }, [state.location])



  return (

    <View style={styles.mainContainer}>
      <View style={styles.searchContainer}>
          <TextInput
            style={styles.input} 
            placeholder="city"
            
            onChangeText={input => setSearchCity(input)}
            onSubmitEditing={(e)=>submit()}
            value={searchCity}
            />  
          <TouchableOpacity onPress={submit}>
              <FontAwesome5 name="search" size={24} color="black" />
          </TouchableOpacity> 

      </View>

      <View style={styles.container}>    
        {errorMessage? <Text>{errorMessage}</Text> : state.ready ?  <Weather  {...state} /> : <View></View>}
        {state.ready && <Forecast lon={state.lon} lat={state.lat} />}        
      </View> 
     
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
   
    alignItems: 'center',
    
    
    
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'center',
    marginTop: 20
  


  },
  mainContainer: {
    marginTop: '8%',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    marginBottom: '4%',
  },
  input: {
    width: 90,
    borderColor: 'gray',
    borderWidth: 2,
    height: 35,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 1,
    
  },


});
