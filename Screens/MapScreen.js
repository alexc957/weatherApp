import React, {useState} from 'react';
import {View, Text,StyleSheet, Dimensions} from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import {MyContext} from '../contexts/MapContext';



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

    static contextType = MyContext;

    render(){
      const {latitude,longitude,latitudeDelta, longitudeDelta} = this.context;
      return  <View style={styles.container}>
      <MapView style={styles.map} region={{latitude,longitude,latitudeDelta, longitudeDelta}} >
        <Marker  coordinate={{latitude,longitude}} />
      </MapView>
    </View>

    }

  }

  export default MapScreen;