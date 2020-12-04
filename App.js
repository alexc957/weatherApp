
import React, { useEffect, useReducer, useState } from 'react';
import { Button, LogBox, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Weather from './components/weather';
import { FontAwesome5 } from '@expo/vector-icons'; 
const apiKey = '88fcaeb42b2ff317338c6c1030bda284';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';

const defaultState = {
  location: 'Quito',
  temperature: '',
  weather: 'light rain',
  tempMax: '',
  tempMin: '',
  humidity: '',
  icon: '',
  ready: false,
}


export default function App() {
  
  const [state, setState] = useState(defaultState)
  const [searchCity, setSearchCity] = useState('')
 

  const fetchData = async () => {
    
    try{
      const data = await fetch(
        `${API_URL}${state.location}&appid=${apiKey}&units=metric`
      )
      const jsonData = await data.json()
      console.log(jsonData);
      setState((prevState)=> {
        return {
          ...prevState,
          temperature: jsonData.main.temp,
          tempMax: jsonData.main.temp_max,
          tempMin: jsonData.main.temp_min,
          humidity: jsonData['main']['humidity'],
          weather: jsonData['weather'][0]['main'],
          icon: jsonData.weather[0].icon,
          ready: true,

        }
      })
     
  

    } catch (error){
      console.log(error);

    }
   
    
    
    
  }

  const submit = () => {
    console.log(searchCity);
    setState( {
      
        ...state,
        ready: false,
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
            value={searchCity}
          
      
            
            />  
            <TouchableOpacity onPress={submit}>
              <FontAwesome5 name="search" size={24} color="black" />

            </TouchableOpacity>
       
            
     
          
     

      </View>

      <View style={styles.container}>


    

      {state.ready &&  <Weather  {...state} />}

     
     


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
    marginTop: '15%',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-evenly'
  },
  input: {
    width: 90,
    borderColor: 'gray',
    borderWidth: 2,
    height: 35,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 1,
    
  }

});
