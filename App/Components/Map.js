import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { Dimensions, StyleSheet, View } from 'react-native';

const INITIAL_REGION = {
  latitude: 40.7127281,
  longitude: -74.0060152,
  latitudeDelta: 2,
  longitudeDelta: 2,
};

export default function Map() {
  return (
    <View style={{marginTop: 100}}>
      <MapView style={{
        width:Dimensions.get('screen').width*1,
        height:Dimensions.get('screen').height*0.50,
        borderRadius: 20
      }} 
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});