import React, {useState} from 'react';
import {View, Text,StyleSheet, Dimensions} from 'react-native'
import MapView, {Marker} from 'react-native-maps';




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});



  class MapScreen extends React.Component {

    constructor(props){
      super(props)

    }

   

    render(){
      const latitudeDelta = 0.0922;
      const longitudeDelta = 0.0421;
      return  <View style={styles.container}>
      <MapView style={styles.map} region={{latitude: this.props.lat,longitude: this.props.lon,latitudeDelta, longitudeDelta}} >
        <Marker  coordinate={{latitude:this.props.lat,longitude:this.props.lon}} />
      </MapView>
    </View>

    }

  }

  export default MapScreen;