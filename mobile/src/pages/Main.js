import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { 
    requestPermissionsAsync, // Ask the user for permission of the location
    getCurrentPositionAsync // Get location  
} from 'expo-location';

function Main() {
  const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
          const { granted } = await requestPermissionsAsync();

          if (granted) {
            const { coords } = await getCurrentPositionAsync({
            enableHighAccurancy: true, // Uses GPS location if enabled on mobile
            });

            const { latitude, longitude } = coords;
            
            setCurrentRegion({
              latitude,
              longitude,
              latitudeDelta: 0.4, // Map zoom
              longitudeDelta: 0.4, // Map zoom
            })
          }
        }

        loadInitialPosition();
    }, []);

    // if (!currentRegion) {
    //   return null;
    // }


    return (
      <MapView initialRegion={currentRegion} style={styles.map}>
        <Marker coordinate={{ latitude: -21.1782816, longitude: -47.8161681}} >
          <Image style={styles.avatar} source={{ uri: 'https://avatars0.githubusercontent.com/u/54965836?s=460&v=4'}} />

          <Callout>
            <View style={styles.callout}>
              <Text style={styles.devName}>Carlos Oliveira</Text>
              <Text styles={styles.devBio}>Aqui tem um textão sobre muitas cosias que você deve saber!</Text>
              <Text style={styles.devTechs}>ReactJS, React Native, Node.js</Text>
            </View>

          </Callout>

        </Marker>
      </MapView>  
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },

    avatar: {
      width: 54,
      height: 54,
      borderRadius: 4,
      borderColor: '#FFF'
    },

    callout: {
      width: 260,
    },

    devName: {
      fontWeight: 'bold',
      fontSize: 16,
    },

    devBio: {
      color: '#666',
      marginTop: 5,
    },

    devTechs: {
      marginTop: 5,
    },
})

export default Main;