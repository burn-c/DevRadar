import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { 
    requestPermissionsAsync, // Ask the user for permission of the location
    getCurrentPositionAsync // Get location  
} from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

function Main({ navigation }) {
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
      <>
      <MapView initialRegion={currentRegion} style={styles.map}>
        <Marker coordinate={{ latitude: -21.1782816, longitude: -47.8161681}} >
          <Image style={styles.avatar} source={{ uri: 'https://avatars0.githubusercontent.com/u/54965836?s=460&v=4'}} />

          <Callout onPress={() => {
            // Navegação
            navigation.navigate('Profile', { github_username: 'burn-c'})
          }}>
            <View style={styles.callout}>
              <Text style={styles.devName}>Carlos Oliveira</Text>
              <Text styles={styles.devBio}>Aqui tem um textão sobre muitas cosias que você deve saber!</Text>
              <Text style={styles.devTechs}>ReactJS, React Native, Node.js</Text>
            </View>

          </Callout>

        </Marker>
      </MapView>
      <View style={styles.searchForm}>
          <TextInput 
          style={styles.searchInput}
          placeholder="Buscar devs por techs..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          />

          <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
          <MaterialIcons name="my-location" size={20} color="#FFF"/>
          </TouchableOpacity>

      </View>
      </>
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
      fontWeight: 'bold',
    },

    searchForm: {
      position: 'absolute',
      top: 20,
      left: 20,
      right: 20,
      zIndex: 5,
      flexDirection: 'row',
    },

    searchInput: {
      flex: 1,
      height: 50,
      backgroundColor: '#FFF',
      color: '#333',
      borderRadius: 25,
      paddingHorizontal: 20,
      fontSize: 16,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 4,
        height: 4,
      },
      elevation: 4,
    },

    loadButton: {
      width: 50,
      height: 50,
      backgroundColor: '#8e4dff',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 15,
    },
})

export default Main;