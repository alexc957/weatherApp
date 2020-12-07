import React, { useEffect, useState } from 'react';
import {ScrollView,StyleSheet} from 'react-native';
import ForecastCard from './ForecastCard'; 



const fetchData = async () => {
    try {
        console.log('calling');

        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=-0.23&lon=-78.52&exclude=alerts,minutely,hourly&appid=88fcaeb42b2ff317338c6c1030bda284&units=metric`

        )
        const jsonData = await data.json();
        console.log(jsonData);
    }catch(error){
        console.log('error?');
        console.log(error);
    }
}
export default function Forecast({lon,lat}) {


 
    const [forecastList,setForecastList] = useState([])
    useEffect(()=> {
        console.log(lon);
        console.log(lat);
        console.log('callling by ');
        fetchData()
    },[])
    

    return (
        <ScrollView horizontal={true} style={styles.forecastContainer}>
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
       </ScrollView>   
    )

    
}


const styles = StyleSheet.create({
    forecastContainer: {
        flex: 1,
        flexDirection: 'row',
    
        overflow: 'scroll',
        height: 150,
        width: 250,
        marginTop: 25,
    
      }
})