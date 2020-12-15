import React, { useEffect, useState } from 'react';
import {ScrollView,StyleSheet} from 'react-native';
import ForecastCard from './ForecastCard'; 
import {MyContext} from '../contexts/MapContext';





const URL = 'http://192.168.100.20:5000/forecast?'


class Forecast extends React.Component {
    static contextType = MyContext;
    constructor(props){
       
        super(props)
        this.state = {
            forecastList: [],
            errorMessage: ''
        }
        this.fetchDat = this.fetchDat.bind(this)
    }

    componentDidMount(){
        this.fetchDat()
       
        
    }
    componentDidUpdate(){
       // this.context.updateCoordinates(this.props.lat,this.props.lon);
       console.log('eh?');
    }
  



    async fetchDat() {
        try {
            
    
            const data = await fetch(
                `${URL}lat=${this.props.lat}&lon=${this.props.lon}`
    
            )

            if(data.status===200){
                const jsonData = await data.json();
                this.setState({forecastList: jsonData, errorMessage: ''})
                

            } else {
                const message = await data.json()
                this.setState({forecastList: [],errorMessage: message})
            }
            
        }catch(error){
            console.log('error?');
            console.log(error);
        }
    }




    render(){
        return <ScrollView horizontal={true} style={styles.forecastContainer}>
        {this.state.forecastList.map(day => <ForecastCard {...day} key={day.dt}  />)}
     </ScrollView>   
    }

}

/*export default function Forecast({lon,lat}) {


    

     
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
            console.log('error?');
            console.log(error);
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
*/

const styles = StyleSheet.create({
    forecastContainer: {
        flex: 1,
        flexDirection: 'row',
    
        overflow: 'scroll',
        height: 160,
        width: 250,
        marginTop: 25,
    
      }
})

export default Forecast