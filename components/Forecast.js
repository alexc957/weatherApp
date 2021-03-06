import React, { useEffect, useState } from 'react';
import {ScrollView,StyleSheet} from 'react-native';
import ForecastCard from './ForecastCard'; 






const URL = 'https://aweatherbackend.herokuapp.com/forecast?'




export default function Forecast({lon,lat}) {


    

     
    const [forecastList,setForecastList] = useState([])
    const [errorMessage, setErrorMessage] = useState('')


    const fetchData = async () => {
        try {
            
    
            const data = await fetch(
                `${URL}lat=${lat}&lon=${lon}`
    
            )

            if(data.status===200){
                const jsonData = await data.json();
                setForecastList(jsonData)
                setErrorMessage('')

            } else {
                const message = await data.json()
                setErrorMessage(message.message)
            }
            
        }catch(error){
         setErrorMessage("Could Not get any data")
        }
    }

    useEffect(()=> {
        

 
        fetchData()
    },[lat,lon])
    

    return (
        <ScrollView horizontal={true} style={styles.forecastContainer}>
          {forecastList.map(day => <ForecastCard {...day} key={day.dt}  />)}
       </ScrollView>   
    )

    
}


const styles = StyleSheet.create({
    forecastContainer: {
        flex: 1,
        flexDirection: 'row',
    
        overflow: 'scroll',
        height: 160,
        width: 250,
        marginTop: 25,
    
      },
      text: {
        textAlign: "center",
        fontSize: 13,
        color: '#dcdcdc'
    }
})

