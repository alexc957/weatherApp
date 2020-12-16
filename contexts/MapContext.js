import React, {createContext, useState} from 'react';


export const MyContext = createContext()



class CoordinatesProvider extends React.Component {
    state = {
        latitude: -4.3853975,
        longitude: -80.2430129,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    updateCoordinates = (lat,lon) => {
        this.setState({...this.state, latitude: lat, longitude: lon})
    }

    

    render(){
       return <MyContext.Provider value={{...this.state, updateCoordinates: this.updateCoordinates}}>
            {this.props.children}

        </MyContext.Provider>

    }
}

export default CoordinatesProvider; 